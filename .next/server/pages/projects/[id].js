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
exports.id = "pages/projects/[id]";
exports.ids = ["pages/projects/[id]"];
exports.modules = {

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectDetail),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion */ \"react-notion\");\n/* harmony import */ var react_notion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_notion__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-notion/src/styles.css */ \"./node_modules/react-notion/src/styles.css\");\n/* harmony import */ var react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_notion_src_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\n\n\n\n\n\nfunction ProjectDetail({ notionBlockMap  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.notionInit)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_notion__WEBPACK_IMPORTED_MODULE_2__.NotionRenderer, {\n            blockMap: notionBlockMap,\n            fullPage: true\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/pages/projects/[id].tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\nasync function getServerSideProps(context) {\n    const notionBlockMap = await (await fetch(`https://notion-api.splitbee.io/v1/page/${context.params.id}`)).json();\n    return {\n        props: {\n            notionBlockMap\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNNO0FBQ1Q7QUFDSDtBQUNhO0FBRWhDLFNBQVNJLGNBQWMsRUFDbENDLGVBQWMsRUFHakIsRUFBRTtJQUNDLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUV4QkUsZ0RBQVNBLENBQUMsSUFBTTtRQUNaQyw0REFBVUE7SUFDZCxHQUFHLEVBQUU7SUFDTCxxQkFDSTtrQkFDSSw0RUFBQ0Ysd0RBQWNBO1lBQUNNLFVBQVVGO1lBQWdCRyxVQUFVLElBQUk7Ozs7Ozs7QUFHcEUsQ0FBQztBQUVNLGVBQWVDLG1CQUFtQkMsT0FBWSxFQUFFO0lBQ25ELE1BQU1MLGlCQUFpQixNQUFNLENBQ3pCLE1BQU1NLE1BQ0YsQ0FBQyx1Q0FBdUMsRUFBRUQsUUFBUUUsTUFBTSxDQUFDQyxFQUFFLENBQUMsQ0FBQyxDQUNqRSxFQUNGQyxJQUFJO0lBQ04sT0FBTztRQUNIQyxPQUFPO1lBQ0hWO1FBQ0o7SUFDSjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3BhZ2VzL3Byb2plY3RzL1tpZF0udHN4P2VmYzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBOb3Rpb25SZW5kZXJlciB9IGZyb20gXCJyZWFjdC1ub3Rpb25cIjtcbmltcG9ydCBcInJlYWN0LW5vdGlvbi9zcmMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub3Rpb25Jbml0IH0gZnJvbSBcIkAvdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoe1xuICAgIG5vdGlvbkJsb2NrTWFwLFxufToge1xuICAgIG5vdGlvbkJsb2NrTWFwOiBhbnk7XG59KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBub3Rpb25Jbml0KCk7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Tm90aW9uUmVuZGVyZXIgYmxvY2tNYXA9e25vdGlvbkJsb2NrTWFwfSBmdWxsUGFnZT17dHJ1ZX0gLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBub3Rpb25CbG9ja01hcCA9IGF3YWl0IChcbiAgICAgICAgYXdhaXQgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9ub3Rpb24tYXBpLnNwbGl0YmVlLmlvL3YxL3BhZ2UvJHtjb250ZXh0LnBhcmFtcy5pZH1gXG4gICAgICAgIClcbiAgICApLmpzb24oKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbm90aW9uQmxvY2tNYXAsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJOb3Rpb25SZW5kZXJlciIsInVzZUVmZmVjdCIsIm5vdGlvbkluaXQiLCJQcm9qZWN0RGV0YWlsIiwibm90aW9uQmxvY2tNYXAiLCJyb3V0ZXIiLCJibG9ja01hcCIsImZ1bGxQYWdlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImZldGNoIiwicGFyYW1zIiwiaWQiLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].tsx\n");

/***/ }),

