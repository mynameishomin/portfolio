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
exports.id = "pages/api/getNotion/[id]";
exports.ids = ["pages/api/getNotion/[id]"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/getNotion/[id].ts":
/*!*************************************!*\
  !*** ./pages/api/getNotion/[id].ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/variable */ \"(api)/./utils/variable.ts\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n    auth: _utils_variable__WEBPACK_IMPORTED_MODULE_0__.notionApiKey\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            if (req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_0__.budgetId) {\n                const date = new Date();\n                console.log(`${date.getFullYear()}-${date.getMonth()}-00`);\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id,\n                    filter: {\n                        property: \"Date\",\n                        date: {\n                            on_or_after: `${date.getFullYear()}-${date.getMonth() < 10 ? \"0\" + date.getMonth() : null}-00`\n                        }\n                    }\n                });\n                res.status(200).json(notionData);\n            } else {\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id\n                });\n                res.status(200).json(notionData);\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm90aW9uL1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF1RDtBQUViO0FBQ1M7QUFFbkQsTUFBTUcsU0FBUyxJQUFJRixvREFBTUEsQ0FBQztJQUFFRyxNQUFNSix5REFBWUE7QUFBQztBQUVoQyxlQUFlSyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsSUFBSTtZQUNBLElBQUlGLElBQUlHLEtBQUssQ0FBQ0MsRUFBRSxLQUFLUixxREFBUUEsRUFBRTtnQkFDM0IsTUFBTVMsT0FBTyxJQUFJQztnQkFFakJDLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVILEtBQUtJLFdBQVcsR0FBRyxDQUFDLEVBQUVKLEtBQUtLLFFBQVEsR0FBRyxHQUFHLENBQUM7Z0JBQ3pELE1BQU1DLGFBQWEsTUFBTWQsT0FBT2UsU0FBUyxDQUFDVCxLQUFLLENBQUM7b0JBQzVDVSxhQUFhYixJQUFJRyxLQUFLLENBQUNDLEVBQUU7b0JBQ3pCVSxRQUFRO3dCQUNKQyxVQUFVO3dCQUNWVixNQUFNOzRCQUNGVyxhQUFhLENBQUMsRUFBRVgsS0FBS0ksV0FBVyxHQUFHLENBQUMsRUFDaENKLEtBQUtLLFFBQVEsS0FBSyxLQUNaLE1BQU1MLEtBQUtLLFFBQVEsS0FDbkIsSUFBSSxDQUNiLEdBQUcsQ0FBQzt3QkFDVDtvQkFDSjtnQkFDSjtnQkFDQVQsSUFBSWdCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNQO1lBQ3pCLE9BQU87Z0JBQ0gsTUFBTUEsYUFBYSxNQUFNZCxPQUFPZSxTQUFTLENBQUNULEtBQUssQ0FBQztvQkFDNUNVLGFBQWFiLElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtnQkFDN0I7Z0JBQ0FILElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUDtZQUN6QixDQUFDO1FBQ0wsRUFBRSxPQUFPUSxPQUFPO1lBQ1paLFFBQVFZLEtBQUssQ0FBQ0E7WUFDZGxCLElBQUlnQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxTQUFTO1lBQXdCO1FBQzVEO0lBQ0osQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL2FwaS9nZXROb3Rpb24vW2lkXS50cz83ZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vdGlvbkFwaUtleSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy92YXJpYWJsZVwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XG5pbXBvcnQgeyBidWRnZXRJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy92YXJpYWJsZVwiO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogbm90aW9uQXBpS2V5IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocmVxLnF1ZXJ5LmlkID09PSBidWRnZXRJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKX0tMDBgKTtcbiAgICAgICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlX2lkOiByZXEucXVlcnkuaWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcIkRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbl9vcl9hZnRlcjogYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgPCAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIjBcIiArIGRhdGUuZ2V0TW9udGgoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfS0wMGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlvbkRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlX2lkOiByZXEucXVlcnkuaWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlvbkRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsibm90aW9uQXBpS2V5IiwiQ2xpZW50IiwiYnVkZ2V0SWQiLCJub3Rpb24iLCJhdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJkYXRlIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwibm90aW9uRGF0YSIsImRhdGFiYXNlcyIsImRhdGFiYXNlX2lkIiwiZmlsdGVyIiwicHJvcGVydHkiLCJvbl9vcl9hZnRlciIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNotion/[id].ts\n");

