(window["webpackJsonp_deriv_trader"] = window["webpackJsonp_deriv_trader"] || []).push([["screen-small"],{

/***/ "./Modules/Trading/Components/Elements/mobile-widget.jsx":
/*!***************************************************************!*\
  !*** ./Modules/Trading/Components/Elements/mobile-widget.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mobile_dialog_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mobile-dialog.jsx */ \"./Modules/Trading/Components/Elements/mobile-dialog.jsx\");\n/* harmony import */ var _Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Containers/trade-params.jsx */ \"./Modules/Trading/Containers/trade-params.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar MobileWidget =\n/*#__PURE__*/\nfunction (_React$PureComponent) {\n  _inherits(MobileWidget, _React$PureComponent);\n\n  function MobileWidget(props) {\n    var _this;\n\n    _classCallCheck(this, MobileWidget);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MobileWidget).call(this, props));\n    _this.state = {\n      open: false\n    };\n    _this.handleDialogClose = _this.handleDialogClose.bind(_assertThisInitialized(_this));\n    _this.handleWidgetClick = _this.handleWidgetClick.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(MobileWidget, [{\n    key: \"handleWidgetClick\",\n    value: function handleWidgetClick() {\n      this.setState({\n        open: true\n      });\n    }\n  }, {\n    key: \"handleDialogClose\",\n    value: function handleDialogClose() {\n      this.setState({\n        open: false\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"mobile-widget\",\n        onClick: this.handleWidgetClick\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        is_minimized: true\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mobile_dialog_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        title: \"Set parameters\",\n        visible: this.state.open,\n        onClose: this.handleDialogClose\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Containers_trade_params_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        is_nativepicker: true\n      })));\n    }\n  }]);\n\n  return MobileWidget;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileWidget);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9FbGVtZW50cy9tb2JpbGUtd2lkZ2V0LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9FbGVtZW50cy9tb2JpbGUtd2lkZ2V0LmpzeD9iNzBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAgICAgICAgICAgIGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2JpbGVEaWFsb2cgICAgIGZyb20gJy4vbW9iaWxlLWRpYWxvZy5qc3gnO1xuaW1wb3J0IFRyYWRlUGFyYW1zICAgICAgZnJvbSAnLi4vLi4vQ29udGFpbmVycy90cmFkZS1wYXJhbXMuanN4JztcblxuY2xhc3MgTW9iaWxlV2lkZ2V0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaGFuZGxlRGlhbG9nQ2xvc2UgPSB0aGlzLmhhbmRsZURpYWxvZ0Nsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlV2lkZ2V0Q2xpY2sgPSB0aGlzLmhhbmRsZVdpZGdldENsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlV2lkZ2V0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGlhbG9nQ2xvc2UoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3BlbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLXdpZGdldCcgb25DbGljaz17dGhpcy5oYW5kbGVXaWRnZXRDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFkZVBhcmFtcyBpc19taW5pbWl6ZWQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxNb2JpbGVEaWFsb2dcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9J1NldCBwYXJhbWV0ZXJzJ1xuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLm9wZW59XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlRGlhbG9nQ2xvc2V9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VHJhZGVQYXJhbXMgaXNfbmF0aXZlcGlja2VyIC8+XG4gICAgICAgICAgICAgICAgPC9Nb2JpbGVEaWFsb2c+XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlV2lkZ2V0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU5BO0FBT0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFJQTs7OztBQXRDQTtBQUNBO0FBd0NBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Modules/Trading/Components/Elements/mobile-widget.jsx\n");

/***/ }),

/***/ "./Modules/Trading/Components/Form/screen-small.jsx":
/*!**********************************************************!*\
  !*** ./Modules/Trading/Components/Form/screen-small.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Elements_mobile_widget_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Elements/mobile-widget.jsx */ \"./Modules/Trading/Components/Elements/mobile-widget.jsx\");\n/* harmony import */ var _Containers_contract_type_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Containers/contract-type.jsx */ \"./Modules/Trading/Containers/contract-type.jsx\");\n/* harmony import */ var _Containers_purchase_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Containers/purchase.jsx */ \"./Modules/Trading/Containers/purchase.jsx\");\n/* harmony import */ var Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Sass/app/_common/mobile-widget.scss */ \"./sass/app/_common/mobile-widget.scss\");\n/* harmony import */ var Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(Sass_app_common_mobile_widget_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nvar ScreenSmall = function ScreenSmall() {\n  return (\n    /* { is_trade_enabled } */\n    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Containers_contract_type_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"mobile-only\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Elements_mobile_widget_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      className: \"purchase-container\"\n    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Containers_purchase_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)))\n  );\n};\n\nScreenSmall.propTypes = {\n  is_trade_enabled: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScreenSmall);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Nb2R1bGVzL1RyYWRpbmcvQ29tcG9uZW50cy9Gb3JtL3NjcmVlbi1zbWFsbC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvdHJhZGVyLy4vTW9kdWxlcy9UcmFkaW5nL0NvbXBvbmVudHMvRm9ybS9zY3JlZW4tc21hbGwuanN4PzQwOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyAgICBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCAgICAgICAgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vYmlsZVdpZGdldCBmcm9tICcuLi9FbGVtZW50cy9tb2JpbGUtd2lkZ2V0LmpzeCc7XG5pbXBvcnQgQ29udHJhY3RUeXBlIGZyb20gJy4uLy4uL0NvbnRhaW5lcnMvY29udHJhY3QtdHlwZS5qc3gnO1xuaW1wb3J0IFB1cmNoYXNlICAgICBmcm9tICcuLi8uLi9Db250YWluZXJzL3B1cmNoYXNlLmpzeCc7XG5pbXBvcnQgJ1Nhc3MvYXBwL19jb21tb24vbW9iaWxlLXdpZGdldC5zY3NzJztcblxuY29uc3QgU2NyZWVuU21hbGwgPSAoLyogeyBpc190cmFkZV9lbmFibGVkIH0gKi8pID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxDb250cmFjdFR5cGUgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vYmlsZS1vbmx5Jz5cbiAgICAgICAgICAgIDxNb2JpbGVXaWRnZXQgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdXJjaGFzZS1jb250YWluZXInPlxuICAgICAgICAgICAgPFB1cmNoYXNlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5TY3JlZW5TbWFsbC5wcm9wVHlwZXMgPSB7XG4gICAgaXNfdHJhZGVfZW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JlZW5TbWFsbDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFOQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBREE7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Modules/Trading/Components/Form/screen-small.jsx\n");

/***/ }),

/***/ "./sass/app/_common/mobile-widget.scss":
/*!*********************************************!*\
  !*** ./sass/app/_common/mobile-widget.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zYXNzL2FwcC9fY29tbW9uL21vYmlsZS13aWRnZXQuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi90cmFkZXIvLi9zYXNzL2FwcC9fY29tbW9uL21vYmlsZS13aWRnZXQuc2Nzcz8wNWZjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sass/app/_common/mobile-widget.scss\n");

/***/ })

}]);