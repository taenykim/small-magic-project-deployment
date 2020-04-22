webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppIcon.js":
/*!*******************************!*\
  !*** ./components/AppIcon.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/AppIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AppIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppIcon__AppIconContainer",
  componentId: "sc-1nm8f82-0"
})(["display:flex;justify-content:center;align-items:center;width:100px;height:100px;box-sizing:border-box;box-shadow:-4px -2px 4px 0px #ffffff,4px 2px 6px 0px #ddd;border-radius:15%;background:#f5f6f7;color:", ";&:active{box-shadow:2px 2px 2px 0px #dfe4ea inset,-2px -2px 2px 0px white inset;}& > div{font-family:escore9;font-size:12px;}"], function (props) {
  if (props.idx % 9 === 0) return 'red';
  if (props.idx % 9 === 1) return 'blue';
  if (props.idx % 9 === 2) return 'purple';
  if (props.idx % 9 === 3) return 'orange';
  if (props.idx % 9 === 4) return 'green';
  if (props.idx % 9 === 5) return 'navy';
  if (props.idx % 9 === 6) return 'darkgoldenrod';
  if (props.idx % 9 === 7) return 'darkcyan';
  if (props.idx % 9 === 8) return 'darkmagenta';
  return 'black';
});

var AppIcon = function AppIcon(_ref) {
  var idx = _ref.idx;
  var url = "/page".concat(idx);
  var str = 'PAGE' + idx;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(AppIconContainer, {
    idx: idx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, str))));
};

/* harmony default export */ __webpack_exports__["default"] = (AppIcon);

/***/ })

})
//# sourceMappingURL=index.js.5fed1ef25138fc8ea4be.hot-update.js.map