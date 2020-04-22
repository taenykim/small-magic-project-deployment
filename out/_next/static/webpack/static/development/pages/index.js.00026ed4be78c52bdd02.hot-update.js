webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AppContainer.js":
/*!************************************!*\
  !*** ./components/AppContainer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AppIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppIcon */ "./components/AppIcon.js");
/* harmony import */ var _components_AppName__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppName */ "./components/AppName.js");
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/AppContainer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppContainer__Container",
  componentId: "w4c9qc-0"
})(["display:flex;flex-direction:column;align-items:center;margin:5px 20px 10px 20px;height:fit-content;"]);

var AppContainer = function AppContainer(_ref) {
  var index = _ref.index;
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(_components_AppIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    idx: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_components_AppName__WEBPACK_IMPORTED_MODULE_3__["default"], {
    idx: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AppContainer);

/***/ }),

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
  var str = String(idx).toUpperCase();
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

/***/ }),

/***/ "./components/AppName.js":
/*!*******************************!*\
  !*** ./components/AppName.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/AppName.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AppNameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "AppName__AppNameContainer",
  componentId: "sc-11zg7ol-0"
})(["font-family:escore3;font-size:12px;margin-top:10px;"]);

var AppName = function AppName(_ref) {
  var name = _ref.name;
  return __jsx(AppNameContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, name);
};

/* harmony default export */ __webpack_exports__["default"] = (AppName);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppContainer */ "./components/AppContainer.js");
var _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var PAGE_COUNT = 20;
var pageNumbers = [];

for (var i = 0; i < PAGE_COUNT; i++) {
  pageNumbers.push(i + 1);
}

var BackgroundContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__BackgroundContainer",
  componentId: "hdaew-0"
})(["background:#f5f6f7;min-height:100vh;"]);
var IndexContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "pages__IndexContainer",
  componentId: "hdaew-1"
})(["display:flex;width:90vw;margin:40px 10px 10px 10px;flex-wrap:wrap;margin-bottom:100px;"]);

var index = function index() {
  return __jsx(BackgroundContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(IndexContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, pageNumbers.map(function (pageNumber) {
    return __jsx(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      index: pageNumber,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.00026ed4be78c52bdd02.hot-update.js.map