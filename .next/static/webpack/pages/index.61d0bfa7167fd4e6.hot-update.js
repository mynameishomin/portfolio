"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./function/notion.ts":
/*!****************************!*\
  !*** ./function/notion.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBookoData\": function() { return /* binding */ getBookoData; },\n/* harmony export */   \"getPortfolioData\": function() { return /* binding */ getPortfolioData; }\n/* harmony export */ });\nconst getPortfolioData = (notionObj)=>{\n    const title = notionObj.properties.Name.title[0].plain_text;\n    const type = notionObj.properties.Type.select.name;\n    const src = notionObj.properties.Image.files[0].file.url;\n    return {\n        title,\n        type,\n        src\n    };\n};\nconst getBookoData = (notionObj)=>{\n    const title = notionObj.properties.Name.title[0].plain_text;\n    const author = notionObj.properties.Author.rich_text[0].plain_text;\n    const src = notionObj.properties.Image.files[0].file.url;\n    return {\n        title,\n        author,\n        src\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbi9ub3Rpb24udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxNQUFNQSxtQkFBbUIsQ0FBQ0MsWUFBb0M7SUFDakUsTUFBTUMsUUFBUUQsVUFBVUUsVUFBVSxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQyxFQUFFLENBQUNHLFVBQVU7SUFDM0QsTUFBTUMsT0FBT0wsVUFBVUUsVUFBVSxDQUFDSSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSTtJQUNsRCxNQUFNQyxNQUFNVCxVQUFVRSxVQUFVLENBQUNRLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO0lBQ3hELE9BQU87UUFBRVo7UUFBT0k7UUFBTUk7SUFBSTtBQUM5QixFQUFFO0FBRUssTUFBTUssZUFBZSxDQUFDZCxZQUErQjtJQUN4RCxNQUFNQyxRQUFRRCxVQUFVRSxVQUFVLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDLEVBQUUsQ0FBQ0csVUFBVTtJQUMzRCxNQUFNVyxTQUFTZixVQUFVRSxVQUFVLENBQUNjLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsQ0FBQ2IsVUFBVTtJQUNsRSxNQUFNSyxNQUFNVCxVQUFVRSxVQUFVLENBQUNRLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO0lBQ3hELE9BQU87UUFBRVo7UUFBT2M7UUFBUU47SUFBSTtBQUNoQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2Z1bmN0aW9uL25vdGlvbi50cz9kMzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vdGlvblBvcnRmb2xpb1Byb3BzLCBOb3Rpb25Cb29rUHJvcHMgfSBmcm9tIFwiQC90eXBlcy9ub3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IGdldFBvcnRmb2xpb0RhdGEgPSAobm90aW9uT2JqOiBOb3Rpb25Qb3J0Zm9saW9Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gbm90aW9uT2JqLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0O1xuICAgIGNvbnN0IHR5cGUgPSBub3Rpb25PYmoucHJvcGVydGllcy5UeXBlLnNlbGVjdC5uYW1lO1xuICAgIGNvbnN0IHNyYyA9IG5vdGlvbk9iai5wcm9wZXJ0aWVzLkltYWdlLmZpbGVzWzBdLmZpbGUudXJsO1xuICAgIHJldHVybiB7IHRpdGxlLCB0eXBlLCBzcmMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRCb29rb0RhdGEgPSAobm90aW9uT2JqOiBOb3Rpb25Cb29rUHJvcHMpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IG5vdGlvbk9iai5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dDtcbiAgICBjb25zdCBhdXRob3IgPSBub3Rpb25PYmoucHJvcGVydGllcy5BdXRob3IucmljaF90ZXh0WzBdLnBsYWluX3RleHQ7XG4gICAgY29uc3Qgc3JjID0gbm90aW9uT2JqLnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmw7XG4gICAgcmV0dXJuIHsgdGl0bGUsIGF1dGhvciwgc3JjIH07XG59O1xuIl0sIm5hbWVzIjpbImdldFBvcnRmb2xpb0RhdGEiLCJub3Rpb25PYmoiLCJ0aXRsZSIsInByb3BlcnRpZXMiLCJOYW1lIiwicGxhaW5fdGV4dCIsInR5cGUiLCJUeXBlIiwic2VsZWN0IiwibmFtZSIsInNyYyIsIkltYWdlIiwiZmlsZXMiLCJmaWxlIiwidXJsIiwiZ2V0Qm9va29EYXRhIiwiYXV0aG9yIiwiQXV0aG9yIiwicmljaF90ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./function/notion.ts\n"));

/***/ })

});