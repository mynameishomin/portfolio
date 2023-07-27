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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/variable */ \"(api)/./utils/variable.ts\");\n\n\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: _utils_variable__WEBPACK_IMPORTED_MODULE_1__.notionApiKey\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            if (req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.budgetId || req.query.id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.readingId) {\n                const date = new Date();\n                const notionData = await notion.databases.query({\n                    database_id: req.query.id,\n                    filter: {\n                        property: \"Date\",\n                        date: {\n                            on_or_after: `${date.getFullYear()}-01-01`\n                        }\n                    }\n                });\n                res.status(200).json(notionData);\n                return;\n            }\n            const notionData = await notion.databases.query({\n                database_id: req.query.id\n            });\n            res.status(200).json(notionData);\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEM7QUFDTTtBQUNPO0FBRXZELE1BQU1JLFNBQVMsSUFBSUosb0RBQU1BLENBQUM7SUFBRUssTUFBTUoseURBQVlBO0FBQUM7QUFFaEMsZUFBZUssUUFDMUJDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUN0QjtJQUNFLElBQUlELElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLElBQUk7WUFDQSxJQUFJRixJQUFJRyxLQUFLLENBQUNDLEVBQUUsS0FBS1QscURBQVFBLElBQUlLLElBQUlHLEtBQUssQ0FBQ0MsRUFBRSxLQUFLUixzREFBU0EsRUFBRTtnQkFDekQsTUFBTVMsT0FBTyxJQUFJQztnQkFDakIsTUFBTUMsYUFBYSxNQUFNVixPQUFPVyxTQUFTLENBQUNMLEtBQUssQ0FBQztvQkFDNUNNLGFBQWFULElBQUlHLEtBQUssQ0FBQ0MsRUFBRTtvQkFDekJNLFFBQVE7d0JBQ0pDLFVBQVU7d0JBQ1ZOLE1BQU07NEJBQ0ZPLGFBQWEsQ0FBQyxFQUFFUCxLQUFLUSxXQUFXLEdBQUcsTUFBTSxDQUFDO3dCQUM5QztvQkFDSjtnQkFDSjtnQkFDQVosSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7Z0JBQ3JCO1lBQ0osQ0FBQztZQUNELE1BQU1BLGFBQWEsTUFBTVYsT0FBT1csU0FBUyxDQUFDTCxLQUFLLENBQUM7Z0JBQzVDTSxhQUFhVCxJQUFJRyxLQUFLLENBQUNDLEVBQUU7WUFDN0I7WUFDQUgsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1I7UUFDekIsRUFBRSxPQUFPUyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7WUFDZGYsSUFBSWEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUcsU0FBUztZQUF3QjtRQUM1RDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzP2NmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIkBub3Rpb25ocS9jbGllbnRcIjtcclxuaW1wb3J0IHsgbm90aW9uQXBpS2V5IH0gZnJvbSBcIkAvdXRpbHMvdmFyaWFibGVcIjtcclxuaW1wb3J0IHsgYnVkZ2V0SWQsIHJlYWRpbmdJZCB9IGZyb20gXCJAL3V0aWxzL3ZhcmlhYmxlXCI7XHJcblxyXG5jb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogbm90aW9uQXBpS2V5IH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICAgIHJlcTogTmV4dEFwaVJlcXVlc3QsXHJcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxyXG4pIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHJlcS5xdWVyeS5pZCA9PT0gYnVkZ2V0SWQgfHwgcmVxLnF1ZXJ5LmlkID09PSByZWFkaW5nSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm90aW9uRGF0YSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlX2lkOiByZXEucXVlcnkuaWQgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJEYXRlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uX29yX2FmdGVyOiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LTAxLTAxYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihub3Rpb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhYmFzZV9pZDogcmVxLnF1ZXJ5LmlkIGFzIHN0cmluZyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlvbkRhdGEpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1lc3NhZ2U6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJub3Rpb25BcGlLZXkiLCJidWRnZXRJZCIsInJlYWRpbmdJZCIsIm5vdGlvbiIsImF1dGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImRhdGUiLCJEYXRlIiwibm90aW9uRGF0YSIsImRhdGFiYXNlcyIsImRhdGFiYXNlX2lkIiwiZmlsdGVyIiwicHJvcGVydHkiLCJvbl9vcl9hZnRlciIsImdldEZ1bGxZZWFyIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNotion.ts\n");

/***/ }),

