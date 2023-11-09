"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_writeBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/writeBtn */ \"./components/writeBtn.tsx\");\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/item */ \"./components/item.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    var ref2;\n    _s();\n    var user = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweets\"), data = ref1.data, error = ref1.error;\n    console.log(user, data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            special: \"px-0\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-y-scroll h-[400px]\",\n                    children: data === null || data === void 0 ? void 0 : (ref2 = data.tweets) === null || ref2 === void 0 ? void 0 : ref2.map(function(tweet) {\n                        var ref;\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: tweet.id,\n                            title: tweet.name,\n                            description: tweet.description,\n                            name: (ref = tweet.user) === null || ref === void 0 ? void 0 : ref.name,\n                            hearts: tweet._count.favs\n                        }, tweet.id, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_writeBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        href: \"/tweets/upload\",\n                        children: \"\\uAE00\\uC4F0\\uAE30\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n            lineNumber: 44,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"GTNBIiTzqxKfiJEvS6ZX47D82XY=\", false, function() {\n    return [\n        _libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUV3QztBQUNDO0FBQ2hCO0FBQ2tCO0FBQ0g7QUFDSTtBQUNSO0FBQ0E7O0FBZ0JwQyxJQUFNUyxJQUFJLEdBQWEsV0FBTTs7UUFxQmxCQyxJQUFZOztJQXBCckIsSUFBTSxJQUFNLEdBQUtOLGdFQUFPLEVBQUUsQ0FBbEJPLElBQUk7SUFDWixJQUFNQyxNQUFNLEdBQUdaLHNEQUFTLEVBQUU7SUFDMUIsSUFBd0JHLElBQXFDLEdBQXJDQSwrQ0FBTSxDQUFpQixhQUFhLENBQUMsRUFBckRPLElBQUksR0FBWVAsSUFBcUMsQ0FBckRPLElBQUksRUFBRUcsS0FBSyxHQUFLVixJQUFxQyxDQUEvQ1UsS0FBSztJQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUQsSUFBSSxDQUFDLENBQUM7SUFFeEJSLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlXLEtBQUssRUFBRTtZQUNURCxNQUFNLENBQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25DO0tBQ0YsRUFBRTtRQUFDSixNQUFNO1FBQUVDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDSCxJQUFJLEVBQUU7UUFDVCxxQkFBTyw4REFBQ08sS0FBRzs7OztpQkFBRyxDQUFDO0tBQ2hCO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNaLDBEQUFNO1lBQUNhLE9BQU8sRUFBQyxNQUFNOzs4QkFDcEIsOERBQUNWLHdEQUFJOzs7O3lCQUFHOzhCQUNSLDhEQUFDUyxLQUFHO29CQUFDRSxTQUFTLEVBQUMsNkJBQTZCOzhCQUN6Q1QsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxDQUFBQSxJQUFZLEdBQVpBLElBQUksQ0FBRVUsTUFBTSxjQUFaVixJQUFZLGNBQVpBLEtBQUFBLENBQVksR0FBWkEsSUFBWSxDQUFFVyxHQUFHLENBQUMsU0FBQ0MsS0FBSzs0QkFNZkEsR0FBVTtzQ0FMbEIscUVBQUNmLHdEQUFJOzRCQUNIZ0IsRUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQUU7NEJBRVpDLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxJQUFJOzRCQUNqQkMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7NEJBQzlCRCxJQUFJLEVBQUVILENBQUFBLEdBQVUsR0FBVkEsS0FBSyxDQUFDWCxJQUFJLGNBQVZXLEdBQVUsV0FBTSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLEdBQVUsQ0FBRUcsSUFBSTs0QkFDdEJFLE1BQU0sRUFBRUwsS0FBSyxDQUFDTSxNQUFNLENBQUNDLElBQUk7MkJBSnBCUCxLQUFLLENBQUNDLEVBQUU7Ozs7a0NBS2I7cUJBQ0gsQ0FBQzs7Ozs7eUJBSUU7OEJBQ04sOERBQUNOLEtBQUc7b0JBQUNFLFNBQVMsRUFBQyxPQUFPOzhCQUNwQiw0RUFBQ2IsNERBQVE7d0JBQUN3QixJQUFJLEVBQUMsZ0JBQWdCO2tDQUFDLG9CQUFHOzs7Ozs2QkFBVzs7Ozs7eUJBQzFDOzs7Ozs7aUJBQ0M7cUJBQ1IsQ0FDSDtDQUNIO0dBekNLckIsSUFBSTs7UUFDU0wsNERBQU87UUFDVEosa0RBQVM7UUFDQUcsMkNBQU07OztBQUgxQk0sS0FBQUEsSUFBSTtBQTJDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFR3ZWV0IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IHVzZVVzZXIgZnJvbSBcIkBsaWJzL2NsaWVudC91c2VVc2VyXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBXcml0ZUJ0biBmcm9tIFwiQGNvbXBvbmVudHMvd3JpdGVCdG5cIjtcbmltcG9ydCBJdGVtIGZyb20gXCJAY29tcG9uZW50cy9pdGVtXCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQGNvbXBvbmVudHMvbG9nb1wiO1xuXG5pbnRlcmZhY2UgVHdlZXRXaXRoQ291bnQgZXh0ZW5kcyBUd2VldCB7XG4gIF9jb3VudDoge1xuICAgIGZhdnM6IG51bWJlcjtcbiAgfTtcbiAgdXNlcjoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgfTtcbn1cblxuaW50ZXJmYWNlIFR3ZWV0c1Jlc3BvbnNlIHtcbiAgb2s6IGJvb2xlYW47XG4gIHR3ZWV0czogVHdlZXRXaXRoQ291bnRbXTtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSPFR3ZWV0c1Jlc3BvbnNlPihcIi9hcGkvdHdlZXRzXCIpO1xuICBjb25zb2xlLmxvZyh1c2VyLCBkYXRhKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY3JlYXRlLWFjY291bnRcIik7XG4gICAgfVxuICB9LCBbcm91dGVyLCBlcnJvcl0pO1xuXG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBzcGVjaWFsPVwicHgtMFwiPlxuICAgICAgICA8TG9nbyAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktc2Nyb2xsIGgtWzQwMHB4XVwiPlxuICAgICAgICAgIHtkYXRhPy50d2VldHM/Lm1hcCgodHdlZXQpID0+IChcbiAgICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICAgIGlkPXt0d2VldC5pZH1cbiAgICAgICAgICAgICAga2V5PXt0d2VldC5pZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3R3ZWV0Lm5hbWV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0d2VldC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgbmFtZT17dHdlZXQudXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgaGVhcnRzPXt0d2VldC5fY291bnQuZmF2c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7LyogPElucHV0IHBsYWNlaG9sZGVyPVwi7KCB7Ja07KO87IS47JqUXCIgLz4gKi99XG4gICAgICAgICAgey8qIDxTdWJtaXRCdG4gaHJlZj1cIlwiPuqwgOyehe2VmOq4sC/roZzqt7jsnbjtlZjquLA8L1N1Ym1pdEJ0bj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgICAgPFdyaXRlQnRuIGhyZWY9XCIvdHdlZXRzL3VwbG9hZFwiPuq4gOyTsOq4sDwvV3JpdGVCdG4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU1dSIiwidXNlVXNlciIsIkxheW91dCIsIldyaXRlQnRuIiwiSXRlbSIsIkxvZ28iLCJIb21lIiwiZGF0YSIsInVzZXIiLCJyb3V0ZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJyZXBsYWNlIiwiZGl2Iiwic3BlY2lhbCIsImNsYXNzTmFtZSIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaWQiLCJ0aXRsZSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhlYXJ0cyIsIl9jb3VudCIsImZhdnMiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});