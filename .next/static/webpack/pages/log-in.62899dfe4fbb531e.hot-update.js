"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/log-in",{

/***/ "./pages/log-in.tsx":
/*!**************************!*\
  !*** ./pages/log-in.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Login = function() {\n    var ref;\n    _s();\n    var mutate = (0,swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig)().mutate;\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var onValid = function() {\n        var _ref = _asyncToGenerator(_Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var request;\n            return _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.cookie = \"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n                        mutate(\"/api/users/me\", null, false);\n                        if (loading) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return fetch(\"/api/users/log-in\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(data)\n                        });\n                    case 5:\n                        request = _ctx.sent;\n                        if (request.status === 200) {\n                            router.push(\"/\");\n                        } else {\n                            setLoading(false);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onValid(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            special: \"\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-center mb-[50px]\",\n                            children: \"Let's get started!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(onValid),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-[50px] relative top-[50%]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: \"relative\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                                                    className: \"font-medium text-[15px] text-gray-400 placeholder-gray-300 w-full border-2 border-gray-300 rounded-[15px] py-[6px] pl-[40px] pr-[6px]\",\n                                                    id: \"email\",\n                                                    type: \"email\",\n                                                    placeholder: \"email\"\n                                                }, register(\"email\", {\n                                                    required: \"Write your email please.\"\n                                                })), void 0, false, {\n                                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 17\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                                                    xmlns: \"http://www.w3.org/2000/svg\",\n                                                    fill: \"none\",\n                                                    viewBox: \"0 0 24 24\",\n                                                    strokeWidth: \"1.5\",\n                                                    stroke: \"#b7bdc7\",\n                                                    className: \"w-6 h-6 absolute left-[10px] translate-y-[-50%] top-[50%]\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                        strokeLinecap: \"round\",\n                                                        strokeLinejoin: \"round\",\n                                                        d: \"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                                        lineNumber: 71,\n                                                        columnNumber: 19\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                                    lineNumber: 63,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: errors === null || errors === void 0 ? void 0 : (ref = errors.email) === null || ref === void 0 ? void 0 : ref.message\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 79,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    text: loading ? \"Loading\" : \"Sign In\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Login, \"WoENPHdnqvWv+aKMKxLGgU+if8E=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsTUFBSTt3REFDSEMsYUFBYSxFQUFDLE9BQU87d0RBQ3JCQyxjQUFjLEVBQUMsT0FBTzt3REFDdEJDLENBQUMsRUFBQyx3UEFBd1A7Ozs7OzZEQUMxUDs7Ozs7eURBQ0U7Ozs7OztpREFDRjtzREFFTiw4REFBQ0MsTUFBSTtzREFBRTVDLE1BQU0sYUFBTkEsTUFBTSxXQUFPLEdBQWJBLEtBQUFBLENBQWEsR0FBYkEsQ0FBQUEsR0FBYSxHQUFiQSxNQUFNLENBQUU2QyxLQUFLLGNBQWI3QyxHQUFhLGNBQWJBLEtBQUFBLENBQWEsR0FBYkEsR0FBYSxDQUFFOEMsT0FBTzs7Ozs7aURBQVE7Ozs7Ozt5Q0FDakM7OENBQ04sOERBQUN2RCwwREFBTTtvQ0FBQ3dELElBQUksRUFBRTFDLE9BQU8sR0FBRyxTQUFTLEdBQUcsU0FBUzs7Ozs7eUNBQUk7Ozs7OztpQ0FDNUM7Ozs7Ozt5QkFDSDs7Ozs7O2lCQUNDO3FCQUNSLENBQ0g7Q0FDSDtHQXpFS04sS0FBSzs7UUFDVUQsNkNBQVk7UUFLM0JELG9EQUFPO1FBRUlILGtEQUFTOzs7QUFScEJLLEtBQUFBLEtBQUs7QUEyRVgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2ctaW4udHN4PzMwZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQGNvbXBvbmVudHMvYnV0dG9uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAY29tcG9uZW50cy9sYXlvdXRcIjtcbmltcG9ydCBMb2dvIGZyb20gXCJAY29tcG9uZW50cy9sb2dvXCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xuaW1wb3J0IHsgdXNlU1dSQ29uZmlnIH0gZnJvbSBcInN3clwiO1xuXG5pbnRlcmZhY2UgSUZvcm0ge1xuICBlbWFpbDogc3RyaW5nO1xufVxuXG5jb25zdCBMb2dpbjogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgbXV0YXRlIH0gPSB1c2VTV1JDb25maWcoKTtcbiAgY29uc3Qge1xuICAgIHJlZ2lzdGVyLFxuICAgIGhhbmRsZVN1Ym1pdCxcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG4gIH0gPSB1c2VGb3JtPElGb3JtPigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG9uVmFsaWQgPSBhc3luYyAoZGF0YTogSUZvcm0pID0+IHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBcInRva2VuPTsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQzsgcGF0aD0vO1wiO1xuICAgIG11dGF0ZShcIi9hcGkvdXNlcnMvbWVcIiwgbnVsbCwgZmFsc2UpO1xuXG4gICAgaWYgKCFsb2FkaW5nKSB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gYXdhaXQgZmV0Y2goXCIvYXBpL3VzZXJzL2xvZy1pblwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHNwZWNpYWw9XCJcIj5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItWzUwcHhdXCI+TGV0J3MgZ2V0IHN0YXJ0ZWQhPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzUwcHhdIHJlbGF0aXZlIHRvcC1bNTAlXVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1bMTVweF0gdGV4dC1ncmF5LTQwMCBwbGFjZWhvbGRlci1ncmF5LTMwMCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtWzE1cHhdIHB5LVs2cHhdIHBsLVs0MHB4XSBwci1bNnB4XVwiXG4gICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiV3JpdGUgeW91ciBlbWFpbCBwbGVhc2UuXCIsXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCIjYjdiZGM3XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTYgYWJzb2x1dGUgbGVmdC1bMTBweF0gIHRyYW5zbGF0ZS15LVstNTAlXSB0b3AtWzUwJV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIxLjc1IDYuNzV2MTAuNWEyLjI1IDIuMjUgMCAwMS0yLjI1IDIuMjVoLTE1YTIuMjUgMi4yNSAwIDAxLTIuMjUtMi4yNVY2Ljc1bTE5LjUgMEEyLjI1IDIuMjUgMCAwMDE5LjUgNC41aC0xNWEyLjI1IDIuMjUgMCAwMC0yLjI1IDIuMjVtMTkuNSAwdi4yNDNhMi4yNSAyLjI1IDAgMDEtMS4wNyAxLjkxNmwtNy41IDQuNjE1YTIuMjUgMi4yNSAwIDAxLTIuMzYgMEwzLjMyIDguOTFhMi4yNSAyLjI1IDAgMDEtMS4wNy0xLjkxNlY2Ljc1XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxzcGFuPntlcnJvcnM/LmVtYWlsPy5tZXNzYWdlfTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PXtsb2FkaW5nID8gXCJMb2FkaW5nXCIgOiBcIlNpZ24gSW5cIn0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJMYXlvdXQiLCJMb2dvIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ1c2VTV1JDb25maWciLCJMb2dpbiIsImVycm9ycyIsIm11dGF0ZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJvblZhbGlkIiwiZGF0YSIsInJlcXVlc3QiLCJkb2N1bWVudCIsImNvb2tpZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwicHVzaCIsInNwZWNpYWwiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwiaWQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2VXaWR0aCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwic3BhbiIsImVtYWlsIiwibWVzc2FnZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});