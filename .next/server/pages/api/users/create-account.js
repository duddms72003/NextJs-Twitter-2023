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
exports.id = "pages/api/users/create-account";
exports.ids = ["pages/api/users/create-account"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./libs/server/client.ts":
/*!*******************************!*\
  !*** ./libs/server/client.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.client = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWJzL3NlcnZlci9jbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBTTlDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBWSxFQUFFO0FBRWpDLElBQUlFLElBQXNDLEVBQUVDLE1BQU0sQ0FBQ0YsTUFBTSxHQUFHQSxNQUFNLENBQUM7QUFFbkUsaUVBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9saWJzL3NlcnZlci9jbGllbnQudHM/MmIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICB2YXIgY2xpZW50OiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIGdsb2JhbC5jbGllbnQgPSBjbGllbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJjbGllbnQiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./libs/server/client.ts\n");

/***/ }),

/***/ "(api)/./pages/api/users/create-account.tsx":
/*!********************************************!*\
  !*** ./pages/api/users/create-account.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libs/server/client */ \"(api)/./libs/server/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email  } = req.body;\n        const user = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.findUnique({\n            where: {\n                email\n            }\n        });\n        if (user) {\n            return res.status(200).end();\n        }\n        await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].user.create({\n            data: {\n                name,\n                email\n            }\n        });\n        return res.status(201).end();\n    }\n    return res.status(405).end();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLWFjY291bnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ3lDO0FBRTFCLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUNBLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN6QixNQUFNLEVBQUVDLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtRQUNoQyxNQUFNQyxJQUFJLEdBQUcsTUFBTVIsMkVBQXNCLENBQUM7WUFDeENVLEtBQUssRUFBRTtnQkFDTEosS0FBSzthQUNOO1NBQ0YsQ0FBQztRQUNGLElBQUlFLElBQUksRUFBRTtZQUNSLE9BQU9MLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztTQUM5QjtRQUNELE1BQU1aLHVFQUFrQixDQUFDO1lBQ3ZCYyxJQUFJLEVBQUU7Z0JBQ0pULElBQUk7Z0JBQ0pDLEtBQUs7YUFDTjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU9ILEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUM5QjtJQUNELE9BQU9ULEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztDQUM5QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtdHlwZXNjcmlwdC10YWlsd2luZC1ibHVlcHJpbnQvLi9wYWdlcy9hcGkvdXNlcnMvY3JlYXRlLWFjY291bnQudHN4Pzg4ZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJAbGlicy9zZXJ2ZXIvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFJlc3BvbnNlVHlwZT5cbikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gPSByZXEuYm9keTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgY2xpZW50LnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBlbWFpbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuZW5kKCk7XG4gICAgfVxuICAgIGF3YWl0IGNsaWVudC51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmVuZCgpO1xuICB9XG4gIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG59XG4iXSwibmFtZXMiOlsiY2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJ1c2VyIiwiZmluZFVuaXF1ZSIsIndoZXJlIiwic3RhdHVzIiwiZW5kIiwiY3JlYXRlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/create-account.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/create-account.tsx"));
module.exports = __webpack_exports__;

})();