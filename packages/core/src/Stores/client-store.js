import moment                        from 'moment';
import {
    action,
    computed,
    observable,
    runInAction,
    when,
    reaction,
}                                    from 'mobx';
import CurrencyUtils                from 'deriv-shared/utils/currency';
import ObjectUtils                  from 'deriv-shared/utils/object';
import {
    requestLogout,
    WS }                             from 'Services';
import ClientBase                    from '_common/base/client_base';
import BinarySocket                  from '_common/base/socket_base';
import * as SocketCache              from '_common/base/socket_cache';
import { localize }                  from 'App/i18n';
import {
    LocalStore,
    State }                          from '_common/storage';
import BinarySocketGeneral           from 'Services/socket-general';
import { handleClientNotifications } from './Helpers/client-notifications';
import BaseStore                     from './base-store';
import { getClientAccountType }      from './Helpers/client';
import { buildCurrenciesList }       from './Modules/Trading/Helpers/currency';
import { toMoment }                  from '../Utils/Date';

const storage_key = 'client.accounts';
export default class ClientStore extends BaseStore {
    @observable loginid;
    @observable upgrade_info;
    @observable email;
    @observable accounts                       = {};
    @observable switched                       = '';
    @observable switch_broadcast               = false;
    @observable currencies_list                = {};
    @observable residence_list                 = [];
    @observable states_list                    = [];
    @observable selected_currency              = '';
    @observable is_populating_account_list     = false;
    @observable is_populating_mt5_account_list = true;
    @observable website_status                 = {};
    @observable account_settings               = {};
    @observable account_status                 = {};
    @observable device_data                    = {};
    @observable landing_companies              = {
        financial_company: {},
        gaming_company   : {},
    };

    @observable upgradeable_landing_companies = [];
    @observable mt5_login_list = [];
    @observable statement      = [];
    @observable obj_total_balance = {};

    @observable verification_code = {
        signup                : '',
        reset_password        : '',
        payment_withdraw      : '',
        payment_agent_withdraw: '',
    };

    constructor(root_store) {
        super({ root_store });
    }

    @computed
    get balance() {
        if (ObjectUtils.isEmptyObject(this.accounts)) return undefined;
        return (this.accounts[this.loginid] && 'balance' in this.accounts[this.loginid]) ?
            this.accounts[this.loginid].balance.toString() :
            undefined;
    }

    /**
     * Temporary property. should be removed once we are fully migrated from the old app.
     *
     * @returns {boolean}
     */
    @computed
    get is_client_allowed_to_visit() {
        return !!(
            !this.is_logged_in || this.is_virtual || this.accounts[this.loginid].landing_company_shortcode === 'svg'
        );
    }

    @computed
    get has_real_account() {
        return this.active_accounts.some(acc => acc.is_virtual === 0);
    }

    @computed
    get first_switchable_real_loginid () {
        const result = this.active_accounts.find((acc) => acc.is_virtual === 0 && acc.landing_company_shortcode === 'svg');
        return result.loginid || undefined;
    }

    @computed
    get can_change_fiat_currency () {
        const has_no_mt5           = !this.has_mt5_login;
        const has_no_transaction   = (this.statement.count === 0 && this.statement.transactions.length === 0);
        const has_account_criteria = has_no_transaction && has_no_mt5;
        return !this.is_virtual && (
            has_account_criteria &&
            this.current_currency_type === 'fiat'
        );
    }

    @computed
    get can_change_currency () {
        const has_available_crypto_currencies = this.available_crypto_currencies.length > 0;
        return this.can_change_fiat_currency || (!this.is_virtual && has_available_crypto_currencies);
    }

    @computed
    get legal_allowed_currencies () {
        if (!this.landing_companies) return [];
        if (this.landing_companies.gaming_company) {
            return this.landing_companies.gaming_company.legal_allowed_currencies;
        }
        if (this.landing_companies.financial_company) {
            return this.landing_companies.financial_company.legal_allowed_currencies;
        }
        return [];
    }

    @computed
    get upgradeable_currencies () {
        if (!this.legal_allowed_currencies) return [];
        return this.legal_allowed_currencies.map(currency => (
            {
                value: currency,
                ...this.website_status.currencies_config[currency],
            }
        ));
    }