/***/ }),

/***/ "(api)/./utils/variable.ts":
/*!***************************!*\
  !*** ./utils/variable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"budgetId\": () => (/* binding */ budgetId),\n/* harmony export */   \"ghostApiKey\": () => (/* binding */ ghostApiKey),\n/* harmony export */   \"ghostUrl\": () => (/* binding */ ghostUrl),\n/* harmony export */   \"guestBookId\": () => (/* binding */ guestBookId),\n/* harmony export */   \"notionApiKey\": () => (/* binding */ notionApiKey),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId),\n/* harmony export */   \"readingId\": () => (/* binding */ readingId),\n/* harmony export */   \"skillId\": () => (/* binding */ skillId)\n/* harmony export */ });\nconst notionApiKey = \"secret_cmuZifHPNQRnF7Jb6w4rjI9iwtDnxSMh4LemqzatItb\";\n// export const baseUrl = \"https://portfolio.mynameishomin.com\";\nconst baseUrl = \"http://localhost:3000\";\nconst ghostUrl = \"https://mynameishomin.com\";\nconst ghostApiKey = \"c816dde08851bb1887f22f14a8\";\nconst guestBookId = \"0173c6cdbe77488784fed915abf7c39a\";\nconst budgetId = \"a97362f8a349423489497e37c20a41bc\";\nconst readingId = \"5b82356cea1643ba81c9ec2d6945f7dc\";\nconst projectId = \"b69dbfc122e645e3b78c4ff90076a97b\";\nconst skillId = \"a57658a432794f7d9dca4fe30f832707\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy92YXJpYWJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUNULHFEQUFxRDtBQUN6RCxnRUFBZ0U7QUFDekQsTUFBTUMsVUFBVSx3QkFBd0I7QUFDeEMsTUFBTUMsV0FBVyw0QkFBNEI7QUFDN0MsTUFBTUMsY0FBYyw2QkFBNkI7QUFFakQsTUFBTUMsY0FBYyxtQ0FBbUM7QUFDdkQsTUFBTUMsV0FBVyxtQ0FBbUM7QUFDcEQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsVUFBVSxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3V0aWxzL3ZhcmlhYmxlLnRzPzBkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vdGlvbkFwaUtleSA9XG4gICAgXCJzZWNyZXRfY211WmlmSFBOUVJuRjdKYjZ3NHJqSTlpd3REbnhTTWg0TGVtcXphdEl0YlwiO1xuLy8gZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLm15bmFtZWlzaG9taW4uY29tXCI7XG5leHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5leHBvcnQgY29uc3QgZ2hvc3RVcmwgPSBcImh0dHBzOi8vbXluYW1laXNob21pbi5jb21cIjtcbmV4cG9ydCBjb25zdCBnaG9zdEFwaUtleSA9IFwiYzgxNmRkZTA4ODUxYmIxODg3ZjIyZjE0YThcIjtcblxuZXhwb3J0IGNvbnN0IGd1ZXN0Qm9va0lkID0gXCIwMTczYzZjZGJlNzc0ODg3ODRmZWQ5MTVhYmY3YzM5YVwiO1xuZXhwb3J0IGNvbnN0IGJ1ZGdldElkID0gXCJhOTczNjJmOGEzNDk0MjM0ODk0OTdlMzdjMjBhNDFiY1wiO1xuZXhwb3J0IGNvbnN0IHJlYWRpbmdJZCA9IFwiNWI4MjM1NmNlYTE2NDNiYTgxYzllYzJkNjk0NWY3ZGNcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0SWQgPSBcImI2OWRiZmMxMjJlNjQ1ZTNiNzhjNGZmOTAwNzZhOTdiXCI7XG5leHBvcnQgY29uc3Qgc2tpbGxJZCA9IFwiYTU3NjU4YTQzMjc5NGY3ZDlkY2E0ZmUzMGY4MzI3MDdcIjtcbiJdLCJuYW1lcyI6WyJub3Rpb25BcGlLZXkiLCJiYXNlVXJsIiwiZ2hvc3RVcmwiLCJnaG9zdEFwaUtleSIsImd1ZXN0Qm9va0lkIiwiYnVkZ2V0SWQiLCJyZWFkaW5nSWQiLCJwcm9qZWN0SWQiLCJza2lsbElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/variable.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNotion/[id].ts"));
module.exports = __webpack_exports__;

})();