/***/ "./utils/functions.ts":
/*!****************************!*\
  !*** ./utils/functions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNowDateString\": () => (/* binding */ getNowDateString),\n/* harmony export */   \"notionInit\": () => (/* binding */ notionInit),\n/* harmony export */   \"numberWithComma\": () => (/* binding */ numberWithComma)\n/* harmony export */ });\n/* harmony import */ var _variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variable */ \"./utils/variable.ts\");\n/* harmony import */ var _store_notion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/notion */ \"./utils/store/notion.ts\");\n\n\nconst notionInit = async ()=>{\n    if (!_store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.getState().hasNotion) {\n        const notionData = await (await fetch(`${_variable__WEBPACK_IMPORTED_MODULE_0__.baseUrl}/api/getNotion/`)).json();\n        console.log(notionData);\n        _store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.dispatch((0,_store_notion__WEBPACK_IMPORTED_MODULE_1__.addNotion)(notionData));\n    } else {}\n    return _store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.getState();\n};\nconst getNowDateString = (date)=>{\n    const nowYear = date.getFullYear();\n    const nowMonth = date.getMonth() + 1;\n    const nowDate = date.getDate();\n    return `${nowYear}.${nowMonth < 10 ? \"0\" + nowMonth : nowMonth}.${nowDate < 10 ? \"0\" + nowDate : nowDate}`;\n};\nconst numberWithComma = (number)=>{\n    return number.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, \",\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9mdW5jdGlvbnMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFPb0I7QUFDb0M7QUFFakQsTUFBTUcsYUFBYSxVQUFZO0lBQ2xDLElBQUksQ0FBQ0YsK0RBQW9CLEdBQUdJLFNBQVMsRUFBRTtRQUNuQyxNQUFNQyxhQUFhLE1BQU0sQ0FDckIsTUFBTUMsTUFBTSxDQUFDLEVBQUVQLDhDQUFPQSxDQUFDLGVBQWUsQ0FBQyxHQUN6Q1EsSUFBSTtRQUVOQyxRQUFRQyxHQUFHLENBQUNKO1FBRVpMLCtEQUFvQixDQUFDQyx3REFBU0EsQ0FBQ0k7SUFDbkMsT0FBTyxDQUNQLENBQUM7SUFDRCxPQUFPTCwrREFBb0I7QUFDL0IsRUFBRTtBQUVLLE1BQU1XLG1CQUFtQixDQUFDQyxPQUFlO0lBQzVDLE1BQU1DLFVBQVVELEtBQUtFLFdBQVc7SUFDaEMsTUFBTUMsV0FBV0gsS0FBS0ksUUFBUSxLQUFLO0lBQ25DLE1BQU1DLFVBQVVMLEtBQUtNLE9BQU87SUFFNUIsT0FBTyxDQUFDLEVBQUVMLFFBQVEsQ0FBQyxFQUFFRSxXQUFXLEtBQUssTUFBTUEsV0FBV0EsUUFBUSxDQUFDLENBQUMsRUFDNURFLFVBQVUsS0FBSyxNQUFNQSxVQUFVQSxPQUFPLENBQ3pDLENBQUM7QUFDTixFQUFFO0FBRUssTUFBTUUsa0JBQWtCLENBQUNDLFNBQW1CO0lBQy9DLE9BQU9BLE9BQU9DLFFBQVEsR0FBR0MsT0FBTyxDQUFDLHlCQUF5QjtBQUM5RCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wb3J0Zm9saW8vLi91dGlscy9mdW5jdGlvbnMudHM/ZmE2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIGJhc2VVcmwsXG4gICAgZ3Vlc3RCb29rSWQsXG4gICAgYnVkZ2V0SWQsXG4gICAgcmVhZGluZ0lkLFxuICAgIHByb2plY3RJZCxcbiAgICBza2lsbElkLFxufSBmcm9tIFwiLi92YXJpYWJsZVwiO1xuaW1wb3J0IHsgbm90aW9uU3RvcmUsIGFkZE5vdGlvbiB9IGZyb20gXCIuL3N0b3JlL25vdGlvblwiO1xuXG5leHBvcnQgY29uc3Qgbm90aW9uSW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIW5vdGlvblN0b3JlLmdldFN0YXRlKCkuaGFzTm90aW9uKSB7XG4gICAgICAgIGNvbnN0IG5vdGlvbkRhdGEgPSBhd2FpdCAoXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvZ2V0Tm90aW9uL2ApXG4gICAgICAgICkuanNvbigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKG5vdGlvbkRhdGEpO1xuXG4gICAgICAgIG5vdGlvblN0b3JlLmRpc3BhdGNoKGFkZE5vdGlvbihub3Rpb25EYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICB9XG4gICAgcmV0dXJuIG5vdGlvblN0b3JlLmdldFN0YXRlKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm93RGF0ZVN0cmluZyA9IChkYXRlOiBEYXRlKSA9PiB7XG4gICAgY29uc3Qgbm93WWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBub3dNb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XG4gICAgY29uc3Qgbm93RGF0ZSA9IGRhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgcmV0dXJuIGAke25vd1llYXJ9LiR7bm93TW9udGggPCAxMCA/IFwiMFwiICsgbm93TW9udGggOiBub3dNb250aH0uJHtcbiAgICAgICAgbm93RGF0ZSA8IDEwID8gXCIwXCIgKyBub3dEYXRlIDogbm93RGF0ZVxuICAgIH1gO1xufTtcblxuZXhwb3J0IGNvbnN0IG51bWJlcldpdGhDb21tYSA9IChudW1iZXI6IE51bWJlcikgPT4ge1xuICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIik7XG59O1xuIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJub3Rpb25TdG9yZSIsImFkZE5vdGlvbiIsIm5vdGlvbkluaXQiLCJnZXRTdGF0ZSIsImhhc05vdGlvbiIsIm5vdGlvbkRhdGEiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGlzcGF0Y2giLCJnZXROb3dEYXRlU3RyaW5nIiwiZGF0ZSIsIm5vd1llYXIiLCJnZXRGdWxsWWVhciIsIm5vd01vbnRoIiwiZ2V0TW9udGgiLCJub3dEYXRlIiwiZ2V0RGF0ZSIsIm51bWJlcldpdGhDb21tYSIsIm51bWJlciIsInRvU3RyaW5nIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/functions.ts\n");

