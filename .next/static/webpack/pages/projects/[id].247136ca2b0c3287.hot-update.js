"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects/[id]",{

/***/ "./pages/projects/[id].tsx":
/*!*********************************!*\
  !*** ./pages/projects/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ ProjectDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_notion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-notion */ \"./node_modules/react-notion/dist/react-notion.esm.js\");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/pageTitle */ \"./components/pageTitle.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction ProjectDetail(param) {\n    let { notionBlockMap  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const projectName = router.query.name;\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.notionInit)();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageTitle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                children: projectName\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/[id].tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_notion__WEBPACK_IMPORTED_MODULE_2__.NotionRenderer, {\n                blockMap: notionBlockMap\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ProjectDetail, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProjectDetail;\nvar _c;\n$RefreshReg$(_c, \"ProjectDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ007QUFDQztBQUNiO0FBQ2E7O0FBRWhDLFNBQVNLLGNBQWMsS0FJckMsRUFBRTtRQUptQyxFQUNsQ0MsZUFBYyxFQUdqQixHQUpxQzs7SUFLbEMsTUFBTUMsU0FBU1Asc0RBQVNBO0lBQ3hCLE1BQU1RLGNBQWNELE9BQU9FLEtBQUssQ0FBQ0MsSUFBSTtJQUVyQ1AsZ0RBQVNBLENBQUMsSUFBTTtRQUNaQyw0REFBVUE7SUFDZCxHQUFHLEVBQUU7SUFDTCxxQkFDSTs7MEJBQ0ksOERBQUNGLDZEQUFTQTswQkFBRU07Ozs7OzswQkFFWiw4REFBQ1Asd0RBQWNBO2dCQUFDVSxVQUFVTDs7Ozs7Ozs7QUFHdEMsQ0FBQztHQWxCdUJEOztRQUtMTCxrREFBU0E7OztLQUxKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy9baWRdLnRzeD9lZmMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgTm90aW9uUmVuZGVyZXIgfSBmcm9tIFwicmVhY3Qtbm90aW9uXCI7XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZVRpdGxlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbCh7XG4gICAgbm90aW9uQmxvY2tNYXAsXG59OiB7XG4gICAgbm90aW9uQmxvY2tNYXA6IGFueTtcbn0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHJvdXRlci5xdWVyeS5uYW1lIGFzIGFueTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG5vdGlvbkluaXQoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxQYWdlVGl0bGU+e3Byb2plY3ROYW1lfTwvUGFnZVRpdGxlPlxuXG4gICAgICAgICAgICA8Tm90aW9uUmVuZGVyZXIgYmxvY2tNYXA9e25vdGlvbkJsb2NrTWFwfSAvPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IG5vdGlvbkJsb2NrTWFwID0gYXdhaXQgKFxuICAgICAgICBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL25vdGlvbi1hcGkuc3BsaXRiZWUuaW8vdjEvcGFnZS8ke2NvbnRleHQucGFyYW1zLmlkfWBcbiAgICAgICAgKVxuICAgICkuanNvbigpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBub3Rpb25CbG9ja01hcCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIk5vdGlvblJlbmRlcmVyIiwiUGFnZVRpdGxlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlByb2plY3REZXRhaWwiLCJub3Rpb25CbG9ja01hcCIsInJvdXRlciIsInByb2plY3ROYW1lIiwicXVlcnkiLCJuYW1lIiwiYmxvY2tNYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects/[id].tsx\n"));

/***/ })

});