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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @libs/client/useUser */ \"./libs/client/useUser.ts\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_writeBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/writeBtn */ \"./components/writeBtn.tsx\");\n/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/item */ \"./components/item.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\nvar _this = undefined;\n\n\n\n\n\n// import SubmitBtn from \"@components/submitBtn\";\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var user = (0,_libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().user;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref1 = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweets\"), data = ref1.data, error = ref1.error;\n    console.log(user, data);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            special: \"px-0 relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: data === null || data === void 0 ? void 0 : (ref = data.tweets) === null || ref === void 0 ? void 0 : ref.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: tweet.id,\n                            title: tweet.name,\n                            description: tweet.description,\n                            hearts: tweet._count.favs\n                        }, tweet.id, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_writeBtn__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        href: \"/tweets/upload\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            fill: \"none\",\n                            viewBox: \"0 0 24 24\",\n                            strokeWidth: \"1.5\",\n                            stroke: \"currentColor\",\n                            className: \"w-6 h-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                d: \"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Home, \"GTNBIiTzqxKfiJEvS6ZX47D82XY=\", false, function() {\n    return [\n        _libs_client_useUser__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUV3QztBQUNDO0FBQ2hCO0FBQ2tCO0FBQzNDLGlEQUFpRDtBQUNUO0FBQ0k7QUFDUjtBQUNBOztBQWFwQyxJQUFNUyxJQUFJLEdBQWEsV0FBTTs7UUFxQmxCQyxHQUFZOztJQXBCckIsSUFBTSxJQUFNLEdBQUtOLGdFQUFPLEVBQUUsQ0FBbEJPLElBQUk7SUFDWixJQUFNQyxNQUFNLEdBQUdaLHNEQUFTLEVBQUU7SUFDMUIsSUFBd0JHLElBQXFDLEdBQXJDQSwrQ0FBTSxDQUFpQixhQUFhLENBQUMsRUFBckRPLElBQUksR0FBWVAsSUFBcUMsQ0FBckRPLElBQUksRUFBRUcsS0FBSyxHQUFLVixJQUFxQyxDQUEvQ1UsS0FBSztJQUNuQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksRUFBRUQsSUFBSSxDQUFDLENBQUM7SUFFeEJSLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlXLEtBQUssRUFBRTtZQUNURCxNQUFNLENBQUNJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25DO0tBQ0YsRUFBRTtRQUFDSixNQUFNO1FBQUVDLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFFcEIsSUFBSSxDQUFDSCxJQUFJLEVBQUU7UUFDVCxxQkFBTyw4REFBQ08sS0FBRzs7OztpQkFBRyxDQUFDO0tBQ2hCO0lBRUQscUJBQ0U7a0JBQ0UsNEVBQUNaLDBEQUFNO1lBQUNhLE9BQU8sRUFBQyxlQUFlOzs4QkFDN0IsOERBQUNWLHdEQUFJOzs7O3lCQUFHOzhCQUNSLDhEQUFDUyxLQUFHO29CQUFDRSxTQUFTLEVBQUMsRUFBRTs4QkFDZFQsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxDQUFBQSxHQUFZLEdBQVpBLElBQUksQ0FBRVUsTUFBTSxjQUFaVixHQUFZLGNBQVpBLEtBQUFBLENBQVksR0FBWkEsR0FBWSxDQUFFVyxHQUFHLENBQUMsU0FBQ0MsS0FBSzs2Q0FDdkIsOERBQUNmLHdEQUFJOzRCQUNIZ0IsRUFBRSxFQUFFRCxLQUFLLENBQUNDLEVBQUU7NEJBRVpDLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxJQUFJOzRCQUNqQkMsV0FBVyxFQUFFSixLQUFLLENBQUNJLFdBQVc7NEJBQzlCQyxNQUFNLEVBQUVMLEtBQUssQ0FBQ00sTUFBTSxDQUFDQyxJQUFJOzJCQUhwQlAsS0FBSyxDQUFDQyxFQUFFOzs7O2tDQUliO3FCQUNILENBQUM7Ozs7O3lCQUNFOzhCQUNOLDhEQUFDTixLQUFHO29CQUFDRSxTQUFTLEVBQUMsT0FBTzs4QkFDcEIsNEVBQUNiLDREQUFRO3dCQUFDd0IsSUFBSSxFQUFDLGdCQUFnQjtrQ0FDN0IsNEVBQUNDLEtBQUc7NEJBQ0ZDLEtBQUssRUFBQyw0QkFBNEI7NEJBQ2xDQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsT0FBTyxFQUFDLFdBQVc7NEJBQ25CQyxXQUFXLEVBQUMsS0FBSzs0QkFDakJDLE1BQU0sRUFBQyxjQUFjOzRCQUNyQmpCLFNBQVMsRUFBQyxTQUFTO3NDQUVuQiw0RUFBQ2tCLE1BQUk7Z0NBQ0hDLGFBQWEsRUFBQyxPQUFPO2dDQUNyQkMsY0FBYyxFQUFDLE9BQU87Z0NBQ3RCQyxDQUFDLEVBQUMsZ0tBQWdLOzs7OztxQ0FDbEs7Ozs7O2lDQUNFOzs7Ozs2QkFDRzs7Ozs7eUJBQ1A7Ozs7OztpQkFDQztxQkFDUixDQUNIO0NBQ0g7R0FwREsvQixJQUFJOztRQUNTTCw0REFBTztRQUNUSixrREFBUztRQUNBRywyQ0FBTTs7O0FBSDFCTSxLQUFBQSxJQUFJO0FBc0RWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgVHdlZXQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgdXNlVXNlciBmcm9tIFwiQGxpYnMvY2xpZW50L3VzZVVzZXJcIjtcbi8vIGltcG9ydCBTdWJtaXRCdG4gZnJvbSBcIkBjb21wb25lbnRzL3N1Ym1pdEJ0blwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgV3JpdGVCdG4gZnJvbSBcIkBjb21wb25lbnRzL3dyaXRlQnRuXCI7XG5pbXBvcnQgSXRlbSBmcm9tIFwiQGNvbXBvbmVudHMvaXRlbVwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkBjb21wb25lbnRzL2xvZ29cIjtcblxuaW50ZXJmYWNlIFR3ZWV0V2l0aENvdW50IGV4dGVuZHMgVHdlZXQge1xuICBfY291bnQ6IHtcbiAgICBmYXZzOiBudW1iZXI7XG4gIH07XG59XG5cbmludGVyZmFjZSBUd2VldHNSZXNwb25zZSB7XG4gIG9rOiBib29sZWFuO1xuICB0d2VldHM6IFR3ZWV0V2l0aENvdW50W107XG59XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXIoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUjxUd2VldHNSZXNwb25zZT4oXCIvYXBpL3R3ZWV0c1wiKTtcbiAgY29uc29sZS5sb2codXNlciwgZGF0YSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgZXJyb3JdKTtcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgc3BlY2lhbD1cInB4LTAgcmVsYXRpdmVcIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICB7ZGF0YT8udHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAgICBpZD17dHdlZXQuaWR9XG4gICAgICAgICAgICAgIGtleT17dHdlZXQuaWR9XG4gICAgICAgICAgICAgIHRpdGxlPXt0d2VldC5uYW1lfVxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dHdlZXQuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIGhlYXJ0cz17dHdlZXQuX2NvdW50LmZhdnN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxuICAgICAgICAgIDxXcml0ZUJ0biBocmVmPVwiL3R3ZWV0cy91cGxvYWRcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBkPVwiTTE2Ljg2MiA0LjQ4N2wxLjY4Ny0xLjY4OGExLjg3NSAxLjg3NSAwIDExMi42NTIgMi42NTJMNi44MzIgMTkuODJhNC41IDQuNSAwIDAxLTEuODk3IDEuMTNsLTIuNjg1LjguOC0yLjY4NWE0LjUgNC41IDAgMDExLjEzLTEuODk3TDE2Ljg2MyA0LjQ4N3ptMCAwTDE5LjUgNy4xMjVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9Xcml0ZUJ0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJ1c2VVc2VyIiwiTGF5b3V0IiwiV3JpdGVCdG4iLCJJdGVtIiwiTG9nbyIsIkhvbWUiLCJkYXRhIiwidXNlciIsInJvdXRlciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlcGxhY2UiLCJkaXYiLCJzcGVjaWFsIiwiY2xhc3NOYW1lIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJpZCIsInRpdGxlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaGVhcnRzIiwiX2NvdW50IiwiZmF2cyIsImhyZWYiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlV2lkdGgiLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});