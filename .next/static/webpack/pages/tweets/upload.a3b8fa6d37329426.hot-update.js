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

/***/ "./pages/tweets/upload/index.tsx":
/*!***************************************!*\
  !*** ./pages/tweets/upload/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/input */ \"./components/input.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var _libs_client_useMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/client/useMutation */ \"./libs/client/useMutation.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/textarea */ \"./components/textarea.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Upload = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)(), register = ref.register, handleSubmit = ref.handleSubmit;\n    var ref1 = _slicedToArray((0,_libs_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/tweets\"), 2), uploadTweet = ref1[0], ref2 = ref1[1], loading = ref2.loading, data1 = ref2.data;\n    var onValid = function(data) {\n        if (loading) return;\n        uploadTweet(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (data1 === null || data1 === void 0 ? void 0 : data1.ok) {\n            router.replace(\"/tweets/\".concat(data1.tweet.id));\n        }\n    }, [\n        data1,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        canGoBack: true,\n        special: \"specialClass\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#ebeef4] rounded-xl p-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"pb-9 font-normal text-center text-[21px]\",\n                        children: \"What are you thinking of ?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_input__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        register: register(\"name\", {\n                            required: true\n                        }),\n                        required: true,\n                        label: \"\",\n                        name: \"name\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        className: \"space-y-4\",\n                        onSubmit: handleSubmit(onValid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_textarea__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                register: register(\"description\", {\n                                    required: true\n                                }),\n                                name: \"description\",\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    text: loading ? \"Loading...\" : \"Upload\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/tweets/upload/index.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Upload, \"aEgpuFeF4FGpTrJ+fjjHkY/yWTk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm,\n        _libs_client_useMutation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Upload;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Upload);\nvar _c;\n$RefreshReg$(_c, \"Upload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90d2VldHMvdXBsb2FkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0M7QUFDRTtBQUNFO0FBQ1M7QUFDakI7QUFFTTtBQUNBO0FBQ0k7QUFDUjs7QUFZcEMsSUFBTVMsTUFBTSxHQUFhLFdBQU07O0lBQzdCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUFtQ0gsR0FBMEIsR0FBMUJBLHdEQUFPLEVBQW1CLEVBQXJEUyxRQUFRLEdBQW1CVCxHQUEwQixDQUFyRFMsUUFBUSxFQUFFQyxZQUFZLEdBQUtWLEdBQTBCLENBQTNDVSxZQUFZO0lBQzlCLElBQ0VULElBQStDLGtCQUEvQ0Esb0VBQVcsQ0FBc0IsYUFBYSxDQUFDLE1BRDFDVSxXQUFXLEdBQ2hCVixJQUErQyxHQUQvQixTQUNoQkEsSUFBK0MsS0FEM0JXLE9BQU8sUUFBUEEsT0FBTyxFQUFFQyxLQUFJLFFBQUpBLElBQUk7SUFFbkMsSUFBTUMsT0FBTyxHQUFHLFNBQUNELElBQXFCLEVBQUs7UUFDekMsSUFBSUQsT0FBTyxFQUFFLE9BQU87UUFDcEJELFdBQVcsQ0FBQ0UsSUFBSSxDQUFDLENBQUM7S0FDbkI7SUFDRFgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSVcsS0FBSSxhQUFKQSxLQUFJLFdBQUksR0FBUkEsS0FBQUEsQ0FBUSxHQUFSQSxLQUFJLENBQUVFLEVBQUUsRUFBRTtZQUNaUCxNQUFNLENBQUNRLE9BQU8sQ0FBQyxVQUFTLENBQWdCLE9BQWRILEtBQUksQ0FBQ0ksS0FBSyxDQUFDQyxFQUFFLENBQUUsQ0FBQyxDQUFDO1NBQzVDO0tBQ0YsRUFBRTtRQUFDTCxLQUFJO1FBQUVMLE1BQU07S0FBQyxDQUFDLENBQUM7SUFDbkIscUJBQ0UsOERBQUNULDBEQUFNO1FBQUNvQixTQUFTO1FBQUNDLE9BQU8sRUFBQyxjQUFjOzswQkFDdEMsOERBQUNkLHdEQUFJOzs7O3FCQUFHOzBCQUNSLDhEQUFDZSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsOEJBQThCOztrQ0FDM0MsOERBQUNDLEdBQUM7d0JBQUNELFNBQVMsRUFBQywwQ0FBMEM7a0NBQUMsNEJBRXhEOzs7Ozs2QkFBSTtrQ0FDSiw4REFBQ3hCLHlEQUFLO3dCQUNKVyxRQUFRLEVBQUVBLFFBQVEsQ0FBQyxNQUFNLEVBQUU7NEJBQUVlLFFBQVEsRUFBRSxJQUFJO3lCQUFFLENBQUM7d0JBQzlDQSxRQUFRO3dCQUNSQyxLQUFLLEVBQUMsRUFBRTt3QkFDUkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLElBQUksRUFBQyxNQUFNOzs7Ozs2QkFDWDtrQ0FDRiw4REFBQ0MsTUFBSTt3QkFBQ04sU0FBUyxFQUFDLFdBQVc7d0JBQUNPLFFBQVEsRUFBRW5CLFlBQVksQ0FBQ0ksT0FBTyxDQUFDOzswQ0FDekQsOERBQUNULDREQUFRO2dDQUNQSSxRQUFRLEVBQUVBLFFBQVEsQ0FBQyxhQUFhLEVBQUU7b0NBQUVlLFFBQVEsRUFBRSxJQUFJO2lDQUFFLENBQUM7Z0NBQ3JERSxJQUFJLEVBQUMsYUFBYTtnQ0FDbEJGLFFBQVE7Ozs7O3FDQUNSOzBDQUVGLDhEQUFDSCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsTUFBTTswQ0FDbkIsNEVBQUNsQiwwREFBTTtvQ0FBQzBCLElBQUksRUFBRWxCLE9BQU8sR0FBRyxZQUFZLEdBQUcsUUFBUTs7Ozs7eUNBQUk7Ozs7O3FDQUMvQzs7Ozs7OzZCQUNEOzs7Ozs7cUJBQ0g7Ozs7OzthQUNDLENBQ1Q7Q0FDSDtHQTFDS0wsTUFBTTs7UUFDS0osa0RBQVM7UUFDV0gsb0RBQU87UUFFeENDLGdFQUFXOzs7QUFKVE0sS0FBQUEsTUFBTTtBQTRDWiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0cy91cGxvYWQvaW5kZXgudHN4P2FhNTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBjb21wb25lbnRzL2lucHV0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgdXNlTXV0YXRpb24gZnJvbSBcIkBsaWJzL2NsaWVudC91c2VNdXRhdGlvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUd2VldCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiQGNvbXBvbmVudHMvdGV4dGFyZWFcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJAY29tcG9uZW50cy9sb2dvXCI7XG5cbmludGVyZmFjZSBVcGxvYWRUd2VldEZvcm0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBVcGxvYWRUd2VldE11dGF0aW9uIHtcbiAgb2s6IGJvb2xlYW47XG4gIHR3ZWV0OiBUd2VldDtcbn1cblxuY29uc3QgVXBsb2FkOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgcmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCB9ID0gdXNlRm9ybTxVcGxvYWRUd2VldEZvcm0+KCk7XG4gIGNvbnN0IFt1cGxvYWRUd2VldCwgeyBsb2FkaW5nLCBkYXRhIH1dID1cbiAgICB1c2VNdXRhdGlvbjxVcGxvYWRUd2VldE11dGF0aW9uPihcIi9hcGkvdHdlZXRzXCIpO1xuICBjb25zdCBvblZhbGlkID0gKGRhdGE6IFVwbG9hZFR3ZWV0Rm9ybSkgPT4ge1xuICAgIGlmIChsb2FkaW5nKSByZXR1cm47XG4gICAgdXBsb2FkVHdlZXQoZGF0YSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRhdGE/Lm9rKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShgL3R3ZWV0cy8ke2RhdGEudHdlZXQuaWR9YCk7XG4gICAgfVxuICB9LCBbZGF0YSwgcm91dGVyXSk7XG4gIHJldHVybiAoXG4gICAgPExheW91dCBjYW5Hb0JhY2sgc3BlY2lhbD1cInNwZWNpYWxDbGFzc1wiPlxuICAgICAgPExvZ28gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyNlYmVlZjRdIHJvdW5kZWQteGwgcC0xMFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi05IGZvbnQtbm9ybWFsIHRleHQtY2VudGVyIHRleHQtWzIxcHhdXCI+XG4gICAgICAgICAgV2hhdCBhcmUgeW91IHRoaW5raW5nIG9mID9cbiAgICAgICAgPC9wPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJuYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBsYWJlbD1cIlwiXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblZhbGlkKX0+XG4gICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICByZWdpc3Rlcj17cmVnaXN0ZXIoXCJkZXNjcmlwdGlvblwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMVwiPlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtsb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIlVwbG9hZFwifSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDtcbiJdLCJuYW1lcyI6WyJJbnB1dCIsIkxheW91dCIsInVzZUZvcm0iLCJ1c2VNdXRhdGlvbiIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkJ1dHRvbiIsIlRleHRBcmVhIiwiTG9nbyIsIlVwbG9hZCIsInJvdXRlciIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwidXBsb2FkVHdlZXQiLCJsb2FkaW5nIiwiZGF0YSIsIm9uVmFsaWQiLCJvayIsInJlcGxhY2UiLCJ0d2VldCIsImlkIiwiY2FuR29CYWNrIiwic3BlY2lhbCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJyZXF1aXJlZCIsImxhYmVsIiwibmFtZSIsInR5cGUiLCJmb3JtIiwib25TdWJtaXQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweets/upload/index.tsx\n");

/***/ })

});