    @computed
    get current_currency_type () {
        if (this.account_type === 'virtual') return 'virtual';
        if (this.website_status &&
            this.website_status.currencies_config &&
            this.website_status.currencies_config[this.currency]
        ) {
            return this.website_status.currencies_config[this.currency].type;
        }

        return undefined;
    }

    @computed
    get available_crypto_currencies () {
        const values = Object.values(this.accounts)
            .reduce((acc, item) => {
                acc.push(item.currency);
                return acc;
            }, []);

        return this.upgradeable_currencies
            .filter(acc => !values.includes(acc.value) && acc.type === 'crypto');
    }

    @computed
    get has_fiat () {
        const values = Object.values(this.accounts)
            .reduce((acc, item) => {
                if (!item.is_virtual) {
                    acc.push(item.currency);
                }
                return acc;
            }, []);

        return !!this.upgradeable_currencies
            .filter(acc => values.includes(acc.value) && acc.type === 'fiat')
            .length;
    }

    @computed
    get account_list() {
        return this.all_loginids.map(id => (
            !this.isDisabled(id) &&
            this.getToken(id) ?
                this.getAccountInfo(id) :
                undefined
        )).filter(account => account);
    }

    @computed
    get has_mt5_login() {
        return this.mt5_login_list.length > 0;
    }

    @computed
    get active_accounts() {
        return this.accounts instanceof Object
            ? Object.values(this.accounts).filter(account => !account.is_disabled)
            : [];
    }

    @computed
    get all_loginids() {
        return !ObjectUtils.isEmptyObject(this.accounts) ? Object.keys(this.accounts) : [];
    }

    @computed
    get account_title() {
        return ClientBase.getAccountTitle(this.loginid);
    }

    @computed
    get currency() {
        if (this.selected_currency.length) {
            return this.selected_currency;
        } else if (this.is_logged_in) {
            return this.accounts[this.loginid].currency;
        }

        return this.default_currency;
    }

    @computed
    get default_currency() {
        if (Object.keys(this.currencies_list).length > 0) {
            const keys = Object.keys(this.currencies_list);
            // Fix for edge case when logging out from crypto accounts causes Fiat list to be empty
            if (this.currencies_list.Fiat.length < 1) return 'USD';
            return Object.values(this.currencies_list[`${keys[0]}`])[0].text;
        }

        return 'USD';
    }

    @computed
    get is_fully_authenticated() {
        if (!this.account_status.status) return false;
        return this.account_status.status.some(status => status === 'authenticated');
    }

    @computed
    get landing_company_shortcode() {
        return this.accounts[this.loginid].landing_company_shortcode;
    }

    @computed
    get landing_company() {
        return this.landing_companies;
    }

    @computed
    get is_valid_login() {
        if (!this.is_logged_in) return true;
        const valid_login_ids_regex = new RegExp('^(MX|MF|VRTC|MLT|CR|FOG)[0-9]+$', 'i');
        return this.all_loginids.every(id => valid_login_ids_regex.test(id));
    }

    @computed
    get is_logged_in() {
        return !!(
            !ObjectUtils.isEmptyObject(this.accounts) &&
            Object.keys(this.accounts).length > 0 &&
            this.loginid &&
            this.accounts[this.loginid].token
        );
    }

    @computed
    get is_virtual() {
        return !ObjectUtils.isEmptyObject(this.accounts) &&
        this.accounts[this.loginid] && !!this.accounts[this.loginid].is_virtual;
    }

    @computed
    get can_upgrade() {
        return this.upgrade_info &&
        (this.upgrade_info.can_upgrade || this.upgrade_info.can_open_multi);
    }

    @computed
    get can_upgrade_to() {
        return this.upgrade_info && (this.upgrade_info.can_upgrade_to);
    }

    @computed
    get virtual_account_loginid() {
        return this.all_loginids
            .find(loginid => !!this.accounts[loginid].is_virtual);
    }

    @computed
    get is_single_currency() {
        return Object.keys(this.currencies_list).map(type =>
            Object.values(this.currencies_list[type]).length)
            .reduce((acc, cur) => acc + cur, 0) === 1;
    }

    @computed
    get account_type() {
        return getClientAccountType(this.loginid);
    }

