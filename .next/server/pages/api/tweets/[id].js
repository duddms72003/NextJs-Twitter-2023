"use strict";
(() => {
var exports = {};
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = import("iron-session");;

/***/ }),

/***/ 2250:
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
    const tweet = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.findUnique */ .Z.tweet.findUnique({
        where: {
            id: Number(id)
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true
                }
            }
        }
    });
    const terms = tweet?.name.split(" ").map((word)=>({
            name: {
                contains: word
            }
        })
    );
    const relatedtweets = await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].tweet.findMany */ .Z.tweet.findMany({
        where: {
            OR: terms,
            AND: {
                id: {
                    not: tweet?.id
                }
            }
        }
    });
    const isLiked = Boolean(await _libs_server_client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fav.findFirst */ .Z.fav.findFirst({
        where: {
            tweetId: tweet?.id,
            userId: user?.id
        },
        select: {
            id: true
        }
    }));
    res.json({
        ok: true,
        tweet,
        isLiked,
        relatedtweets
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_libs_server_withSession__WEBPACK_IMPORTED_MODULE_1__/* .withApiSession */ .u)((0,_libs_server_withHandler__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)({
    methods: [
        "GET"
    ],
    handler
})));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [534,359], () => (__webpack_exec__(2250)));
module.exports = __webpack_exports__;

})();