(window["webpackJsonp_deriv_bot"] = window["webpackJsonp_deriv_bot"] || []).push([["is_candle_black"],{

/***/ "./src/scratch/help-content/help-strings/is_candle_black.js":
/*!******************************************************************!*\
  !*** ./src/scratch/help-content/help-strings/is_candle_black.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  text: [Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('This block returns \"True\" if the last candle is black. It can be placed anywhere on the canvas except within the Trade parameters root block.'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('The term \"candle\" refers to each bar on the candlestick chart. Each candle represents four market prices for the selected time interval:'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('Each candlestick on the chart represents 4 market prices for the selected time interval:'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('- Open price: the opening price'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('- High price: the highest price'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('- Low price: the lowest price'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('- Close price: the closing price'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('A black (or red) candle indicates that the open price is higher than the close price. This represents a downward movement of the market price.'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('A white (or green) candle indicates that the open price is lower than the close price. This represents an upward movement of the market price.'), Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_0__[\"localize\"])('The time interval for each candle can be set from one minute to one day.')]\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyYXRjaC9oZWxwLWNvbnRlbnQvaGVscC1zdHJpbmdzL2lzX2NhbmRsZV9ibGFjay5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9ib3QvLi9zcmMvc2NyYXRjaC9oZWxwLWNvbnRlbnQvaGVscC1zdHJpbmdzL2lzX2NhbmRsZV9ibGFjay5qcz8wMzM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0ZXh0OiBbXG4gICAgICAgIGxvY2FsaXplKCdUaGlzIGJsb2NrIHJldHVybnMgXCJUcnVlXCIgaWYgdGhlIGxhc3QgY2FuZGxlIGlzIGJsYWNrLiBJdCBjYW4gYmUgcGxhY2VkIGFueXdoZXJlIG9uIHRoZSBjYW52YXMgZXhjZXB0IHdpdGhpbiB0aGUgVHJhZGUgcGFyYW1ldGVycyByb290IGJsb2NrLicpLFxuICAgICAgICBsb2NhbGl6ZSgnVGhlIHRlcm0gXCJjYW5kbGVcIiByZWZlcnMgdG8gZWFjaCBiYXIgb24gdGhlIGNhbmRsZXN0aWNrIGNoYXJ0LiBFYWNoIGNhbmRsZSByZXByZXNlbnRzIGZvdXIgbWFya2V0IHByaWNlcyBmb3IgdGhlIHNlbGVjdGVkIHRpbWUgaW50ZXJ2YWw6JyksXG4gICAgICAgIGxvY2FsaXplKCdFYWNoIGNhbmRsZXN0aWNrIG9uIHRoZSBjaGFydCByZXByZXNlbnRzIDQgbWFya2V0IHByaWNlcyBmb3IgdGhlIHNlbGVjdGVkIHRpbWUgaW50ZXJ2YWw6JyksXG4gICAgICAgIGxvY2FsaXplKCctIE9wZW4gcHJpY2U6IHRoZSBvcGVuaW5nIHByaWNlJyksXG4gICAgICAgIGxvY2FsaXplKCctIEhpZ2ggcHJpY2U6IHRoZSBoaWdoZXN0IHByaWNlJyksXG4gICAgICAgIGxvY2FsaXplKCctIExvdyBwcmljZTogdGhlIGxvd2VzdCBwcmljZScpLFxuICAgICAgICBsb2NhbGl6ZSgnLSBDbG9zZSBwcmljZTogdGhlIGNsb3NpbmcgcHJpY2UnKSxcbiAgICAgICAgbG9jYWxpemUoJ0EgYmxhY2sgKG9yIHJlZCkgY2FuZGxlIGluZGljYXRlcyB0aGF0IHRoZSBvcGVuIHByaWNlIGlzIGhpZ2hlciB0aGFuIHRoZSBjbG9zZSBwcmljZS4gVGhpcyByZXByZXNlbnRzIGEgZG93bndhcmQgbW92ZW1lbnQgb2YgdGhlIG1hcmtldCBwcmljZS4nKSxcbiAgICAgICAgbG9jYWxpemUoJ0Egd2hpdGUgKG9yIGdyZWVuKSBjYW5kbGUgaW5kaWNhdGVzIHRoYXQgdGhlIG9wZW4gcHJpY2UgaXMgbG93ZXIgdGhhbiB0aGUgY2xvc2UgcHJpY2UuIFRoaXMgcmVwcmVzZW50cyBhbiB1cHdhcmQgbW92ZW1lbnQgb2YgdGhlIG1hcmtldCBwcmljZS4nKSxcbiAgICAgICAgbG9jYWxpemUoJ1RoZSB0aW1lIGludGVydmFsIGZvciBlYWNoIGNhbmRsZSBjYW4gYmUgc2V0IGZyb20gb25lIG1pbnV0ZSB0byBvbmUgZGF5LicpLFxuICAgIF0sXG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scratch/help-content/help-strings/is_candle_black.js\n");

/***/ })

}]);