    /**
     * Store Values relevant to the loginid to local storage.
     *
     * @param loginid
     */
    @action.bound
    resetLocalStorageValues(loginid) {
        this.accounts[loginid].accepted_bch = 0;
        LocalStore.setObject(storage_key, this.accounts);
        LocalStore.set('active_loginid', loginid);
        this.loginid = loginid;
    }

    @action.bound
    getBasicUpgradeInfo() {
        const upgradeable_landing_companies = State.getResponse('authorize.upgradeable_landing_companies');
        let can_open_multi                  = false;
        let type,
            can_upgrade_to;
        if ((upgradeable_landing_companies || []).length) {
            can_open_multi   = upgradeable_landing_companies.indexOf(
                this.accounts[this.loginid].landing_company_shortcode) !== -1;
            const canUpgrade = (...landing_companies) => landing_companies.find(landing_company => (
                landing_company !== this.accounts[this.loginid].landing_company_shortcode &&
                upgradeable_landing_companies.indexOf(landing_company) !== -1
            ));
            can_upgrade_to   = canUpgrade('svg', 'iom', 'malta', 'maltainvest');
            if (can_upgrade_to) {
                type = can_upgrade_to === 'maltainvest' ? 'financial' : 'real';
            }
        }

        return {
            type,
            can_upgrade: !!can_upgrade_to,
            can_upgrade_to,
            can_open_multi,
        };
    }

    @action.bound
    responsePayoutCurrencies(response) {
        const list           = response.payout_currencies || response;
        this.currencies_list = buildCurrenciesList(list);
        this.selectCurrency('');
    }

    @action.bound
    responseAuthorize(response) {
        this.accounts[this.loginid].email                     = response.authorize.email;
        this.accounts[this.loginid].currency                  = response.authorize.currency;
        this.accounts[this.loginid].is_virtual                = +response.authorize.is_virtual;
        this.accounts[this.loginid].session_start             = parseInt(moment().utc().valueOf() / 1000);
        this.accounts[this.loginid].landing_company_shortcode = response.authorize.landing_company_name;
        this.accounts[this.loginid].country                   = response.country;
        this.updateAccountList(response.authorize.account_list);
        this.upgrade_info = this.getBasicUpgradeInfo();
        this.user_id      = response.authorize.user_id;
        ClientBase.responseAuthorize(response);
    }

    @action.bound
    setWebsiteStatus(response) {
        this.website_status = response.website_status;
        CurrencyUtils.setCurrencies(this.website_status);
    }

    @action.bound
    accountRealReaction(response) {
        return new Promise(async (resolve) => {
            runInAction(() => {
                this.is_populating_account_list = true;
            });
            const client_accounts           = JSON.parse(LocalStore.get(storage_key));
            const {
                oauth_token,
                client_id,
            }                               = response.new_account_real;
            const authorize_response        = await BinarySocket.authorize(oauth_token);

            const new_data                     = {};
            new_data.token                     = oauth_token;
            new_data.residence                 = authorize_response.authorize.country;
            new_data.currency                  = authorize_response.authorize.currency;
            new_data.is_virtual                = authorize_response.authorize.is_virtual;
            new_data.landing_company_name      = authorize_response.authorize.landing_company_fullname;
            new_data.landing_company_shortcode = authorize_response.authorize.landing_company_name;

            runInAction(() => client_accounts[client_id] = new_data);
            this.setLoginInformation(client_accounts, client_id);
            this.setAccountSettings(
                (await WS.authorized.storage.getSettings())
                    .get_settings,
            );
            resolve();
        });
    }

    @action.bound
    setLoginInformation(client_accounts, client_id) {
        this.accounts = client_accounts;
        localStorage.setItem(storage_key, JSON.stringify(client_accounts));
        LocalStore.set(storage_key, JSON.stringify(client_accounts));
        this.is_populating_account_list = false;
        this.upgrade_info               = this.getBasicUpgradeInfo();
        this.setSwitched(client_id);
    }

    @action.bound
    realAccountSignup(form_values) {
        return new Promise(async (resolve, reject) => {
            form_values.residence = this.accounts[this.loginid].residence;
            form_values.salutation = 'Mr'; // TODO remove this once the api for salutation is optional.
            const response = await WS.newAccountReal(form_values);
            if (!response.error) {
                await this.accountRealReaction(response);
                resolve(response);
            } else {
                reject(response.error.message);
            }
        });
    }

