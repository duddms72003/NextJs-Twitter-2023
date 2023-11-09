"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/app-front";
exports.ids = ["pages/app-front"];
exports.modules = {

/***/ "./components/layout.tsx":
/*!*******************************!*\
  !*** ./components/layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Layout({ canGoBack , children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onClick = ()=>{\n        router.back();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"relative z-10 left-4 top-7 cursor-pointer inline-block\",\n                    children: canGoBack ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                            className: \"w-6 h-6\",\n                            fill: \"none\",\n                            stroke: \"currentColor\",\n                            viewBox: \"0 0 24 24\",\n                            xmlns: \"http://www.w3.org/2000/svg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                strokeLinecap: \"round\",\n                                strokeLinejoin: \"round\",\n                                strokeWidth: \"2\",\n                                d: \"M15 19l-7-7 7-7\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, this) : null\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" w-full h-screen justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full\",\n                    children: children\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/layout.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF3QztBQU96QixTQUFTQyxNQUFNLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxRQUFRLEdBQWUsRUFBRTtJQUNuRSxNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsTUFBTUssT0FBTyxHQUFHLElBQU07UUFDcEJELE1BQU0sQ0FBQ0UsSUFBSSxFQUFFLENBQUM7S0FDZjtJQUNELHFCQUNFOzswQkFDRSw4REFBQ0MsS0FBRzswQkFDRiw0RUFBQ0EsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDs4QkFDcEVOLFNBQVMsaUJBQ1IsOERBQUNPLFFBQU07d0JBQUNKLE9BQU8sRUFBRUEsT0FBTztrQ0FDdEIsNEVBQUNLLEtBQUc7NEJBQ0ZGLFNBQVMsRUFBQyxTQUFTOzRCQUNuQkcsSUFBSSxFQUFDLE1BQU07NEJBQ1hDLE1BQU0sRUFBQyxjQUFjOzRCQUNyQkMsT0FBTyxFQUFDLFdBQVc7NEJBQ25CQyxLQUFLLEVBQUMsNEJBQTRCO3NDQUVsQyw0RUFBQ0MsTUFBSTtnQ0FDSEMsYUFBYSxFQUFDLE9BQU87Z0NBQ3JCQyxjQUFjLEVBQUMsT0FBTztnQ0FDdEJDLFdBQVcsRUFBQyxHQUFHO2dDQUNmQyxDQUFDLEVBQUMsaUJBQWlCOzs7OztvQ0FDYjs7Ozs7Z0NBQ0o7Ozs7OzRCQUNDLEdBQ1AsSUFBSTs7Ozs7d0JBQ0o7Ozs7O29CQUNGOzBCQUNOLDhEQUFDWixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0hBQWtIOzBCQUMvSCw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFFBQVE7OEJBQUVMLFFBQVE7Ozs7O3dCQUFPOzs7OztvQkFDcEM7O29CQUNMLENBQ0g7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9jb21wb25lbnRzL2xheW91dC50c3g/YWYyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgY2FuR29CYWNrPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2FuR29CYWNrLCBjaGlsZHJlbiB9OiBMYXlvdXRQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcbiAgICByb3V0ZXIuYmFjaygpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbGVmdC00IHRvcC03IGN1cnNvci1wb2ludGVyIGlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIHtjYW5Hb0JhY2sgPyAoXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2t9PlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy02IGgtNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNMTUgMTlsLTctNyA3LTdcIlxuICAgICAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgaC1zY3JlZW4ganVzdGlmeS1jZW50ZXIgdGV4dC1sZyBweC0xMCBmb250LW1lZGl1bSAgZml4ZWQgdGV4dC1ncmF5LTgwMCBib3JkZXItYiB0b3AtMCAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjYW5Hb0JhY2siLCJjaGlsZHJlbiIsInJvdXRlciIsIm9uQ2xpY2siLCJiYWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwic3ZnIiwiZmlsbCIsInN0cm9rZSIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout.tsx\n");

/***/ }),

