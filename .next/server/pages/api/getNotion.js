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
exports.id = "pages/api/getNotion";
exports.ids = ["pages/api/getNotion"];
exports.modules = {

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "(api)/./pages/api/getNotion.ts":
/*!********************************!*\
  !*** ./pages/api/getNotion.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/variable */ \"(api)/./utils/variable.ts\");\n\n\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: _utils_variable__WEBPACK_IMPORTED_MODULE_1__.notionApiKey\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            if (req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.budgetId || req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.readingId) {\n                const date = new Date();\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id,\n                    filter: {\n                        property: \"Date\",\n                        date: {\n                            on_or_after: `${date.getFullYear()}-01-01`\n                        }\n                    }\n                });\n                res.status(200).json(notionData);\n                return;\n            }\n            const notionData = await notion.databases.query({\n                database_id: req.query.id\n            });\n            res.status(200).json(notionData);\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEM7QUFDTTtBQUNPO0FBRXZELE1BQU1JLFNBQVMsSUFBSUosb0RBQU1BLENBQUM7SUFBRUssTUFBTUoseURBQVlBO0FBQUM7QUFFaEMsZUFBZUssUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUN0QjtJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxJQUFJRixJQUFJRyxLQUFLLENBQUNDLEVBQUUsS0FBS1QscURBQVFBLElBQUlLLElBQUlHLEtBQUssQ0FBQ0MsRUFBRSxLQUFLUixzREFBU0EsRUFBRTtnQkFDekQsTUFBTVMsT0FBTyxJQUFJQztnQkFDakIsTUFBTUMsYUFBYSxNQUFNVixPQUFPVyxTQUFTLENBQUNMLEtBQUssQ0FBQztvQkFDNUNNLGFBQWFULElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtvQkFDekJNLFFBQVE7d0JBQ0pDLFVBQVU7d0JBQ1ZOLE1BQU07NEJBQ0ZPLGFBQWEsQ0FBQyxFQUFFUCxLQUFLUSxXQUFXLEdBQUcsTUFBTSxDQUFDO3dCQUM5QztvQkFDSjtnQkFDSjtnQkFDQVosSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7Z0JBQ3JCO1lBQ0osQ0FBQztZQUNELE1BQU1BLGFBQWEsTUFBTVYsT0FBT1csU0FBUyxDQUFDTCxLQUFLLENBQUM7Z0JBQzVDTSxhQUFhVCxJQUFJRyxLQUFLLENBQUNDLEVBQUU7WUFDN0I7WUFDQUgsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7UUFDekIsRUFBRSxPQUFPUyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZGYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUcsU0FBUztZQUF3QjtRQUM1RDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzP2NmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XG5pbXBvcnQgeyBub3Rpb25BcGlLZXkgfSBmcm9tIFwiQC91dGlscy92YXJpYWJsZVwiO1xuaW1wb3J0IHsgYnVkZ2V0SWQsIHJlYWRpbmdJZCB9IGZyb20gXCJAL3V0aWxzL3ZhcmlhYmxlXCI7XG5cbmNvbnN0IG5vdGlvbiA9IG5ldyBDbGllbnQoeyBhdXRoOiBub3Rpb25BcGlLZXkgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGlmIChyZXEucXVlcnkuaWQgPT09IGJ1ZGdldElkIHx8IHJlcS5xdWVyeS5pZCA9PT0gcmVhZGluZ0lkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aW9uRGF0YSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhYmFzZV9pZDogcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJEYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25fb3JfYWZ0ZXI6IGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tMDEtMDFgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihub3Rpb25EYXRhKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICAgICAgICAgICAgZGF0YWJhc2VfaWQ6IHJlcS5xdWVyeS5pZCBhcyBzdHJpbmcsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlvbkRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiQ2xpZW50Iiwibm90aW9uQXBpS2V5IiwiYnVkZ2V0SWQiLCJyZWFkaW5nSWQiLCJub3Rpb24iLCJhdXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5IiwiaWQiLCJkYXRlIiwiRGF0ZSIsIm5vdGlvbkRhdGEiLCJkYXRhYmFzZXMiLCJkYXRhYmFzZV9pZCIsImZpbHRlciIsInByb3BlcnR5Iiwib25fb3JfYWZ0ZXIiLCJnZXRGdWxsWWVhciIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNotion.ts\n");

