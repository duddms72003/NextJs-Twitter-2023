"use strict";
(() => {
var exports = {};
exports.id = 590;
exports.ids = [590];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 9213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9215);
/* harmony import */ var _libs_server_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3017);
/* harmony import */ var _libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(990);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__]);
_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



async function handler(req, res) {
    const { query: { id  } , session: { user  } ,  } = req;
    const alreadyExists = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fav.findFirst */ .Z.fav.findFirst({
        where: {
            tweetId: Number(id),
            userId: user?.id
        }
    });
    if (alreadyExists) {
        await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fav["delete"] */ .Z.fav["delete"]({
            where: {
                id: alreadyExists.id
            }
        });
    } else {
        await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fav.create */ .Z.fav.create({
            data: {
                user: {
                    connect: {
                        id: user?.id
                    }
                },
                tweet: {
                    connect: {
                        id: Number(id)
                    }
                }
            }
        });
    }
    res.json({
        ok: true
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    methods: [
        "POST"
    ],
    handler
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,359], () => (__webpack_exec__(9213)));
module.exports = __webpack_exports__;

})();