/***/ "./components/logo.tsx":
/*!*****************************!*\
  !*** ./components/logo.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Logo)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Logo() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center mb-10 flex justify-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                width: \"50px\",\n                height: \"50px\",\n                viewBox: \"328 355 335 276\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                    d: \" M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A 70, 70 0 0 1 370, 523 A 70, 70 0 0 0 401, 521 A 70, 70 0 0 1 344, 455 A 70, 70 0 0 0 372, 460 A 70, 70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A 67, 67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A 65, 65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A 65, 65 0 0 1 630, 425 Z\",\n                    fill: \"#3BA9EE\"\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/logo.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/logo.tsx\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/components/logo.tsx\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xvZ28udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQWUsU0FBU0EsSUFBSSxHQUFHO0lBQzdCLHFCQUNFO2tCQUNFLDRFQUFDQyxLQUFHO1lBQUNDLFNBQVMsRUFBQyx1Q0FBdUM7c0JBQ3BELDRFQUFDQyxLQUFHO2dCQUNGQyxLQUFLLEVBQUMsTUFBTTtnQkFDWkMsTUFBTSxFQUFDLE1BQU07Z0JBQ2JDLE9BQU8sRUFBQyxpQkFBaUI7Z0JBQ3pCQyxLQUFLLEVBQUMsNEJBQTRCOzBCQUVsQyw0RUFBQ0MsTUFBSTtvQkFDSEMsQ0FBQyxFQUFDLGlWQWVOO29CQUNJQyxJQUFJLEVBQUMsU0FBUzs7Ozs7d0JBQ2Q7Ozs7O29CQUNFOzs7OztnQkFDRjtxQkFDTCxDQUNIO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXR5cGVzY3JpcHQtdGFpbHdpbmQtYmx1ZXByaW50Ly4vY29tcG9uZW50cy9sb2dvLnRzeD8zOTFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItMTAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8c3ZnXG4gICAgICAgICAgd2lkdGg9XCI1MHB4XCJcbiAgICAgICAgICBoZWlnaHQ9XCI1MHB4XCJcbiAgICAgICAgICB2aWV3Qm94PVwiMzI4IDM1NSAzMzUgMjc2XCJcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiXG4gICAgICBNIDYzMCwgNDI1XG4gICAgICBBIDE5NSwgMTk1IDAgMCAxIDMzMSwgNjAwXG4gICAgICBBIDE0MiwgMTQyIDAgMCAwIDQyOCwgNTcwXG4gICAgICBBICA3MCwgIDcwIDAgMCAxIDM3MCwgNTIzXG4gICAgICBBICA3MCwgIDcwIDAgMCAwIDQwMSwgNTIxXG4gICAgICBBICA3MCwgIDcwIDAgMCAxIDM0NCwgNDU1XG4gICAgICBBICA3MCwgIDcwIDAgMCAwIDM3MiwgNDYwXG4gICAgICBBICA3MCwgIDcwIDAgMCAxIDM1NCwgMzcwXG4gICAgICBBIDE5NSwgMTk1IDAgMCAwIDQ5NSwgNDQyXG4gICAgICBBICA2NywgIDY3IDAgMCAxIDYxMSwgMzgwXG4gICAgICBBIDExNywgMTE3IDAgMCAwIDY1NCwgMzYzXG4gICAgICBBICA2NSwgIDY1IDAgMCAxIDYyMywgNDAxXG4gICAgICBBIDExNywgMTE3IDAgMCAwIDY2MiwgMzkwXG4gICAgICBBICA2NSwgIDY1IDAgMCAxIDYzMCwgNDI1XG4gICAgICBaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjM0JBOUVFXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkxvZ28iLCJkaXYiLCJjbGFzc05hbWUiLCJzdmciLCJ3aWR0aCIsImhlaWdodCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJkIiwiZmlsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/logo.tsx\n");

/***/ }),

/***/ "./pages/app-front.tsx":
/*!*****************************!*\
  !*** ./pages/app-front.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FrontPage = ()=>{\n    //   const {\n    //     register,\n    //     handleSubmit,\n    //     formState: { errors },\n    //   } = useForm<IForm>();\n    //   const router = useRouter();\n    //   const onValid = async (data: IForm) => {\n    //     router.push(\"/create-account\");\n    //   };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/app-front.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\uCD08\\uAE30\\uD654\\uBA74\"\n                }, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/app-front.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/app-front.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrontPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcHAtZnJvbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNKO0FBRVY7QUFFMUIsTUFBTUcsU0FBUyxHQUFhLElBQU07SUFDaEMsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQixnQ0FBZ0M7SUFDaEMsNkNBQTZDO0lBQzdDLHNDQUFzQztJQUN0QyxPQUFPO0lBQ1AscUJBQ0U7a0JBQ0UsNEVBQUNILDBEQUFNOzs4QkFDTCw4REFBQ0Msd0RBQUk7Ozs7NkJBQUc7OEJBQ1IsOERBQUNHLEdBQUM7OEJBQUMsMEJBQUk7Ozs7OzZCQUFJOzs7Ozs7cUJBQ0o7cUJBQ1IsQ0FDSDtDQUNIO0FBRUQsaUVBQWVELFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcHAtZnJvbnQudHN4PzUxM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQGNvbXBvbmVudHMvbGF5b3V0XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiQGNvbXBvbmVudHMvbG9nb1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBGcm9udFBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICAvLyAgIGNvbnN0IHtcbiAgLy8gICAgIHJlZ2lzdGVyLFxuICAvLyAgICAgaGFuZGxlU3VibWl0LFxuICAvLyAgICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuICAvLyAgIH0gPSB1c2VGb3JtPElGb3JtPigpO1xuICAvLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyAgIGNvbnN0IG9uVmFsaWQgPSBhc3luYyAoZGF0YTogSUZvcm0pID0+IHtcbiAgLy8gICAgIHJvdXRlci5wdXNoKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAvLyAgIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxwPuy0iOq4sO2ZlOuptDwvcD5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnJvbnRQYWdlO1xuIl0sIm5hbWVzIjpbIkxheW91dCIsIkxvZ28iLCJSZWFjdCIsIkZyb250UGFnZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/app-front.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/app-front.tsx"));
module.exports = __webpack_exports__;

})();