    @action.bound
    setAccountCurrency(currency) {
        return new Promise(async (resolve, reject) => {
            const response = await WS.setAccountCurrency(currency, {
                previous_currency: this.currency,
            });
            if (!response.error) {
                runInAction(() => {
                    const new_account = Object.assign({}, this.accounts[this.loginid]);
                    new_account.currency = currency;
                    this.accounts[this.loginid] = new_account;
                });
                localStorage.setItem(storage_key, JSON.stringify(this.accounts));
                LocalStore.setObject(storage_key, JSON.parse(JSON.stringify(this.accounts)));
                this.selectCurrency(currency);
                this.root_store.ui.removeNotification({ key: 'currency' });
                // Refresh trade-store currency and proposal before requesting new proposal upon login
                // await this.root_store.modules.trade.initAccountCurrency(currency);
                resolve(response);
            } else {
                reject(response.error.message);
            }
        });
    }

    @action.bound
    createCryptoAccount(crr) {
        const { date_of_birth, first_name, last_name, salutation } = this.account_settings;
        const residence = this.accounts[this.loginid].residence;

        return new Promise(async (resolve, reject) => {
            const response = await WS.newAccountReal({
                first_name,
                last_name,
                salutation,
                residence,
                currency     : crr,
                date_of_birth: toMoment(date_of_birth).format('YYYY-MM-DD'),
            });
            if (!response.error) {
                this.accountRealReaction(response);
                resolve(response);
            } else {
                reject(response.error.message);
            }
        });
    }

    @computed
    get email_address() {
        if (this.accounts && this.accounts[this.loginid]) {
            return this.accounts[this.loginid].email;
        }

        return '';
    }

    @computed
    get is_website_status_ready() {
        return this.website_status &&
            this.website_status.site_status === 'up';
    }

    @action.bound
    updateAccountList(account_list) {
        account_list.forEach((account) => {
            if (this.accounts[account.loginid]) {
                this.accounts[account.loginid].excluded_until = account.excluded_until || '';
                Object.keys(account).forEach((param) => {
                    const param_to_set = param === 'country' ? 'residence' : param;
                    const value_to_set = typeof account[param] === 'undefined' ? '' : account[param];
                    if (param_to_set !== 'loginid') {
                        this.accounts[account.loginid][param_to_set] = value_to_set;
                    }
                });
            }
        });
    }

    /**
     * Switch to the given loginid account.
     *
     * @param {string} loginid
     */
    @action.bound
    async switchAccount(loginid) {
        this.root_store.ui.removeAllNotifications();
        this.setSwitched(loginid);
        this.responsePayoutCurrencies(await WS.authorized.payoutCurrencies());
    }

    @action.bound
    switchEndSignal() {
        this.switch_broadcast = false;
    }

    @action.bound
    refreshNotifications() {
        this.root_store.ui.removeAllNotifications();
        const client = this.accounts[this.loginid];
        const { has_missing_required_field } = handleClientNotifications(
            client,
            this.account_settings,
            this.account_status,
            this.root_store.ui.addNotification,
            this.loginid,
            this.root_store.ui,
        );
        this.setHasMissingRequiredField(has_missing_required_field);
    }

