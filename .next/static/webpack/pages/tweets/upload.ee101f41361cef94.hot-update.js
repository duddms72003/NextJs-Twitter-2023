"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweets/upload",{

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Layout(param) {\n    var canGoBack = param.canGoBack, children = param.children, special = param.special;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var onClick = function() {\n        router.back();\n    };\n    var baseClass = \"w-full h-screen justify-center px-10 text-lg font-medium fixed text-gray-800 border-b top-0 flex items-center\";\n    var specialClass = \"bg-[#151f28]\";\n    var bgClasses = special ? \"\".concat(baseClass, \" \").concat(specialClass) : baseClass;\n    var arrowClasses = special ? \"\".concat(baseClass, \" \").concat(specialClass) : baseClass;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-10 left-4 top-7 cursor-pointer inline-block\",\n                    children: canGoBack ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            // className=\"w-6 h-6\"\n                            className: arrowClasses.join(\"w-6 h-6\"),\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M15 19l-7-7 7-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this) : null\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: bgClasses,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Layout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3Qzs7QUFRekIsU0FBU0MsTUFBTSxDQUFDLEtBQTZDLEVBQUU7UUFBN0NDLFNBQVMsR0FBWCxLQUE2QyxDQUEzQ0EsU0FBUyxFQUFFQyxRQUFRLEdBQXJCLEtBQTZDLENBQWhDQSxRQUFRLEVBQUVDLE9BQU8sR0FBOUIsS0FBNkMsQ0FBdEJBLE9BQU87O0lBQzNELElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFNTSxPQUFPLEdBQUcsV0FBTTtRQUNwQkQsTUFBTSxDQUFDRSxJQUFJLEVBQUUsQ0FBQztLQUNmO0lBRUQsSUFBTUMsU0FBUyxHQUNiLCtHQUErRztJQUNqSCxJQUFNQyxZQUFZLEdBQUcsY0FBYztJQUNuQyxJQUFNQyxTQUFTLEdBQUdOLE9BQU8sR0FBRyxFQUFDLENBQWVLLE1BQVksQ0FBekJELFNBQVMsRUFBQyxHQUFDLENBQWUsUUFBYkMsWUFBWSxDQUFFLEdBQUdELFNBQVM7SUFDdEUsSUFBTUcsWUFBWSxHQUFHUCxPQUFPLEdBQUcsRUFBQyxDQUFlSyxNQUFZLENBQXpCRCxTQUFTLEVBQUMsR0FBQyxDQUFlLFFBQWJDLFlBQVksQ0FBRSxHQUFHRCxTQUFTO0lBRXpFLHFCQUNFOzswQkFDRSw4REFBQ0ksS0FBRzswQkFDRiw0RUFBQ0EsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs4QkFDcEVYLFNBQVMsaUJBQ1IsOERBQUNZLFFBQU07d0JBQUNSLE9BQU8sRUFBRUEsT0FBTztrQ0FDdEIsNEVBQUNTLEtBQUc7NEJBQ0Ysc0JBQXNCOzRCQUN0QkYsU0FBUyxFQUFFRixZQUFZLENBQUNLLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ3ZDQyxJQUFJLEVBQUMsTUFBTTs0QkFDWEMsTUFBTSxFQUFDLGNBQWM7NEJBQ3JCQyxPQUFPLEVBQUMsV0FBVzs0QkFDbkJDLEtBQUssRUFBQyw0QkFBNEI7c0NBRWxDLDRFQUFDQyxNQUFJO2dDQUNIQyxhQUFhLEVBQUMsT0FBTztnQ0FDckJDLGNBQWMsRUFBQyxPQUFPO2dDQUN0QkMsV0FBVyxFQUFDLEdBQUc7Z0NBQ2ZDLENBQUMsRUFBQyxpQkFBaUI7Ozs7O29DQUNiOzs7OztnQ0FDSjs7Ozs7NEJBQ0MsR0FDUCxJQUFJOzs7Ozt3QkFDSjs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUNiLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRUgsU0FBUzswQkFDdkIsNEVBQUNFLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxRQUFROzhCQUFFVixRQUFROzs7Ozt3QkFBTzs7Ozs7b0JBQ3BDOztvQkFDTCxDQUNIO0NBQ0g7R0ExQ3VCRixNQUFNOztRQUNiRCxrREFBUzs7O0FBREZDLEtBQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQudHN4P2FmMjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gIGNhbkdvQmFjaz86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG4gIHNwZWNpYWw6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2FuR29CYWNrLCBjaGlsZHJlbiwgc3BlY2lhbCB9OiBMYXlvdXRQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIuYmFjaygpO1xuICB9O1xuXG4gIGNvbnN0IGJhc2VDbGFzcyA9XG4gICAgXCJ3LWZ1bGwgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgcHgtMTAgdGV4dC1sZyBmb250LW1lZGl1bSBmaXhlZCB0ZXh0LWdyYXktODAwIGJvcmRlci1iIHRvcC0wIGZsZXggaXRlbXMtY2VudGVyXCI7XG4gIGNvbnN0IHNwZWNpYWxDbGFzcyA9IFwiYmctWyMxNTFmMjhdXCI7XG4gIGNvbnN0IGJnQ2xhc3NlcyA9IHNwZWNpYWwgPyBgJHtiYXNlQ2xhc3N9ICR7c3BlY2lhbENsYXNzfWAgOiBiYXNlQ2xhc3M7XG4gIGNvbnN0IGFycm93Q2xhc3NlcyA9IHNwZWNpYWwgPyBgJHtiYXNlQ2xhc3N9ICR7c3BlY2lhbENsYXNzfWAgOiBiYXNlQ2xhc3M7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB6LTEwIGxlZnQtNCB0b3AtNyBjdXJzb3ItcG9pbnRlciBpbmxpbmUtYmxvY2tcIj5cbiAgICAgICAgICB7Y2FuR29CYWNrID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIC8vIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YXJyb3dDbGFzc2VzLmpvaW4oXCJ3LTYgaC02XCIpfVxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTE1IDE5bC03LTcgNy03XCJcbiAgICAgICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2JnQ2xhc3Nlc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiTGF5b3V0IiwiY2FuR29CYWNrIiwiY2hpbGRyZW4iLCJzcGVjaWFsIiwicm91dGVyIiwib25DbGljayIsImJhY2siLCJiYXNlQ2xhc3MiLCJzcGVjaWFsQ2xhc3MiLCJiZ0NsYXNzZXMiLCJhcnJvd0NsYXNzZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJzdmciLCJqb2luIiwiZmlsbCIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ })

});