/***/ }),

/***/ "(api)/./utils/variable.ts":
/*!***************************!*\
  !*** ./utils/variable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"budgetId\": () => (/* binding */ budgetId),\n/* harmony export */   \"ghostApiKey\": () => (/* binding */ ghostApiKey),\n/* harmony export */   \"ghostUrl\": () => (/* binding */ ghostUrl),\n/* harmony export */   \"messageId\": () => (/* binding */ messageId),\n/* harmony export */   \"notionApiKey\": () => (/* binding */ notionApiKey),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId),\n/* harmony export */   \"readingId\": () => (/* binding */ readingId),\n/* harmony export */   \"skillId\": () => (/* binding */ skillId)\n/* harmony export */ });\nconst notionApiKey = \"secret_cmuZifHPNQRnF7Jb6w4rjI9iwtDnxSMh4LemqzatItb\";\n// export const baseUrl = \"https://portfolio.mynameishomin.com\";\nconst baseUrl = \"http://localhost:3000\";\nconst ghostUrl = \"https://mynameishomin.com\";\nconst ghostApiKey = \"c816dde08851bb1887f22f14a8\";\nconst messageId = \"0173c6cdbe77488784fed915abf7c39a\";\nconst budgetId = \"a97362f8a349423489497e37c20a41bc\";\nconst readingId = \"5b82356cea1643ba81c9ec2d6945f7dc\";\nconst projectId = \"b69dbfc122e645e3b78c4ff90076a97b\";\nconst skillId = \"a57658a432794f7d9dca4fe30f832707\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy92YXJpYWJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUNULHFEQUFxRDtBQUN6RCxnRUFBZ0U7QUFDekQsTUFBTUMsVUFBVSx3QkFBd0I7QUFDeEMsTUFBTUMsV0FBVyw0QkFBNEI7QUFDN0MsTUFBTUMsY0FBYyw2QkFBNkI7QUFFakQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsV0FBVyxtQ0FBbUM7QUFDcEQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsVUFBVSxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3V0aWxzL3ZhcmlhYmxlLnRzPzBkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vdGlvbkFwaUtleSA9XG4gICAgXCJzZWNyZXRfY211WmlmSFBOUVJuRjdKYjZ3NHJqSTlpd3REbnhTTWg0TGVtcXphdEl0YlwiO1xuLy8gZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLm15bmFtZWlzaG9taW4uY29tXCI7XG5leHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5leHBvcnQgY29uc3QgZ2hvc3RVcmwgPSBcImh0dHBzOi8vbXluYW1laXNob21pbi5jb21cIjtcbmV4cG9ydCBjb25zdCBnaG9zdEFwaUtleSA9IFwiYzgxNmRkZTA4ODUxYmIxODg3ZjIyZjE0YThcIjtcblxuZXhwb3J0IGNvbnN0IG1lc3NhZ2VJZCA9IFwiMDE3M2M2Y2RiZTc3NDg4Nzg0ZmVkOTE1YWJmN2MzOWFcIjtcbmV4cG9ydCBjb25zdCBidWRnZXRJZCA9IFwiYTk3MzYyZjhhMzQ5NDIzNDg5NDk3ZTM3YzIwYTQxYmNcIjtcbmV4cG9ydCBjb25zdCByZWFkaW5nSWQgPSBcIjViODIzNTZjZWExNjQzYmE4MWM5ZWMyZDY5NDVmN2RjXCI7XG5leHBvcnQgY29uc3QgcHJvamVjdElkID0gXCJiNjlkYmZjMTIyZTY0NWUzYjc4YzRmZjkwMDc2YTk3YlwiO1xuZXhwb3J0IGNvbnN0IHNraWxsSWQgPSBcImE1NzY1OGE0MzI3OTRmN2Q5ZGNhNGZlMzBmODMyNzA3XCI7XG4iXSwibmFtZXMiOlsibm90aW9uQXBpS2V5IiwiYmFzZVVybCIsImdob3N0VXJsIiwiZ2hvc3RBcGlLZXkiLCJtZXNzYWdlSWQiLCJidWRnZXRJZCIsInJlYWRpbmdJZCIsInByb2plY3RJZCIsInNraWxsSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/variable.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNotion.ts"));
module.exports = __webpack_exports__;

})();