    /**
     * We initially fetch things from local storage, and then do everything inside the store.
     * This will probably be the only place we are fetching data from Client_base.
     */
    @action.bound
    async init(login_new_user) {
        const authorize_response = await this.setUserLogin(login_new_user);
        this.setLoginId(LocalStore.get('active_loginid'));
        this.setAccounts(LocalStore.getObject(storage_key));
        this.setSwitched('');
        const client = this.accounts[this.loginid];

        // If there is an authorize_response, it means it was the first login
        if (authorize_response) {
            // If this fails, it means the landing company check failed
            if (this.loginid === authorize_response.authorize.loginid) {
                BinarySocketGeneral.authorizeAccount(authorize_response);
            } else { // So it will send an authorize with the accepted token, to be handled by socket-general
                await BinarySocket.authorize(client.token);
            }
        }

        /**
         * Set up reaction for account_settings, account_status
         */
        reaction(
            () => [this.account_settings, this.account_status],
            () => {
                if (client && !client.is_virtual) {
                    const { has_missing_required_field } = handleClientNotifications(
                        client,
                        this.account_settings,
                        this.account_status,
                        this.root_store.ui.addNotification,
                        this.loginid,
                        this.root_store.ui,
                    );
                    this.setHasMissingRequiredField(has_missing_required_field);
                } else if (!client || client.is_virtual) {
                    this.root_store.ui.removeAllNotifications();
                }
            }
        );

        // TODO: set all currency references to be used only from client-store,
        // removing the need for reinitializing below
        if (client && !client.is_virtual) {
            if (this.currency && (this.currency.length > 0)) {
                // this.root_store.modules.trade.initAccountCurrency(this.currency);
            }
        }
        this.selectCurrency('');

        this.responsePayoutCurrencies(await WS.authorized.payoutCurrencies());
        if (this.is_logged_in) {
            WS.authorized.storage.mt5LoginList().then(this.responseMt5LoginList);
            WS.authorized.storage.landingCompany(this.accounts[this.loginid].residence)
                .then(this.responseLandingCompany);
            this.responseStatement(
                await BinarySocket.send({
                    statement: 1,
                }),
            );
        }
        this.responseWebsiteStatus(await WS.storage.websiteStatus());

        this.registerReactions();
    }

    @action.bound
    responseWebsiteStatus(response) {
        this.website_status = response.website_status;
    }

    @action.bound
    responseLandingCompany(response) {
        this.landing_companies = response.landing_company;
    }

    @action.bound
    setLoginId(loginid) {
        this.loginid = loginid;
    }

    @action.bound
    setAccounts(accounts) {
        this.accounts = accounts;
    }

    @action.bound
    setSwitched(switched) {
        this.switched = switched;
    }

    @action.bound
    setHasMissingRequiredField(has_missing_required_field) {
        this.has_missing_required_field = has_missing_required_field;
    }

    /**
     * Check if account is disabled or not
     *
     * @param loginid
     * @returns {string}
     */
    isDisabled(loginid = this.loginid) {
        return this.getAccount(loginid).is_disabled;
    }

    /**
     * Get accounts token from given login id.
     *
     * @param loginid
     * @returns {string}
     */
    getToken(loginid = this.loginid) {
        return this.getAccount(loginid).token;
    }

    /**
     * Get account object from given login id
     *
     * @param loginid
     * @returns {object}
     */
    getAccount(loginid = this.loginid) {
        return this.accounts[loginid];
    }

    /**
     * Get information required by account switcher
     *
     * @param loginid
     * @returns {{loginid: *, is_virtual: (number|number|*), icon: string, title: *}}
     */
    getAccountInfo(loginid = this.loginid) {
        const account      = this.getAccount(loginid);
        const currency     = account.currency;
        const is_virtual   = account.is_virtual;
        const account_type = !is_virtual && currency ? currency : ClientBase.getAccountTitle(loginid);

        return {
            loginid,
            is_virtual,
            icon : account_type.toLowerCase(), // TODO: display the icon
            title: account_type.toLowerCase() === 'virtual' ? localize('DEMO') : account_type,
        };
    }

    @action.bound
    broadcastAccountChange() {
        this.switch_broadcast = true;
    }

    broadcastAccountChangeAfterAuthorize() {
        return BinarySocket.wait('authorize').then(() => {
            this.broadcastAccountChange();
        });
    }

    @action.bound
    async switchAccountHandler() {
        if (!this.switched || !this.switched.length || !this.getAccount(this.switched).token) {
            // Logout if the switched_account doesn't belong to any loginid.
            if (!this.all_loginids.some(id => id !== this.switched) || this.switched === this.loginid) {
                this.root_store.ui.addNotification({
                    message: localize('Could not switch to default account.'),
                    type   : 'danger',
                });
                // request a logout
                requestLogout();
                // this.root_store.modules.trade.clearContracts();
                return;
            }

            // this.root_store.modules.portfolio.clearTable();
            // Send a toast message to let the user know we can't switch his account.
            this.root_store.ui.addNotification({
                message: localize('Switching to default account.'),
                type   : 'info',
            });

            // switch to default account.
            this.switchAccount(this.all_loginids[0]);
            await this.switchAccountHandler();
            return;
        }

        // this.root_store.modules.trade.proposal_info = {};
        sessionStorage.setItem('active_tab', '1');
        // set local storage
        this.root_store.gtm.setLoginFlag();
        this.resetLocalStorageValues(this.switched);
        SocketCache.clear();
        WS.forgetAll('balance');
        await BinarySocket.authorize(this.getToken());
        await this.init();
        this.broadcastAccountChange();
    }

