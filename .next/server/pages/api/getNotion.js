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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/variable */ \"(api)/./utils/variable.ts\");\n\n\n\nconst notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({\n    auth: _utils_variable__WEBPACK_IMPORTED_MODULE_1__.notionApiKey\n});\nconst databaseIds = [\n    _utils_variable__WEBPACK_IMPORTED_MODULE_1__.budgetId,\n    _utils_variable__WEBPACK_IMPORTED_MODULE_1__.readingId,\n    _utils_variable__WEBPACK_IMPORTED_MODULE_1__.projectId,\n    _utils_variable__WEBPACK_IMPORTED_MODULE_1__.skillId\n];\nconst promises = databaseIds.map((id)=>{\n    if (id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.budgetId || id === _utils_variable__WEBPACK_IMPORTED_MODULE_1__.readingId) {\n        const date = new Date();\n        const notionData = notion.databases.query({\n            database_id: id,\n            filter: {\n                property: \"Date\",\n                date: {\n                    on_or_after: `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? \"0\" + (date.getMonth() + 1) : date.getMonth() + 1}-01`\n                }\n            }\n        });\n        return notionData;\n    } else {\n        const notionData = notion.databases.query({\n            database_id: id\n        });\n        return notionData;\n    }\n});\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const notionData = await notion.databases.query({\n                database_id: req.query.id\n            });\n            console.log(notionData);\n            res.status(200).json(notionData);\n        // const response = await Promise.all(promises);\n        // interface INotionData {\n        //     [key: string]: any;\n        // }\n        // const notionData: INotionData = {};\n        // const tableNames = [\"budget\", \"reading\", \"project\", \"skills\"];\n        // tableNames.forEach((id: string, index) => {\n        //     notionData[id] = response[index];\n        // });\n        // res.status(200).json(notionData);\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Internal server error\"\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEM7QUFDTTtBQUMyQjtBQUUzRSxNQUFNTSxTQUFTLElBQUlOLG9EQUFNQSxDQUFDO0lBQUVPLE1BQU1OLHlEQUFZQTtBQUFDO0FBRS9DLE1BQU1PLGNBQWM7SUFBQ04scURBQVFBO0lBQUVDLHNEQUFTQTtJQUFFQyxzREFBU0E7SUFBRUMsb0RBQU9BO0NBQUM7QUFDN0QsTUFBTUksV0FBV0QsWUFBWUUsR0FBRyxDQUFDLENBQUNDLEtBQU87SUFDckMsSUFBSUEsT0FBT1QscURBQVFBLElBQUlTLE9BQU9SLHNEQUFTQSxFQUFFO1FBQ3JDLE1BQU1TLE9BQU8sSUFBSUM7UUFDakIsTUFBTUMsYUFBYVIsT0FBT1MsU0FBUyxDQUFDQyxLQUFLLENBQUM7WUFDdENDLGFBQWFOO1lBQ2JPLFFBQVE7Z0JBQ0pDLFVBQVU7Z0JBQ1ZQLE1BQU07b0JBQ0ZRLGFBQWEsQ0FBQyxFQUFFUixLQUFLUyxXQUFXLEdBQUcsQ0FBQyxFQUNoQ1QsS0FBS1UsUUFBUSxLQUFLLElBQUksS0FDaEIsTUFBT1YsQ0FBQUEsS0FBS1UsUUFBUSxLQUFLLEtBQ3pCVixLQUFLVSxRQUFRLEtBQUssQ0FBQyxDQUM1QixHQUFHLENBQUM7Z0JBQ1Q7WUFDSjtRQUNKO1FBRUEsT0FBT1I7SUFDWCxPQUFPO1FBQ0gsTUFBTUEsYUFBYVIsT0FBT1MsU0FBUyxDQUFDQyxLQUFLLENBQUM7WUFDdENDLGFBQWFOO1FBQ2pCO1FBRUEsT0FBT0c7SUFDWCxDQUFDO0FBQ0w7QUFFZSxlQUFlUyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CLEVBQ3RCO0lBQ0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsSUFBSTtZQUNBLE1BQU1aLGFBQWEsTUFBTVIsT0FBT1MsU0FBUyxDQUFDQyxLQUFLLENBQUM7Z0JBQzVDQyxhQUFhTyxJQUFJUixLQUFLLENBQUNMLEVBQUU7WUFDN0I7WUFDQWdCLFFBQVFDLEdBQUcsQ0FBQ2Q7WUFDWlcsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2hCO1FBRXJCLGdEQUFnRDtRQUNoRCwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLElBQUk7UUFDSixzQ0FBc0M7UUFDdEMsaUVBQWlFO1FBQ2pFLDhDQUE4QztRQUM5Qyx3Q0FBd0M7UUFDeEMsTUFBTTtRQUNOLG9DQUFvQztRQUN4QyxFQUFFLE9BQU9pQixPQUFPO1lBQ1pKLFFBQVFJLEtBQUssQ0FBQ0E7WUFDZE4sSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUUsU0FBUztZQUF3QjtRQUM1RDtJQUNKLENBQUM7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi9wYWdlcy9hcGkvZ2V0Tm90aW9uLnRzP2NmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJAbm90aW9uaHEvY2xpZW50XCI7XG5pbXBvcnQgeyBub3Rpb25BcGlLZXkgfSBmcm9tIFwiQC91dGlscy92YXJpYWJsZVwiO1xuaW1wb3J0IHsgYnVkZ2V0SWQsIHJlYWRpbmdJZCwgcHJvamVjdElkLCBza2lsbElkIH0gZnJvbSBcIkAvdXRpbHMvdmFyaWFibGVcIjtcblxuY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7IGF1dGg6IG5vdGlvbkFwaUtleSB9KTtcblxuY29uc3QgZGF0YWJhc2VJZHMgPSBbYnVkZ2V0SWQsIHJlYWRpbmdJZCwgcHJvamVjdElkLCBza2lsbElkXTtcbmNvbnN0IHByb21pc2VzID0gZGF0YWJhc2VJZHMubWFwKChpZCkgPT4ge1xuICAgIGlmIChpZCA9PT0gYnVkZ2V0SWQgfHwgaWQgPT09IHJlYWRpbmdJZCkge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgbm90aW9uRGF0YSA9IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xuICAgICAgICAgICAgZGF0YWJhc2VfaWQ6IGlkIGFzIHN0cmluZyxcbiAgICAgICAgICAgIGZpbHRlcjoge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5OiBcIkRhdGVcIixcbiAgICAgICAgICAgICAgICBkYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9uX29yX2FmdGVyOiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiMFwiICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgICAgICAgICAgICAgICAgIH0tMDFgLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm90aW9uRGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gbm90aW9uLmRhdGFiYXNlcy5xdWVyeSh7XG4gICAgICAgICAgICBkYXRhYmFzZV9pZDogaWQgYXMgc3RyaW5nLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm90aW9uRGF0YTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICAgIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pIHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgbm90aW9uRGF0YSA9IGF3YWl0IG5vdGlvbi5kYXRhYmFzZXMucXVlcnkoe1xuICAgICAgICAgICAgICAgIGRhdGFiYXNlX2lkOiByZXEucXVlcnkuaWQgYXMgc3RyaW5nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhub3Rpb25EYXRhKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG5vdGlvbkRhdGEpO1xuXG4gICAgICAgICAgICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICAgICAgICAgIC8vIGludGVyZmFjZSBJTm90aW9uRGF0YSB7XG4gICAgICAgICAgICAvLyAgICAgW2tleTogc3RyaW5nXTogYW55O1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gY29uc3Qgbm90aW9uRGF0YTogSU5vdGlvbkRhdGEgPSB7fTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHRhYmxlTmFtZXMgPSBbXCJidWRnZXRcIiwgXCJyZWFkaW5nXCIsIFwicHJvamVjdFwiLCBcInNraWxsc1wiXTtcbiAgICAgICAgICAgIC8vIHRhYmxlTmFtZXMuZm9yRWFjaCgoaWQ6IHN0cmluZywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBub3Rpb25EYXRhW2lkXSA9IHJlc3BvbnNlW2luZGV4XTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24obm90aW9uRGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJDbGllbnQiLCJub3Rpb25BcGlLZXkiLCJidWRnZXRJZCIsInJlYWRpbmdJZCIsInByb2plY3RJZCIsInNraWxsSWQiLCJub3Rpb24iLCJhdXRoIiwiZGF0YWJhc2VJZHMiLCJwcm9taXNlcyIsIm1hcCIsImlkIiwiZGF0ZSIsIkRhdGUiLCJub3Rpb25EYXRhIiwiZGF0YWJhc2VzIiwicXVlcnkiLCJkYXRhYmFzZV9pZCIsImZpbHRlciIsInByb3BlcnR5Iiwib25fb3JfYWZ0ZXIiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getNotion.ts\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getNotion.ts"));
module.exports = __webpack_exports__;

})();