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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/button */ \"./components/button.tsx\");\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var _components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/logo */ \"./components/logo.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Login = function() {\n    var ref;\n    _s();\n    var mutate = (0,swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig)().mutate;\n    var ref1 = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)(), register = ref1.register, handleSubmit = ref1.handleSubmit, errors = ref1.formState.errors;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var onValid = function() {\n        var _ref = _asyncToGenerator(_Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(data) {\n            var request;\n            return _Users_jane_Desktop_develop_projects_twitter_clone_2023_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        document.cookie = \"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n                        // mutate(\"/api/users/me\");\n                        mutate(\"/api/users/me\", null, false);\n                        if (loading) {\n                            _ctx.next = 7;\n                            break;\n                        }\n                        _ctx.next = 5;\n                        return fetch(\"/api/users/log-in\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify(data)\n                        });\n                    case 5:\n                        request = _ctx.sent;\n                        if (request.status === 200) {\n                            router.push(\"/\");\n                        } else {\n                            setLoading(false);\n                        }\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onValid(data) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-center mb-[50px]\",\n                            children: \"Let's get started!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit(onValid),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"mb-[50px] relative top-[50%]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", _objectSpread({\n                                            className: \"font-medium text-[15px] text-gray-400 placeholder-gray-300 w-full border-2 border-gray-300 rounded-[15px] py-[6px] pl-[40px] pr-[6px]\",\n                                            id: \"email\",\n                                            type: \"email\",\n                                            placeholder: \"email\"\n                                        }, register(\"email\", {\n                                            required: \"Write your email please.\"\n                                        })), void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            strokeWidth: \"1.5\",\n                                            stroke: \"#b7bdc7\",\n                                            className: \"w-6 h-6 absolute left-[10px] translate-y-[-50%] top-[50%]\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: \"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                            children: errors === null || errors === void 0 ? void 0 : (ref = errors.email) === null || ref === void 0 ? void 0 : ref.message\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    text: loading ? \"Loading\" : \"Log-in\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/jane/Desktop/\\u1111\\u1161\\u110F\\u1161/develop_projects/\\u1102\\u1169\\u1106\\u1161\\u1103\\u1173_\\u1111\\u1173\\u1105\\u1169\\u110C\\u1166\\u11A8\\u1110\\u1173/twitter-clone-2023/pages/log-in.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(Login, \"WoENPHdnqvWv+aKMKxLGgU+if8E=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_7__.useSWRConfig,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm,\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2ctaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBQ0o7QUFFSTtBQUNBO0FBQ0U7QUFDUDs7QUFNbkMsSUFBTVEsS0FBSyxHQUFhLFdBQU07UUE4RFRDLEdBQWE7O0lBN0RoQyxJQUFNLE1BQVEsR0FBS0YsaURBQVksRUFBRSxDQUF6QkcsTUFBTTtJQUNkLElBSUlKLElBQWdCLEdBQWhCQSx3REFBTyxFQUFTLEVBSGxCSyxRQUFRLEdBR05MLElBQWdCLENBSGxCSyxRQUFRLEVBQ1JDLFlBQVksR0FFVk4sSUFBZ0IsQ0FGbEJNLFlBQVksRUFDWkMsTUFBbUIsR0FDakJQLElBQWdCLENBRGxCTyxTQUFTLENBQUlKLE1BQU07SUFFckIsSUFBOEJKLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFwQi9DLE9Bb0JnQixHQUFnQkEsSUFBZSxHQUEvQixFQXBCaEIsVUFvQjRCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBTVcsTUFBTSxHQUFHYixzREFBUyxFQUFFO0lBRTFCLElBQU1jLE9BQU87bUJBQUcsc01BQU9DLElBQVcsRUFBSztnQkFNN0JDLE9BQU87Ozs7d0JBTGZDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLHdEQUF3RCxDQUFDO3dCQUMzRSwyQkFBMkI7d0JBQzNCWCxNQUFNLENBQUMsZUFBZSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs0QkFFaENJLE9BQU87Ozs7OytCQUNZUSxLQUFLLENBQUMsbUJBQW1CLEVBQUU7NEJBQy9DQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsT0FBTyxFQUFFO2dDQUNQLGNBQWMsRUFBRSxrQkFBa0I7NkJBQ25DOzRCQUNEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxJQUFJLENBQUM7eUJBQzNCLENBQUM7O3dCQU5JQyxPQUFPLFlBTVg7d0JBRUYsSUFBSUEsT0FBTyxDQUFDUyxNQUFNLEtBQUssR0FBRyxFQUFFOzRCQUMxQlosTUFBTSxDQUFDYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ2xCLE1BQU07NEJBQ0xkLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDbkI7Ozs7OztTQUVKO3dCQXBCS0UsT0FBTyxDQUFVQyxJQUFXOzs7T0FvQmpDO0lBQ0QscUJBQ0U7a0JBQ0UsNEVBQUNqQiwwREFBTTs7OEJBQ0wsOERBQUNDLHdEQUFJOzs7O3lCQUFHOzhCQUNSLDhEQUFDNEIsS0FBRzs7c0NBQ0YsOERBQUNDLElBQUU7NEJBQUNDLFNBQVMsRUFBQyx1QkFBdUI7c0NBQUMsb0JBQWtCOzs7OztpQ0FBSztzQ0FDN0QsOERBQUNDLE1BQUk7NEJBQUNDLFFBQVEsRUFBRXRCLFlBQVksQ0FBQ0ssT0FBTyxDQUFDOzs4Q0FDbkMsOERBQUNhLEtBQUc7b0NBQUNFLFNBQVMsRUFBQyw4QkFBOEI7O3NEQUMzQyw4REFBQ0csT0FBSzs0Q0FBQ0MsT0FBTyxFQUFDLE9BQU87Ozs7O2lEQUFTO3NEQUMvQiw4REFBQ0MsT0FBSzs0Q0FDSkwsU0FBUyxFQUFDLHVJQUF1STs0Q0FDakpNLEVBQUUsRUFBQyxPQUFPOzRDQUNWQyxJQUFJLEVBQUMsT0FBTzs0Q0FDWkMsV0FBVyxFQUFDLE9BQU87MkNBQ2Y3QixRQUFRLENBQUMsT0FBTyxFQUFFOzRDQUFFOEIsUUFBUSxFQUFFLDBCQUEwQjt5Q0FBRSxDQUFDOzs7O2lEQUMvRDtzREFDRiw4REFBQ0MsS0FBRzs0Q0FDRkMsS0FBSyxFQUFDLDRCQUE0Qjs0Q0FDbENDLElBQUksRUFBQyxNQUFNOzRDQUNYQyxPQUFPLEVBQUMsV0FBVzs0Q0FDbkJDLFdBQVcsRUFBQyxLQUFLOzRDQUNqQkMsTUFBTSxFQUFDLFNBQVM7NENBQ2hCZixTQUFTLEVBQUMsMkRBQTREO3NEQUV0RSw0RUFBQ2dCLE1BQUk7Z0RBQ0hDLGFBQWEsRUFBQyxPQUFPO2dEQUNyQkMsY0FBYyxFQUFDLE9BQU87Z0RBQ3RCQyxDQUFDLEVBQUMsd1BBQXdQOzs7OztxREFDMVA7Ozs7O2lEQUNFO3NEQUVOLDhEQUFDQyxNQUFJO3NEQUFFM0MsTUFBTSxhQUFOQSxNQUFNLFdBQU8sR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxDQUFBQSxHQUFhLEdBQWJBLE1BQU0sQ0FBRTRDLEtBQUssY0FBYjVDLEdBQWEsY0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxHQUFhLENBQUU2QyxPQUFPOzs7OztpREFBUTs7Ozs7O3lDQUNqQzs4Q0FDTiw4REFBQ3RELDBEQUFNO29DQUFDdUQsSUFBSSxFQUFFekMsT0FBTyxHQUFHLFNBQVMsR0FBRyxRQUFROzs7Ozt5Q0FBSTs7Ozs7O2lDQUMzQzs7Ozs7O3lCQUNIOzs7Ozs7aUJBQ0M7cUJBQ1IsQ0FDSDtDQUNIO0dBdEVLTixLQUFLOztRQUNVRCw2Q0FBWTtRQUszQkQsb0RBQU87UUFFSUgsa0RBQVM7OztBQVJwQkssS0FBQUEsS0FBSztBQXdFWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2xvZy1pbi50c3g/MzBkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCJAY29tcG9uZW50cy9idXR0b25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkBjb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IExvZ28gZnJvbSBcIkBjb21wb25lbnRzL2xvZ29cIjtcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XG5pbXBvcnQgeyB1c2VTV1JDb25maWcgfSBmcm9tIFwic3dyXCI7XG5cbmludGVyZmFjZSBJRm9ybSB7XG4gIGVtYWlsOiBzdHJpbmc7XG59XG5cbmNvbnN0IExvZ2luOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBtdXRhdGUgfSA9IHVzZVNXUkNvbmZpZygpO1xuICBjb25zdCB7XG4gICAgcmVnaXN0ZXIsXG4gICAgaGFuZGxlU3VibWl0LFxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcbiAgfSA9IHVzZUZvcm08SUZvcm0+KCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3Qgb25WYWxpZCA9IGFzeW5jIChkYXRhOiBJRm9ybSkgPT4ge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IFwidG9rZW49OyBleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgVVRDOyBwYXRoPS87XCI7XG4gICAgLy8gbXV0YXRlKFwiL2FwaS91c2Vycy9tZVwiKTtcbiAgICBtdXRhdGUoXCIvYXBpL3VzZXJzL21lXCIsIG51bGwsIGZhbHNlKTtcblxuICAgIGlmICghbG9hZGluZykge1xuICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFwiL2FwaS91c2Vycy9sb2ctaW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPExvZ28gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItWzUwcHhdXCI+TGV0J3MgZ2V0IHN0YXJ0ZWQhPC9oMT5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uVmFsaWQpfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzUwcHhdIHJlbGF0aXZlIHRvcC1bNTAlXVwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1bMTVweF0gdGV4dC1ncmF5LTQwMCBwbGFjZWhvbGRlci1ncmF5LTMwMCB3LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtWzE1cHhdIHB5LVs2cHhdIHBsLVs0MHB4XSBwci1bNnB4XVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJlbWFpbFwiLCB7IHJlcXVpcmVkOiBcIldyaXRlIHlvdXIgZW1haWwgcGxlYXNlLlwiIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMS41XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjYjdiZGM3XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02IGFic29sdXRlIGxlZnQtWzEwcHhdICB0cmFuc2xhdGUteS1bLTUwJV0gdG9wLVs1MCVdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTIxLjc1IDYuNzV2MTAuNWEyLjI1IDIuMjUgMCAwMS0yLjI1IDIuMjVoLTE1YTIuMjUgMi4yNSAwIDAxLTIuMjUtMi4yNVY2Ljc1bTE5LjUgMEEyLjI1IDIuMjUgMCAwMDE5LjUgNC41aC0xNWEyLjI1IDIuMjUgMCAwMC0yLjI1IDIuMjVtMTkuNSAwdi4yNDNhMi4yNSAyLjI1IDAgMDEtMS4wNyAxLjkxNmwtNy41IDQuNjE1YTIuMjUgMi4yNSAwIDAxLTIuMzYgMEwzLjMyIDguOTFhMi4yNSAyLjI1IDAgMDEtMS4wNy0xLjkxNlY2Ljc1XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgICAgICA8c3Bhbj57ZXJyb3JzPy5lbWFpbD8ubWVzc2FnZX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD17bG9hZGluZyA/IFwiTG9hZGluZ1wiIDogXCJMb2ctaW5cIn0gLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJMYXlvdXQiLCJMb2dvIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJ1c2VTV1JDb25maWciLCJMb2dpbiIsImVycm9ycyIsIm11dGF0ZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZm9ybVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyb3V0ZXIiLCJvblZhbGlkIiwiZGF0YSIsInJlcXVlc3QiLCJkb2N1bWVudCIsImNvb2tpZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwicHVzaCIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZVdpZHRoIiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsImQiLCJzcGFuIiwiZW1haWwiLCJtZXNzYWdlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/log-in.tsx\n");

/***/ })

});