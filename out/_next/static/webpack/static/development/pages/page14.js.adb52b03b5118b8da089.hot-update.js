webpackHotUpdate("static/development/pages/page14.js",{

/***/ "./components/page/Layout.js":
/*!***********************************!*\
  !*** ./components/page/Layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ContentsMenubar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ContentsMenubar */ "./components/ContentsMenubar.js");
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/page/Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__BackgroundContainer",
  componentId: "qtieq6-0"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100vw;height:100vh;background:#f5f6f7;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Layout__Container",
  componentId: "qtieq6-1"
})(["font-family:escore7;color:", ";display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:3px;box-shadow:-4px -2px 4px 0px white,4px 2px 6px 0px #dfe4ea;padding:40px 40px 40px 40px;"], function (props) {
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

var Layout = function Layout(_ref) {
  var name = _ref.name;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(BackgroundContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_ContentsMenubar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx(Container, {
    idx: Number(name.slice(4)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uC548\uB1FD! \uC5EC\uAE34 ", name.toUpperCase())));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=page14.js.adb52b03b5118b8da089.hot-update.js.map