import classNames        from 'classnames';
import PropTypes         from 'prop-types';
import React             from 'react';
import {
    AccountActions,
    MenuLinks,
    PlatformSwitcher }   from 'App/Components/Layout/Header';
import platform_config   from 'App/Constants/platform-config';
import Lazy              from 'App/Containers/Lazy';
import RealAccountSignup from 'App/Containers/RealAccountSignup';
import { localize }      from 'App/i18n';
import Icon              from 'Assets/icon.jsx';
import { connect }       from 'Stores/connect';

const Header = ({
    active_cashier_tab,
    balance,
    can_upgrade,
    can_upgrade_to,
    currency,
    enableApp,
    is_acc_switcher_on,
    is_cashier_modal_on,
    is_app_disabled,
    is_logged_in,
    is_mobile,
    is_payment_agent_visible,
    is_payment_agent_transfer_visible,
    is_real_acc_signup_on,
    is_route_modal_on,
    is_virtual,
    disableApp,
    setCashierActiveTab,
    toggleAccountsDialog,
    toggleCashierModal,
    openRealAccountSignup,
}) => {
    const header_links = [
        {
            id        : 'dt_reports_tab',
            icon      : <Icon icon='IconReports' className='header__icon' />,
            text      : localize('Reports'),
            href      : '/reports',
            login_only: true,
        },
        {
            id        : 'dt_cashier_tab',
            icon      : <Icon icon='IconCashier' className='header__icon' />,
            text      : localize('Cashier'),
            onClick   : toggleCashierModal,
            login_only: true,
        },
    ];

    return (
        <header className={classNames('header', {
            'header--is-disabled': (is_app_disabled || is_route_modal_on),
        })}
        >
            <div className='header__menu-items'>
                <div className='header__menu-left'>
                    <PlatformSwitcher platform_config={platform_config} />
                    <Lazy
                        has_progress={false}
                        ctor={() => import(/* webpackChunkName: "toggle-menu-drawer", webpackPreload: true */'App/Components/Layout/Header/toggle-menu-drawer.jsx')}
                        should_load={is_mobile}
                    />
                    <MenuLinks
                        is_logged_in={is_logged_in}
                        items={header_links}
                    />
                </div>
                <div className='header__menu-right'>
                    <div className='acc-info__container'>
                        <AccountActions
                            active_cashier_tab={active_cashier_tab}
                            balance={balance}
                            can_upgrade_to={can_upgrade_to}
                            currency={currency}
                            can_upgrade={can_upgrade}
                            disableApp={disableApp}
                            enableApp={enableApp}
                            is_acc_switcher_on={is_acc_switcher_on}
                            is_cashier_modal_on={is_cashier_modal_on}
                            is_payment_agent_visible={is_payment_agent_visible}
                            is_payment_agent_transfer_visible={is_payment_agent_transfer_visible}
                            is_logged_in={is_logged_in}
                            is_virtual={is_virtual}
                            setCashierActiveTab={setCashierActiveTab}
                            toggleAccountsDialog={toggleAccountsDialog}
                            toggleCashierModal={toggleCashierModal}
                            openRealAccountSignup={openRealAccountSignup}
                        />
                    </div>
                </div>
            </div>
            {is_real_acc_signup_on &&
            <RealAccountSignup />
            }
        </header>
    );
};

Header.propTypes = {
    active_cashier_tab               : PropTypes.string,
    balance                          : PropTypes.string,
    can_upgrade                      : PropTypes.bool,
    can_upgrade_to                   : PropTypes.string,
    currency                         : PropTypes.string,
    disableApp                       : PropTypes.func,
    enableApp                        : PropTypes.func,
    is_acc_switcher_on               : PropTypes.bool,
    is_app_disabled                  : PropTypes.bool,
    is_cashier_modal_on              : PropTypes.bool,
    is_dark_mode                     : PropTypes.bool,
    is_logged_in                     : PropTypes.bool,
    is_mobile                        : PropTypes.bool,
    is_payment_agent_transfer_visible: PropTypes.bool,
    is_payment_agent_visible         : PropTypes.bool,
    is_route_modal_on                : PropTypes.bool,
    is_virtual                       : PropTypes.bool,
    setCashierActiveTab              : PropTypes.func,
    toggleAccountsDialog             : PropTypes.func,
    toggleCashierModal               : PropTypes.func,
};

export default connect(
    ({ client, modules, ui }) => ({
        active_cashier_tab      : ui.active_cashier_tab,
        balance                 : client.balance,
        can_upgrade             : client.can_upgrade,
        can_upgrade_to          : client.can_upgrade_to,
        currency                : client.currency,
        is_logged_in            : client.is_logged_in,
        is_virtual              : client.is_virtual,
        enableApp               : ui.enableApp,
        is_acc_switcher_on      : ui.is_accounts_switcher_on,
        is_cashier_modal_on     : ui.is_cashier_modal_on,
        is_dark_mode            : ui.is_dark_mode_on,
        is_app_disabled         : ui.is_app_disabled,
        is_loading              : ui.is_loading,
        is_payment_agent_visible: !!(modules.cashier.config.payment_agent.filtered_list.length
            || modules.cashier.config.payment_agent.agents.length),
        is_payment_agent_transfer_visible: modules.cashier.config.payment_agent_transfer.is_payment_agent,
        is_route_modal_on                : ui.is_route_modal_on,
        is_mobile                        : ui.is_mobile,
        is_real_acc_signup_on            : ui.is_real_acc_signup_on,
        openRealAccountSignup            : ui.openRealAccountSignup,
        disableApp                       : ui.disableApp,
        setCashierActiveTab              : ui.setCashierActiveTab,
        toggleAccountsDialog             : ui.toggleAccountsDialog,
        toggleCashierModal               : ui.toggleCashierModal,
    })
)(Header);
