(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{658:function(e,t,r){"use strict";var n=r(6),a=r.n(n),o=r(0),c=r.n(o);t.a=function(e){var t=e.className,r=e.is_invisible,n=e.theme,o=e.id;return c.a.createElement("div",{id:o,className:a()("barspinner","barspinner--".concat(n||"dark"),{invisible:r},t)},Array.from(new Array(5)).map((function(e,t){return c.a.createElement("div",{key:t,className:"barspinner__rect barspinner__rect--".concat(t+1," rect").concat(t+1)})})))}},660:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(35),i=r.n(s),l=(r(87),r(7)),u=r(110),f=r(3),p=r(9),m=r(16),_=r(11);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){b(o,n,a,c,s,"next",e)}function s(e){b(o,n,a,c,s,"throw",e)}c(void 0)}))}}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){var t=e.header,r=e.message,n=e.button_link,a=e.onClickButton,o=e.button_text,s=e.footer;return c.a.createElement("div",{className:"cashier__wrapper"},c.a.createElement(p.a,{icon:"IconCashierError",className:"cashier-error__icon"}),t&&c.a.createElement("h2",{className:"cashier-error__header"},t),r&&c.a.createElement("p",{className:"cashier__paragraph"},r),n&&c.a.createElement(u.a,{className:"cashier-error__button",to:n,onClick:a},c.a.createElement("span",{className:"btn__text"},o)),!n&&o&&c.a.createElement(i.a,{className:"cashier-error__button",onClick:a,text:o,primary:!0}),s&&c.a.createElement("h2",{className:"cashier-error__footer"},s))},O=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=v(this,(e=g(t)).call.apply(e,[this].concat(a)))).error_fields={address_city:Object(f.localize)("Town/City"),address_line_1:Object(f.localize)("First line of home address"),address_postcode:Object(f.localize)("Postal Code/ZIP"),address_state:Object(f.localize)("State/Province"),email:Object(f.localize)("Email address"),phone:Object(f.localize)("Telephone"),residence:Object(f.localize)("Country of Residence")},r.onClickButton=function(){"function"==typeof r.props.error.onClickButton&&r.props.error.onClickButton(),r.clearErrorMessage()},r.closeCashierModal=function(){r.onClickButton(),r.props.toggleCashierModal()},r.clearErrorMessage=function(){r.props.setErrorMessage("")},r.acceptTNC=y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.b.tncApproval();case 2:r.onClickButton();case 3:case"end":return e.stop()}}),e)}))),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e,t=this;switch(this.props.error.code){case"InvalidToken":e=c.a.createElement(w,{header:Object(f.localize)("Identity confirmation failed"),message:c.a.createElement(l.a,{i18n_default_text:"It looks like your link is incorrect or no longer valid."}),onClickButton:this.onClickButton,button_text:Object(f.localize)("Request a new link")});break;case"ASK_TNC_APPROVAL":e=c.a.createElement(w,{header:Object(f.localize)("Our terms and conditions have changed"),message:c.a.createElement(l.a,{i18n_default_text:"Please accept our updated <0>terms and conditions</0> to continue.",components:[c.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/terms-and-conditions/#general"})]}),onClickButton:this.acceptTNC,button_text:Object(f.localize)("I accept")});break;case"ASK_FIX_DETAILS":e=c.a.createElement(w,{header:Object(f.localize)("Update your personal details"),message:c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{i18n_default_text:"We can't validate your personal details because there is some information missing."})," ",this.props.error.fields?c.a.createElement(l.a,{i18n_default_text:"Please update your {{details}} to continue.",values:{details:this.props.error.fields.map((function(e){return t.error_fields[e]||e})).join(", "),interpolation:{escapeValue:!1}}}):c.a.createElement(l.a,{i18n_default_text:"Please update your details to continue."})),button_link:"/account/personal-details",onClickButton:this.closeCashierModal,button_text:Object(f.localize)("Update my details"),footer:c.a.createElement(l.a,{i18n_default_text:"Need help? <0>Contact us</0>.",components:[c.a.createElement("a",{key:0,className:"link",target:"_blank",rel:"noopener noreferrer",href:"https://www.deriv.com/help-centre/"})]})});break;case"WrongResponse":e=c.a.createElement(w,{header:this.props.error.message,onClickButton:this.onClickButton,button_text:Object(f.localize)("Try again")});break;default:e=c.a.createElement(w,{header:this.props.error.message})}return e}}])&&d(r.prototype,n),a&&d(r,a),t}(c.a.Component);O.propTypes={error:a.a.object,setErrorMessage:a.a.func,toggleCashierModal:a.a.func},t.a=Object(_.b)((function(e){var t=e.modules,r=e.ui;return{setErrorMessage:t.cashier.setErrorMessage,toggleCashierModal:r.toggleCashierModal}}))(O)},661:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(35),i=r.n(s),l=(r(87),r(7)),u=r(3),f=r(11);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=m(this,(e=_(t)).call.apply(e,[this].concat(a)))).onClickSignup=function(){r.props.toggleCashierModal(),setTimeout(r.props.openRealAccountSignup,500)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper cashier__center-align-wrapper"},c.a.createElement("div",{className:"cashier__center-align-content"},c.a.createElement("h2",{className:"cashier-error__header cashier__virtual-header"},c.a.createElement(l.a,{i18n_default_text:"You're currently using a demo account"})),r.props.has_real_account?c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cashier__paragraph cashier__text"},c.a.createElement(l.a,{i18n_default_text:"You need to switch to a real money account to use this feature."}),c.a.createElement("br",null),c.a.createElement(l.a,{i18n_default_text:"You can do this by selecting a real account from the Account Switcher."})),c.a.createElement("div",{className:"cashier__account-switch-icon"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"cashier__paragraph cashier__text"},c.a.createElement(l.a,{i18n_default_text:"You need a real money account to use this feature. It's easy to create a real money account and start trading."})),c.a.createElement(i.a,{className:"cashier-error__button",has_effect:!0,text:Object(u.localize)("Create my real account"),onClick:r.onClickSignup,primary:!0}))))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),t}(c.a.Component);b.propTypes={has_real_account:a.a.bool,openRealAccountSignup:a.a.func,toggleCashierModal:a.a.func},t.a=Object(f.b)((function(e){var t=e.client,r=e.ui;return{has_real_account:t.has_real_account,openRealAccountSignup:r.openRealAccountSignup,toggleCashierModal:r.toggleCashierModal}}))(b)},664:function(e,t,r){"use strict";var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(35),i=r.n(s),l=(r(87),r(9)),u=r(7),f=r(3),p=r(11);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=_(this,(e=h(t)).call.apply(e,[this].concat(a)))).onClickDeposit=function(){r.props.setModalIndex(0)},r.render=function(){return c.a.createElement("div",{className:"cashier__wrapper cashier__no-balance"},c.a.createElement(l.a,{icon:"IconNoBalance",className:"cashier__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(u.a,{i18n_default_text:"You have no funds in your {{currency}} account",values:{currency:r.props.currency.toUpperCase()}})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(u.a,{i18n_default_text:"Please make a deposit to use this feature."})),c.a.createElement(i.a,{className:"cashier__no-balance-button",has_effect:!0,text:Object(f.localize)("Deposit now"),onClick:r.onClickDeposit,primary:!0}))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),t}(c.a.Component);y.propTypes={currency:a.a.string,setModalIndex:a.a.func},t.a=Object(p.b)((function(e){var t=e.client,r=e.ui;return{currency:t.currency,setModalIndex:r.setModalIndex}}))(y)},718:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r.n(n),o=r(0),c=r.n(o),s=r(11),i=r(6),l=r.n(i),u=r(35),f=r.n(u),p=(r(87),r(179)),m=r.n(p),_=(r(260),r(112)),h=r.n(_),b=(r(178),r(183)),y=r.n(b),d=(r(261),r(25)),v=r(15),g=r.n(v),E=r(7),w=r(109),O=r(3),j=r(9),N=r(141),C=r(658);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function A(e,t,r,n,a,o,c){try{var s=e[o](c),i=s.value}catch(e){return void r(e)}s.done?t(i):Promise.resolve(i).then(n,a)}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e,t){var r=t.balance,n=t.currency,a=t.transfer_limit,o={};return e.amount?Object(N.b)(e.amount,{type:"float",decimals:g.a.getDecimalPlaces(n),min:a.min,max:a.max})?+r<+e.amount&&(o.amount=Object(O.localize)("Insufficient balance.")):o.amount=Object(N.a)().number.message:o.amount=Object(O.localize)("This field is required."),o},R=function(e){var t=e.account,r=e.idx;return c.a.createElement(c.a.Fragment,{key:r},(t.currency||t.mt_icon)&&c.a.createElement(j.a,{icon:"IconAccountsCurrency",className:"account-transfer__currency-icon",type:t.mt_icon||t.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"account-transfer__currency"},t.text),c.a.createElement("span",{className:"account-transfer__balance"},"(",c.a.createElement(y.a,{amount:t.balance,currency:t.currency}),")"))},F=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=z(this,(e=I(t)).call.apply(e,[this].concat(a)))).validateTransferPassthrough=function(e){return B(e,{balance:r.props.selected_from.balance,currency:r.props.selected_from.currency,transfer_limit:r.props.transfer_limit})},r.onTransferPassthrough=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.props.requestTransferBetweenAccounts({amount:t.amount});case 2:e.sent.error&&n.setSubmitting(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){A(o,n,a,c,s,"next",e)}function s(e){A(o,n,a,c,s,"throw",e)}c(void 0)}))});return function(e,r){return t.apply(this,arguments)}}(),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=[],r=[],n=[],a=[];this.props.accounts_list.forEach((function(o,s){var i=c.a.createElement(R,{idx:s,account:o}),l=o.value;(o.is_mt?r:t).push({text:i,value:l});var u=o.value===e.props.selected_from.value,f=e.props.selected_from.is_mt&&o.is_mt,p=e.props.selected_from.is_crypto&&o.is_crypto,m=f||u||p;(o.is_mt?a:n).push({text:i,value:l,disabled:m})}));var o=P(S({},Object(O.localize)("Deriv accounts"),t),r.length&&S({},Object(O.localize)("DMT5 accounts"),r)),s=P(S({},Object(O.localize)("Deriv accounts"),n),a.length&&S({},Object(O.localize)("DMT5 accounts"),a));return c.a.createElement("div",{className:"cashier__wrapper--align-left"},c.a.createElement(c.a.Fragment,null,c.a.createElement(d.c,{initialValues:{amount:""},validate:this.validateTransferPassthrough,onSubmit:this.onTransferPassthrough},(function(t){var r=t.errors,n=t.isSubmitting,a=t.isValid,i=t.touched,u=t.handleChange;return c.a.createElement(c.a.Fragment,null,n?c.a.createElement("div",{className:"cashier__loader-wrapper"},c.a.createElement(C.a,{className:"cashier__loader"})):c.a.createElement(d.b,null,c.a.createElement(m.a,{id:"transfer_from",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",label:Object(O.localize)("From"),list:o,name:"transfer_from",value:e.props.selected_from.value,onChange:e.props.onChangeTransferFrom}),c.a.createElement(j.a,{className:"cashier__transferred-icon account-transfer__transfer-icon",icon:"IconBack"}),c.a.createElement(m.a,{id:"transfer_to",className:"cashier__drop-down account-transfer__drop-down",classNameDisplay:"cashier__drop-down-display",classNameDisplaySpan:"cashier__drop-down-display-span",classNameItems:"cashier__drop-down-items",classNameLabel:"cashier__drop-down-label",label:Object(O.localize)("To"),list:s,name:"transfer_to",value:e.props.selected_to.value,onChange:e.props.onChangeTransferTo}),c.a.createElement(d.a,{name:"amount"},(function(t){var n=t.field;return c.a.createElement(h.a,x({},n,{onChange:function(t){e.props.setErrorMessage(""),u(t)},className:"cashier__input-long dc-input--no-placeholder",type:"text",label:Object(O.localize)("Amount"),error:i.amount&&r.amount,required:!0,leading_icon:e.props.selected_from.currency?c.a.createElement("span",{className:l()("cashier__amount-symbol","symbols","symbols--".concat(e.props.selected_from.currency.toLowerCase()))}):void 0,autoComplete:"off",maxLength:"30",hint:e.props.transfer_limit.max&&c.a.createElement(E.a,{i18n_default_text:"Transfer limit: <0 />",components:[c.a.createElement(y.a,{key:0,amount:e.props.transfer_limit.max,currency:e.props.selected_from.currency})]})}))})),c.a.createElement("div",null,c.a.createElement("div",{className:"account-transfer__notes"},c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfer limits may vary depending on changes in exchange rates."}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers are subject to a {{transfer_fee}}% transfer fee or {{currency}} {{minimum_fee}}, whichever is higher.",values:{transfer_fee:e.props.transfer_fee,currency:e.props.selected_from.currency,minimum_fee:e.props.minimum_fee}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers are possible only between your fiat and cryptocurrency accounts (and vice versa), or between your {{website_name}} account and your {{website_name}} MT5 (DMT5) account (or vice versa).",values:{website_name:w.website_name}}))),c.a.createElement("div",{className:"account-transfer__bullet-wrapper"},c.a.createElement("div",{className:"account-transfer__bullet"}),c.a.createElement("span",null,c.a.createElement(E.a,{i18n_default_text:"Transfers may be unavailable at times such as when the market is closed (weekends or holidays), periods of high volatility, or when there are technical issues."}))))),c.a.createElement("div",{className:"cashier__form-submit"},e.props.error.message&&c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,{icon:"IconEmergency",className:"cashier__form-error-icon"}),c.a.createElement(j.a,{icon:"IconError",className:"cashier__form-error-small-icon"}),c.a.createElement("p",{className:"cashier__form-error"},e.props.error.message)),c.a.createElement(f.a,{className:"cashier__form-submit-button",type:"submit",is_disabled:!a||n,primary:!0},c.a.createElement(E.a,{i18n_default_text:"Transfer"})))))}))))}}])&&M(r.prototype,n),a&&M(r,a),t}(c.a.Component);F.propTypes={accounts_list:a.a.array,error:a.a.object,minimum_fee:a.a.string,onChangeTransferFrom:a.a.func,onChangeTransferTo:a.a.func,requestTransferBetweenAccounts:a.a.func,selected_from:a.a.object,selected_to:a.a.object,setErrorMessage:a.a.func,transfer_fee:a.a.number,transfer_limit:a.a.object};var L=Object(s.b)((function(e){var t=e.modules;return{accounts_list:t.cashier.config.account_transfer.accounts_list,minimum_fee:t.cashier.config.account_transfer.minimum_fee,onChangeTransferFrom:t.cashier.onChangeTransferFrom,onChangeTransferTo:t.cashier.onChangeTransferTo,requestTransferBetweenAccounts:t.cashier.requestTransferBetweenAccounts,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to,setErrorMessage:t.cashier.setErrorMessage,transfer_fee:t.cashier.config.account_transfer.transfer_fee,transfer_limit:t.cashier.config.account_transfer.transfer_limit}}))(F);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var W=function(e){function t(){var e,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Y(this,(e=U(t)).call.apply(e,[this].concat(a)))).render=function(){return c.a.createElement("div",{className:"cashier__wrapper cashier__no-balance"},c.a.createElement(j.a,{icon:"IconNoBalance",className:"cashier__no-balance-icon"}),c.a.createElement("h2",{className:"withdraw__header"},c.a.createElement(E.a,{i18n_default_text:"You need at least two accounts"})),c.a.createElement("p",{className:"cashier__text"},c.a.createElement(E.a,{i18n_default_text:"Please create a second account (Deriv or DMT5) to enable fund transfers."})))},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(t,e),t}(c.a.Component),J=r(33);function K(e){return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return!t||"object"!==K(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var Q=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Z(this,G(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),r=t,(n=[{key:"componentWillUnmount",value:function(){this.props.resetAccountTransfer()}},{key:"render",value:function(){var e=this.props,t=e.receipt,r=e.selected_from,n=e.selected_to;return c.a.createElement("div",{className:"cashier__wrapper account-transfer__receipt"},c.a.createElement(j.a,{icon:"IconTransferDone",className:"account-transfer__receipt-icon"}),c.a.createElement("h2",{className:"cashier__header"},c.a.createElement(E.a,{i18n_default_text:"Your funds have been transferred."})),c.a.createElement("div",{className:"cashier__transferred-amount cashier__text--bold"},c.a.createElement("span",{className:l()("symbols","symbols--".concat(r.currency.toLowerCase()))}),t.amount_transferred),c.a.createElement("div",{className:"cashier__transferred-details-wrapper"},c.a.createElement("span",{className:"account-transfer__transfer-details-from"},c.a.createElement(j.a,{icon:"IconAccountsCurrency",type:r.mt_icon||r.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},r.text))),c.a.createElement(j.a,{className:"cashier__transferred-icon",icon:"IconBack"}),c.a.createElement("span",{className:"account-transfer__transfer-details-to"},c.a.createElement(j.a,{icon:"IconAccountsCurrency",type:n.mt_icon||n.currency.toLowerCase(),height:16,width:16}),c.a.createElement("span",{className:"cashier__transferred-details"},c.a.createElement("span",{className:"cashier__text--bold"},n.text)))),c.a.createElement(f.a,{className:"account-transfer__button-done",has_effect:!0,text:Object(O.localize)("Done"),onClick:this.props.resetAccountTransfer,primary:!0}))}}])&&X(r.prototype,n),a&&X(r,a),t}(c.a.Component);Q.propTypes={receipt:a.a.object,resetAccountTransfer:a.a.func,selected_from:a.a.object,selected_to:a.a.object};var $=Object(J.g)(Object(s.b)((function(e){var t=e.modules;return{receipt:t.cashier.config.account_transfer.receipt,resetAccountTransfer:t.cashier.resetAccountTransfer,selected_from:t.cashier.config.account_transfer.selected_from,selected_to:t.cashier.config.account_transfer.selected_to}}))(Q)),ee=r(660),te=r(664),re=r(661);function ne(e){return(ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function oe(e,t){return!t||"object"!==ne(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ce(e){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function se(e,t){return(se=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var ie=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),oe(this,ce(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&se(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"render",value:function(){return this.props.is_virtual?c.a.createElement(re.a,null):this.props.is_loading?c.a.createElement(C.a,{className:"cashier__loader"}):this.props.error.is_show_full_page||this.props.error.message&&!this.props.accounts_list.length?c.a.createElement(ee.a,{error:this.props.error}):this.props.has_no_account?c.a.createElement(W,null):this.props.has_no_accounts_balance?c.a.createElement(te.a,null):c.a.createElement(c.a.Fragment,null,this.props.is_transfer_successful?c.a.createElement($,null):c.a.createElement(L,{error:this.props.error}))}}])&&ae(r.prototype,n),a&&ae(r,a),t}(c.a.Component);ie.propTypes={accounts_list:a.a.array,container:a.a.string,error:a.a.object,has_no_account:a.a.bool,has_no_accounts_balance:a.a.bool,is_loading:a.a.bool,is_transfer_successful:a.a.bool,is_virtual:a.a.bool,onMount:a.a.func,setActiveTab:a.a.func};t.default=Object(s.b)((function(e){var t=e.client,r=e.modules;return{is_virtual:t.is_virtual,accounts_list:r.cashier.config.account_transfer.accounts_list,container:r.cashier.config.account_transfer.container,error:r.cashier.config.account_transfer.error,has_no_account:r.cashier.config.account_transfer.has_no_account,has_no_accounts_balance:r.cashier.config.account_transfer.has_no_accounts_balance,is_loading:r.cashier.is_loading,is_transfer_successful:r.cashier.config.account_transfer.is_transfer_successful,onMount:r.cashier.onMountAccountTransfer,setActiveTab:r.cashier.setActiveTab}}))(ie)}}]);
//# sourceMappingURL=3.fe868defab006bf6566c.js.map