/***/ }),

/***/ "./utils/store/notion.ts":
/*!*******************************!*\
  !*** ./utils/store/notion.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNotion\": () => (/* binding */ addNotion),\n/* harmony export */   \"notionStore\": () => (/* binding */ notionStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst notionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"notion\",\n    initialState: {\n        notion: [],\n        hasNotion: false\n    },\n    reducers: {\n        addNotion: (state, action)=>{\n            state.notion = action.payload;\n            state.hasNotion = true;\n        }\n    }\n});\nconst { addNotion  } = notionSlice.actions;\nconst notionStore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: notionSlice.reducer\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdG9yZS9ub3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErRDtBQUUvRCxNQUFNRSxjQUFjRiw2REFBV0EsQ0FBQztJQUM1QkcsTUFBTTtJQUNOQyxjQUFjO1FBQ1ZDLFFBQVEsRUFBRTtRQUNWQyxXQUFXLEtBQUs7SUFDcEI7SUFDQUMsVUFBVTtRQUNOQyxXQUFXLENBQUNDLE9BQU9DLFNBQVc7WUFDMUJELE1BQU1KLE1BQU0sR0FBR0ssT0FBT0MsT0FBTztZQUM3QkYsTUFBTUgsU0FBUyxHQUFHLElBQUk7UUFDMUI7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUFFRSxVQUFTLEVBQUUsR0FBR04sWUFBWVUsT0FBTyxDQUFDO0FBRTFDLE1BQU1DLGNBQWNaLGdFQUFjQSxDQUFDO0lBQ3RDYSxTQUFTWixZQUFZWSxPQUFPO0FBQ2hDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3V0aWxzL3N0b3JlL25vdGlvbi50cz9hNDIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmNvbnN0IG5vdGlvblNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICAgIG5hbWU6IFwibm90aW9uXCIsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIG5vdGlvbjogW10gYXMgYW55LFxuICAgICAgICBoYXNOb3Rpb246IGZhbHNlLFxuICAgIH0sXG4gICAgcmVkdWNlcnM6IHtcbiAgICAgICAgYWRkTm90aW9uOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3RhdGUubm90aW9uID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICAgICAgICBzdGF0ZS5oYXNOb3Rpb24gPSB0cnVlO1xuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgYWRkTm90aW9uIH0gPSBub3Rpb25TbGljZS5hY3Rpb25zO1xuXG5leHBvcnQgY29uc3Qgbm90aW9uU3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogbm90aW9uU2xpY2UucmVkdWNlcixcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiY29uZmlndXJlU3RvcmUiLCJub3Rpb25TbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJub3Rpb24iLCJoYXNOb3Rpb24iLCJyZWR1Y2VycyIsImFkZE5vdGlvbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFjdGlvbnMiLCJub3Rpb25TdG9yZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/store/notion.ts\n");

/***/ }),

