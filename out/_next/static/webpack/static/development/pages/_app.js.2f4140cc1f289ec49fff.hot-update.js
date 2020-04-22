webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/DockerIcon.js":
/*!**********************************!*\
  !*** ./components/DockerIcon.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/DockerIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var AppIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DockerIcon__AppIconContainer",
  componentId: "sc-15ho0ni-0"
})(["display:flex;justify-content:center;align-items:center;width:40px;height:40px;box-sizing:border-box;border-radius:15%;background:#f5f6f7;color:", ";margin-right:10px;& > div{font-family:escore9;font-size:20px;text-shadow:3px 3px #ccc;}"], function (props) {
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

var DockerIcon = function DockerIcon(_ref) {
  var item = _ref.item;
  var url = "/".concat(item);
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    style: {
      textDecoration: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(AppIconContainer, {
    idx: Number(item.slice(4)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, Number(item.slice(4))))));
};

/* harmony default export */ __webpack_exports__["default"] = (DockerIcon);

/***/ })

})
//# sourceMappingURL=_app.js.2f4140cc1f289ec49fff.hot-update.js.map