/***/ "(api)/./utils/variable.ts":
/*!***************************!*\
  !*** ./utils/variable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"budgetId\": () => (/* binding */ budgetId),\n/* harmony export */   \"ghostApiKey\": () => (/* binding */ ghostApiKey),\n/* harmony export */   \"ghostUrl\": () => (/* binding */ ghostUrl),\n/* harmony export */   \"guestBookId\": () => (/* binding */ guestBookId),\n/* harmony export */   \"notionApiKey\": () => (/* binding */ notionApiKey),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId),\n/* harmony export */   \"readingId\": () => (/* binding */ readingId),\n/* harmony export */   \"skillId\": () => (/* binding */ skillId)\n/* harmony export */ });\nconst notionApiKey = \"secret_cmuZifHPNQRnF7Jb6w4rjI9iwtDnxSMh4LemqzatItb\";\n// export const baseUrl = \"https://portfolio.mynameishomin.com\";\nconst baseUrl = \"http://localhost:3000\";\nconst ghostUrl = \"https://mynameishomin.com\";\nconst ghostApiKey = \"c816dde08851bb1887f22f14a8\";\nconst guestBookId = \"0173c6cdbe77488784fed915abf7c39a\";\nconst budgetId = \"a97362f8a349423489497e37c20a41bc\";\nconst readingId = \"5b82356cea1643ba81c9ec2d6945f7dc\";\nconst projectId = \"b69dbfc122e645e3b78c4ff90076a97b\";\nconst skillId = \"a57658a432794f7d9dca4fe30f832707\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy92YXJpYWJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUNULHFEQUFxRDtBQUN6RCxnRUFBZ0U7QUFDekQsTUFBTUMsVUFBVSx3QkFBd0I7QUFDeEMsTUFBTUMsV0FBVyw0QkFBNEI7QUFDN0MsTUFBTUMsY0FBYyw2QkFBNkI7QUFFakQsTUFBTUMsY0FBYyxtQ0FBbUM7QUFDdkQsTUFBTUMsV0FBVyxtQ0FBbUM7QUFDcEQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsVUFBVSxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3V0aWxzL3ZhcmlhYmxlLnRzPzBkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vdGlvbkFwaUtleSA9XHJcbiAgICBcInNlY3JldF9jbXVaaWZIUE5RUm5GN0piNnc0cmpJOWl3dERueFNNaDRMZW1xemF0SXRiXCI7XHJcbi8vIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gXCJodHRwczovL3BvcnRmb2xpby5teW5hbWVpc2hvbWluLmNvbVwiO1xyXG5leHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcbmV4cG9ydCBjb25zdCBnaG9zdFVybCA9IFwiaHR0cHM6Ly9teW5hbWVpc2hvbWluLmNvbVwiO1xyXG5leHBvcnQgY29uc3QgZ2hvc3RBcGlLZXkgPSBcImM4MTZkZGUwODg1MWJiMTg4N2YyMmYxNGE4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ3Vlc3RCb29rSWQgPSBcIjAxNzNjNmNkYmU3NzQ4ODc4NGZlZDkxNWFiZjdjMzlhXCI7XHJcbmV4cG9ydCBjb25zdCBidWRnZXRJZCA9IFwiYTk3MzYyZjhhMzQ5NDIzNDg5NDk3ZTM3YzIwYTQxYmNcIjtcclxuZXhwb3J0IGNvbnN0IHJlYWRpbmdJZCA9IFwiNWI4MjM1NmNlYTE2NDNiYTgxYzllYzJkNjk0NWY3ZGNcIjtcclxuZXhwb3J0IGNvbnN0IHByb2plY3RJZCA9IFwiYjY5ZGJmYzEyMmU2NDVlM2I3OGM0ZmY5MDA3NmE5N2JcIjtcclxuZXhwb3J0IGNvbnN0IHNraWxsSWQgPSBcImE1NzY1OGE0MzI3OTRmN2Q5ZGNhNGZlMzBmODMyNzA3XCI7XHJcbiJdLCJuYW1lcyI6WyJub3Rpb25BcGlLZXkiLCJiYXNlVXJsIiwiZ2hvc3RVcmwiLCJnaG9zdEFwaUtleSIsImd1ZXN0Qm9va0lkIiwiYnVkZ2V0SWQiLCJyZWFkaW5nSWQiLCJwcm9qZWN0SWQiLCJza2lsbElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/variable.ts\n");

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