    @action.bound
    registerReactions() {
        // Switch account reactions.
        when(
            () => this.switched,
            this.switchAccountHandler,
        );
    }

    @action.bound
    setBalance(obj_balance) {
        if (this.accounts[obj_balance.loginid]) {
            this.accounts[obj_balance.loginid].balance = obj_balance.balance;
            if (obj_balance.total) {
                this.obj_total_balance = {
                    amount  : obj_balance.total.real.amount,
                    currency: obj_balance.total.real.currency,
                };
            }
            this.resetLocalStorageValues(this.loginid);
        }
    }

    @action.bound
    selectCurrency(value) {
        this.selected_currency = value;
    }

    @action.bound
    setResidence(residence) {
        this.accounts[this.loginid].residence = residence;
    }

    @action.bound
    setEmail(email) {
        this.accounts[this.loginid].email = email;
        this.email                        = email;
    }

    @action.bound
    setAccountSettings(settings) {
        this.account_settings = settings;
    }

    @action.bound
    setAccountStatus(status) {
        this.account_status = status;
    }

    @action.bound
    cleanUp() {
        this.root_store.gtm.pushDataLayer({ event: 'log_out' });
        this.loginid      = null;
        this.upgrade_info = undefined;
        this.accounts     = {};
        runInAction(async () => {
            this.responsePayoutCurrencies(await WS.payoutCurrencies());
        });
        // this.root_store.modules.trade.should_refresh_active_symbols = true;
        // this.root_store.modules.trade.clearContracts();
        // this.root_store.modules.trade.resetErrorServices();
        this.root_store.ui.removeAllNotifications();
        // this.root_store.modules.trade.refresh();
        // this.root_store.modules.trade.debouncedProposal();
    }

    /* eslint-disable */
    @action.bound
    storeClientAccounts(obj_params, account_list) {
        // store consistent names with other API calls
        // API_V4: send consistent names
        const map_names     = {
            country             : 'residence',
            landing_company_name: 'landing_company_shortcode',
        };
        const client_object = {};
        let active_loginid;

        let is_allowed_real = true;
        // Performs check to avoid login of landing companies that are currently not supported in app
        account_list.forEach(function(account) {
            if (!/^virtual|svg$/.test(account.landing_company_name)) {
                is_allowed_real = false;
            }
        });

        account_list.forEach(function(account) {
            Object.keys(account).forEach(function(param) {
                if (param === 'loginid') {
                    if (!active_loginid && !account.is_disabled) {
                        if (is_allowed_real && !account.is_virtual) {
                            active_loginid = account[param];
                        } else if (account.is_virtual) { // TODO: [only_virtual] remove this to stop logging non-SVG clients into virtual
                            active_loginid = account[param];
                        }
                    }
                } else {
                    const param_to_set = map_names[param] || param;
                    const value_to_set = typeof account[param] === 'undefined' ? '' : account[param];
                    if (!(account.loginid in client_object)) {
                        client_object[account.loginid] = {};
                    }
                    client_object[account.loginid][param_to_set] = value_to_set;
                }
            });
        });

        let i = 1;
        while (obj_params[`acct${i}`]) {
            const loginid = obj_params[`acct${i}`];
            const token   = obj_params[`token${i}`];
            if (loginid && token) {
                client_object[loginid].token = token;
            }
            i++;
        }

        // if didn't find any login ID that matched the above condition
        // or the selected one doesn't have a token, set the first one
        if (!active_loginid || !client_object[active_loginid].token) {
            active_loginid = obj_params.acct1;
        }

        // TODO: send login flag to GTM if needed

        if (active_loginid && Object.keys(client_object).length) {
            localStorage.setItem('active_loginid', active_loginid);
            localStorage.setItem('client.accounts', JSON.stringify(client_object));
        }
    }