/***/ "./utils/variable.ts":
/*!***************************!*\
  !*** ./utils/variable.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"baseUrl\": () => (/* binding */ baseUrl),\n/* harmony export */   \"budgetId\": () => (/* binding */ budgetId),\n/* harmony export */   \"ghostApiKey\": () => (/* binding */ ghostApiKey),\n/* harmony export */   \"ghostUrl\": () => (/* binding */ ghostUrl),\n/* harmony export */   \"guestBookId\": () => (/* binding */ guestBookId),\n/* harmony export */   \"notionApiKey\": () => (/* binding */ notionApiKey),\n/* harmony export */   \"projectId\": () => (/* binding */ projectId),\n/* harmony export */   \"readingId\": () => (/* binding */ readingId),\n/* harmony export */   \"skillId\": () => (/* binding */ skillId)\n/* harmony export */ });\nconst notionApiKey = \"secret_cmuZifHPNQRnF7Jb6w4rjI9iwtDnxSMh4LemqzatItb\";\n// export const baseUrl = \"https://portfolio.mynameishomin.com\";\nconst baseUrl = \"http://localhost:3000\";\nconst ghostUrl = \"https://mynameishomin.com\";\nconst ghostApiKey = \"c816dde08851bb1887f22f14a8\";\nconst guestBookId = \"0173c6cdbe77488784fed915abf7c39a\";\nconst budgetId = \"a97362f8a349423489497e37c20a41bc\";\nconst readingId = \"5b82356cea1643ba81c9ec2d6945f7dc\";\nconst projectId = \"b69dbfc122e645e3b78c4ff90076a97b\";\nconst skillId = \"a57658a432794f7d9dca4fe30f832707\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy92YXJpYWJsZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxlQUNULHFEQUFxRDtBQUN6RCxnRUFBZ0U7QUFDekQsTUFBTUMsVUFBVSx3QkFBd0I7QUFDeEMsTUFBTUMsV0FBVyw0QkFBNEI7QUFDN0MsTUFBTUMsY0FBYyw2QkFBNkI7QUFFakQsTUFBTUMsY0FBYyxtQ0FBbUM7QUFDdkQsTUFBTUMsV0FBVyxtQ0FBbUM7QUFDcEQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsWUFBWSxtQ0FBbUM7QUFDckQsTUFBTUMsVUFBVSxtQ0FBbUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBvcnRmb2xpby8uL3V0aWxzL3ZhcmlhYmxlLnRzPzBkMjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vdGlvbkFwaUtleSA9XG4gICAgXCJzZWNyZXRfY211WmlmSFBOUVJuRjdKYjZ3NHJqSTlpd3REbnhTTWg0TGVtcXphdEl0YlwiO1xuLy8gZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLm15bmFtZWlzaG9taW4uY29tXCI7XG5leHBvcnQgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5leHBvcnQgY29uc3QgZ2hvc3RVcmwgPSBcImh0dHBzOi8vbXluYW1laXNob21pbi5jb21cIjtcbmV4cG9ydCBjb25zdCBnaG9zdEFwaUtleSA9IFwiYzgxNmRkZTA4ODUxYmIxODg3ZjIyZjE0YThcIjtcblxuZXhwb3J0IGNvbnN0IGd1ZXN0Qm9va0lkID0gXCIwMTczYzZjZGJlNzc0ODg3ODRmZWQ5MTVhYmY3YzM5YVwiO1xuZXhwb3J0IGNvbnN0IGJ1ZGdldElkID0gXCJhOTczNjJmOGEzNDk0MjM0ODk0OTdlMzdjMjBhNDFiY1wiO1xuZXhwb3J0IGNvbnN0IHJlYWRpbmdJZCA9IFwiNWI4MjM1NmNlYTE2NDNiYTgxYzllYzJkNjk0NWY3ZGNcIjtcbmV4cG9ydCBjb25zdCBwcm9qZWN0SWQgPSBcImI2OWRiZmMxMjJlNjQ1ZTNiNzhjNGZmOTAwNzZhOTdiXCI7XG5leHBvcnQgY29uc3Qgc2tpbGxJZCA9IFwiYTU3NjU4YTQzMjc5NGY3ZDlkY2E0ZmUzMGY4MzI3MDdcIjtcbiJdLCJuYW1lcyI6WyJub3Rpb25BcGlLZXkiLCJiYXNlVXJsIiwiZ2hvc3RVcmwiLCJnaG9zdEFwaUtleSIsImd1ZXN0Qm9va0lkIiwiYnVkZ2V0SWQiLCJyZWFkaW5nSWQiLCJwcm9qZWN0SWQiLCJza2lsbElkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/variable.ts\n");

/***/ }),

/***/ "./node_modules/react-notion/src/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/react-notion/src/styles.css ***!
  \**************************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-notion":
/*!*******************************!*\
  !*** external "react-notion" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-notion");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/projects/[id].tsx"));
module.exports = __webpack_exports__;

})();