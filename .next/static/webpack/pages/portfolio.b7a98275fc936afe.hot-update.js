"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/portfolio",{

/***/ "./components/layout/visual.tsx":
/*!**************************************!*\
  !*** ./components/layout/visual.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubVisual\": function() { return /* binding */ SubVisual; },\n/* harmony export */   \"Visual\": function() { return /* binding */ Visual; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\n\n\n\nconst Visual = (param)=>{\n    let { children  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mb-12 shadow-md bg-white overflow-hidden sm:mb-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Visual;\nconst SubVisual = (param)=>{\n    let { title , text , src , alt  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Visual, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col pt-12 sm:flex-row sm:pb-0 sm:pt-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"flex flex-col justify-center max-w-sm mx-auto sm:w-1/2 sm:mx-0 sm:mr-auto sm:max-w-none break-keep\",\n                    initial: {\n                        x: -500,\n                        opacity: 0\n                    },\n                    animate: {\n                        x: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.5,\n                        ease: \"easeInOut\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            className: \"block text-4xl text-center text-gray-900 mb-6 sm:text-left\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-base text-gray-600 sm:block sm:text-left\",\n                            children: text\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    className: \"sm:w-1/2 sm:flex\",\n                    initial: {\n                        x: 500,\n                        opacity: 0\n                    },\n                    animate: {\n                        x: 0,\n                        opacity: 1\n                    },\n                    transition: {\n                        duration: 0.6,\n                        ease: \"easeInOut\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"mx-auto sm:mt-10\",\n                        src: src,\n                        alt: alt,\n                        width: \"350\",\n                        height: \"200\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/visual.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c1 = SubVisual;\nvar _c, _c1;\n$RefreshReg$(_c, \"Visual\");\n$RefreshReg$(_c1, \"SubVisual\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC92aXN1YWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QztBQUNSO0FBQ0s7QUFFN0IsTUFBTUcsU0FBUyxTQUFvRDtRQUFuRCxFQUFFQyxTQUFRLEVBQW9DO0lBQ2pFLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDSixrREFBU0E7c0JBQUVFOzs7Ozs7Ozs7OztBQUd4QixFQUFFO0tBTldEO0FBZU4sTUFBTUksWUFBWSxTQUErQztRQUE5QyxFQUFFQyxNQUFLLEVBQUVDLEtBQUksRUFBRUMsSUFBRyxFQUFFQyxJQUFHLEVBQWtCO0lBQy9ELHFCQUNJLDhEQUFDUjtrQkFDRyw0RUFBQ0U7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNOLHFEQUFVO29CQUNQTSxXQUFVO29CQUNWTSxTQUFTO3dCQUFFQyxHQUFHLENBQUM7d0JBQUtDLFNBQVM7b0JBQUU7b0JBQy9CQyxTQUFTO3dCQUFFRixHQUFHO3dCQUFHQyxTQUFTO29CQUFFO29CQUM1QkUsWUFBWTt3QkFDUkMsVUFBVTt3QkFDVkMsTUFBTTtvQkFDVjs7c0NBRUEsOERBQUNDOzRCQUFPYixXQUFVO3NDQUNiRTs7Ozs7O3NDQUVMLDhEQUFDWTs0QkFBRWQsV0FBVTtzQ0FDUkc7Ozs7Ozs7Ozs7Ozs4QkFHVCw4REFBQ1QscURBQVU7b0JBQ1BNLFdBQVU7b0JBQ1ZNLFNBQVM7d0JBQUVDLEdBQUc7d0JBQUtDLFNBQVM7b0JBQUU7b0JBQzlCQyxTQUFTO3dCQUFFRixHQUFHO3dCQUFHQyxTQUFTO29CQUFFO29CQUM1QkUsWUFBWTt3QkFDUkMsVUFBVTt3QkFDVkMsTUFBTTtvQkFDVjs4QkFFQSw0RUFBQ2pCLG1EQUFLQTt3QkFDRkssV0FBVTt3QkFDVkksS0FBS0E7d0JBQ0xDLEtBQUtBO3dCQUNMVSxPQUFNO3dCQUNOQyxRQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CLEVBQUU7TUF4Q1dmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L3Zpc3VhbC50c3g/OWZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuXG5leHBvcnQgY29uc3QgVmlzdWFsID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3RFbGVtZW50IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTEyIHNoYWRvdy1tZCBiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc206bWItMTZcIj5cbiAgICAgICAgICAgIDxDb250YWluZXI+e2NoaWxkcmVufTwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuaW50ZXJmYWNlIFN1YlZpc3VhbFByb3BzIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICBzcmM6IHN0cmluZztcbiAgICBhbHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFN1YlZpc3VhbCA9ICh7IHRpdGxlLCB0ZXh0LCBzcmMsIGFsdCB9OiBTdWJWaXN1YWxQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxWaXN1YWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHQtMTIgc206ZmxleC1yb3cgc206cGItMCBzbTpwdC02XCI+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtYXgtdy1zbSBteC1hdXRvIHNtOnctMS8yIHNtOm14LTAgc206bXItYXV0byBzbTptYXgtdy1ub25lIGJyZWFrLWtlZXBcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IC01MDAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayB0ZXh0LTR4bCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwIG1iLTYgc206dGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWJhc2UgdGV4dC1ncmF5LTYwMCBzbTpibG9jayBzbTp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtOnctMS8yIHNtOmZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IDUwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHg6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gc206bXQtMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvVmlzdWFsPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkltYWdlIiwiQ29udGFpbmVyIiwiVmlzdWFsIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJTdWJWaXN1YWwiLCJ0aXRsZSIsInRleHQiLCJzcmMiLCJhbHQiLCJpbml0aWFsIiwieCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInN0cm9uZyIsInAiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/visual.tsx\n"));

/***/ })

});