    @action.bound
    async setUserLogin(login_new_user) { // login_new_user is populated only on virtual sign-up
        let obj_params = {};
        const search   = window.location.search;
        if (search) {
            const arr_params = window.location.search.substr(1).split('&');
            arr_params.forEach(function(param) {
                if (param) {
                    const param_value = param.split('=');
                    if (param_value) {
                        obj_params[param_value[0]] = param_value[1];
                    }
                }
            });
        }

        const is_client_logging_in = login_new_user ? login_new_user.token1 : obj_params.token1;

        if (is_client_logging_in) {
            window.history.replaceState({}, document.title, sessionStorage.getItem('redirect_url'));

            // is_populating_account_list is used for socket general to know not to filter the first-time logins
            this.is_populating_account_list = true;
            const authorize_response        = await BinarySocket.authorize(is_client_logging_in);
            this.is_populating_account_list = false;

            if (login_new_user) { // overwrite obj_params if login is for new virtual account
                obj_params = login_new_user;
            }

            runInAction(() => {
                const account_list = (authorize_response.authorize || {}).account_list;
                this.upgradeable_landing_companies = authorize_response.upgradeable_landing_companies;
                if (account_list && ObjectUtils.isEmptyObject(this.accounts)) {
                    this.storeClientAccounts(obj_params, account_list);
                }
            });
            return authorize_response;
        }
    }

    @action.bound
    setVerificationCode(code, action) {
        this.verification_code[action] = code;
        if (code) {
            LocalStore.set(`verification_code.${action}`, code);
        } else {
            LocalStore.remove(`verification_code.${action}`);
        }
        if (action === 'signup') {
            // TODO: add await if error handling needs to happen before AccountSignup is initialised
            this.fetchResidenceList(); // Prefetch for use in account signup process
        }
    }

    @action.bound
    setDeviceData(device_data) {
        this.device_data = device_data;
    }

    @action.bound
    onSignup({ password, residence }, cb) {
        if (!this.verification_code.signup || !password || !residence) return;

        // Currently the code doesn't reach here and the console log is needed for debugging.
        // TODO: remove console log when AccountSignup component and validation are ready
        WS.newAccountVirtual(
            this.verification_code.signup,
            password,
            residence,
            ObjectUtils.removeEmptyPropertiesFromObject(this.device_data),
        ).then(async response => {
            if (response.error) {
                cb(response.error.message);
            } else {
                cb();
                // Initialize client store with new user login
                const { client_id, currency, oauth_token } = response.new_account_virtual;
                await this.switchToNewlyCreatedAccount(client_id, oauth_token, currency);
            }
        });
    }

    async switchToNewlyCreatedAccount(client_id, oauth_token, currency) {
        const new_user_login = {
            acct1 : client_id,
            token1: oauth_token,
            curr1 : currency,
        };
        await this.init(new_user_login);

        // Refresh trade-store currency and proposal before requesting new proposal upon login
        // this.root_store.modules.trade.initAccountCurrency(currency);
    }

    @action.bound
    fetchResidenceList() {
        WS.residenceList().then(response => {
            runInAction(() => {
                this.residence_list = response.residence_list || [];
            });
        });
    }

    @action.bound
    fetchStatesList() {
        WS.statesList({
            states_list: this.accounts[this.loginid].residence
        }).then(response => {
            runInAction(() => {
                this.states_list = response.states_list || [];
            })
        })
    }

    @action.bound
    responseMt5LoginList(response) {
        this.is_populating_mt5_account_list = false;

        if (!response.error) {
            this.mt5_login_list = response.mt5_login_list;
        }
    }

    @action.bound
    responseStatement(response) {
        if (!response.error) {
            this.statement = response.statement;
        }
    }

    @action.bound
    getChangeableFields() {
        const has_changeable_field = this.landing_company_shortcode === 'svg' && !this.is_fully_authenticated;
        const changeable           = ClientBase.getLandingCompanyValue(this.loginid, this.landing_company, 'changeable_fields');
            if (has_changeable_field) {
            let changeable_fields = [];
            if (changeable && changeable.only_before_auth) {
                changeable_fields = [...changeable.only_before_auth];
            }
            return changeable_fields;
        }
        return [];
    }

    @computed
    get is_high_risk() {
        return this.account_status.risk_classification === 'high';
    }
}
/* eslint-enable */
