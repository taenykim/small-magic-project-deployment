webpackHotUpdate("static/development/pages/page14.js",{

/***/ "./components/ContentsMenubar.js":
/*!***************************************!*\
  !*** ./components/ContentsMenubar.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/wrapper */ "./reducers/wrapper.js");
var _this = undefined,
    _jsxFileName = "/Users/taeeunkim/Desktop/taenykim/small-magic-project/small-magic-project-deployment/components/ContentsMenubar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ContentsMenubarContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContentsMenubar__ContentsMenubarContainer",
  componentId: "sc-18uo61n-0"
})(["display:flex;z-index:1;align-items:center;width:100%;height:60px;top:0;& img{width:17px;height:17px;}background:#f5f6f7;position:absolute;"]);
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ContentsMenubar__ImageContainer",
  componentId: "sc-18uo61n-1"
})(["display:flex;justify-content:center;align-items:center;height:30px;width:30px;box-shadow:-4px -2px 4px 0px #ffffff,4px 2px 6px 0px #ddd;border-radius:2px;padding:2px;&:hover{cursor:pointer;}&:active{box-shadow:2px 2px 2px 0px #dfe4ea inset,-2px -2px 2px 0px white inset;}& > img{filter:invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(95%) contrast(80%);}"]);

var ContentsMenubar = function ContentsMenubar(_ref) {
  var name = _ref.name;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var storeHandler = function storeHandler() {
    dispatch({
      type: _reducers_wrapper__WEBPACK_IMPORTED_MODULE_4__["DOCKER_STORE"],
      data: name
    });
    return;
  };

  var storeReset = function storeReset() {
    dispatch({
      type: _reducers_wrapper__WEBPACK_IMPORTED_MODULE_4__["DOCKER_DELETE"],
      data: name
    });
    return;
  };

  return __jsx(ContentsMenubarContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 5
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: {
      margin: '2px 2px 2px 10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(ImageContainer, {
    onClick: storeReset,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./cancel.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx("a", {
    style: {
      margin: '2px 2px 2px 10px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(ImageContainer, {
    onClick: storeHandler,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "./bottom_arrow.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContentsMenubar);

/***/ })

})
//# sourceMappingURL=page14.js.da990412c93053bea868.hot-update.js.map