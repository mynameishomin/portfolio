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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/variable */ \"(api)/./utils/variable.ts\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n    auth: _utils_variable__WEBPACK_IMPORTED_MODULE_0__.notionApiKey\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            if (req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_0__.budgetId || req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_0__.readingId) {\n                const date = new Date();\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id,\n                    filter: {\n                        property: \"Date\",\n                        date: {\n                            on_or_after: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? \"0\" + (date.getMonth() + 1) : date.getMonth() + 1}-01`\n                        }\n                    }\n                });\n                res.status(200).json(notionData);\n            } else {\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id\n                });\n                res.status(200).json(notionData);\n            }\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm90aW9uL1tpZF0udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRTtBQUV4QjtBQUNTO0FBRW5ELE1BQU1JLFNBQVMsSUFBSUYsb0RBQU1BLENBQUM7SUFBRUcsTUFBTUwseURBQVlBO0FBQUM7QUFFaEMsZUFBZU0sUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUN0QjtJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxJQUFJRixJQUFJRyxLQUFLLENBQUNDLEVBQUUsS0FBS1IscURBQVFBLElBQUlJLElBQUlHLEtBQUssQ0FBQ0MsRUFBRSxLQUFLVixzREFBU0EsRUFBRTtnQkFDekQsTUFBTVcsT0FBTyxJQUFJQztnQkFFakIsTUFBTUMsYUFBYSxNQUFNVixPQUFPVyxTQUFTLENBQUNMLEtBQUssQ0FBQztvQkFDNUNNLGFBQWFULElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtvQkFDekJNLFFBQVE7d0JBQ0pDLFVBQVU7d0JBQ1ZOLE1BQU07NEJBQ0ZPLGFBQWEsQ0FBQyxFQUFFUCxLQUFLUSxXQUFXLEdBQUcsQ0FBQyxFQUNoQ1IsS0FBS1MsUUFBUSxLQUFLLElBQUksS0FDaEIsTUFBT1QsQ0FBQUEsS0FBS1MsUUFBUSxLQUFLLEtBQ3pCVCxLQUFLUyxRQUFRLEtBQUssQ0FBQyxDQUM1QixHQUFHLENBQUM7d0JBQ1Q7b0JBQ0o7Z0JBQ0o7Z0JBQ0FiLElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO1lBQ3pCLE9BQU87Z0JBQ0gsTUFBTUEsYUFBYSxNQUFNVixPQUFPVyxTQUFTLENBQUNMLEtBQUssQ0FBQztvQkFDNUNNLGFBQWFULElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtnQkFDN0I7Z0JBQ0FILElBQUljLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO1lBQ3pCLENBQUM7UUFDTCxFQUFFLE9BQU9VLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkaEIsSUFBSWMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUcsU0FBUztZQUF3QjtRQUM1RDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0Tm90aW9uL1tpZF0udHM/N2U0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3Rpb25BcGlLZXksIHJlYWRpbmdJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy92YXJpYWJsZVwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XG5pbXBvcnQgeyBidWRnZXRJZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy92YXJpYWJsZVwiO1xuXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogbm90aW9uQXBpS2V5IH0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gICAgcmVzOiBOZXh0QXBpUmVzcG9uc2Vcbikge1xuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAocmVxLnF1ZXJ5LmlkID09PSBidWRnZXRJZCB8fCByZXEucXVlcnkuaWQgPT09IHJlYWRpbmdJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aW9uRGF0YSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZV9pZDogcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25fb3JfYWZ0ZXI6IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZS5nZXRNb250aCgpICsgMSA8IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRhdGUuZ2V0TW9udGgoKSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LTAxYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obm90aW9uRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vdGlvbkRhdGEgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YWJhc2VfaWQ6IHJlcS5xdWVyeS5pZCBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obm90aW9uRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJub3Rpb25BcGlLZXkiLCJyZWFkaW5nSWQiLCJDbGllbnQiLCJidWRnZXRJZCIsIm5vdGlvbiIsImF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImRhdGUiLCJEYXRlIiwibm90aW9uRGF0YSIsImRhdGFiYXNlcyIsImRhdGFiYXNlX2lkIiwiZmlsdGVyIiwicHJvcGVydHkiLCJvbl9vcl9hZnRlciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNotion/[id].ts\n");

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