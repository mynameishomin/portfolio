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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/store/notion */ \"./utils/store/notion.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst BackGround = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-1/2 bg-cover bg-no-repeat bg-[url('/images/creative_bg.jpg')]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute top-[40%] left-[30%] -translate-y-1/2 -translate-x-1/2 -rotate-6 text-7xl font-han font-medium\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sub\",\n                            children: \"Creative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute -top-6 left-full -translate-x-20 rotate-12 text-main\",\n                            children: \"ME!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-1/2 bg-cover bg-no-repeat\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute top-[40%] right-[50%] -translate-y-1/2 translate-x-1/2 text-6xl font-han underlin text-point\",\n                    children: [\n                        \"Professional\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined),\n                        \"ME.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = BackGround;\nfunction Home() {\n    _s();\n    const notionData = _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.getState().notion;\n    const [creativeWidth, setCreativeWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(300);\n    const [proWidth, setProWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(300);\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const photoWidth = 300;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex w-screen h-screen overflow-hidden\",\n        onMouseMove: (e)=>{\n            const centerX = window.innerWidth / 2;\n            const point = (centerX - e.pageX) / 2;\n            setProWidth(()=>photoWidth + point);\n            setCreativeWidth(()=>photoWidth - point);\n            setX(()=>point / 20);\n        },\n        onMouseLeave: ()=>{\n            setCreativeWidth(photoWidth);\n            setProWidth(photoWidth);\n            setX(0);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackGround, {}, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full\",\n                initial: {\n                    x: 0\n                },\n                animate: {\n                    x\n                },\n                transition: {\n                    type: \"tween\",\n                    ease: \"backOut\",\n                    duration: 1.6\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        animate: {\n                            width: proWidth\n                        },\n                        transition: {\n                            type: \"tween\",\n                            ease: \"backOut\",\n                            duration: 1.6\n                        },\n                        className: \"absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"absolute right-0 h-screen w-screen\",\n                            href: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        animate: {\n                            width: creativeWidth\n                        },\n                        transition: {\n                            type: \"tween\",\n                            ease: \"backOut\",\n                            duration: 1.6\n                        },\n                        className: \"absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"absolute left-0 h-screen w-screen\",\n                            href: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"Y+Y4OfMli46ApabM01pVzmWSz+U=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"BackGround\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDVTtBQUNLO0FBRTVDLE1BQU1JLGFBQWEsSUFBTTtJQUNyQixxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBR0QsV0FBVTs7c0NBQ1YsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFXOzs7Ozs7c0NBQzNCLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU14Riw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFHRCxXQUFVOzt3QkFBd0c7c0NBRWxILDhEQUFDRzs7Ozs7d0JBQUs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0tBckJNTDtBQXVCUyxTQUFTTSxPQUFPOztJQUMzQixNQUFNQyxhQUFhWCxxRUFBb0IsR0FBR2EsTUFBTTtJQUNoRCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBUztJQUMzRCxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDZSxHQUFHQyxLQUFLLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUNuQyxNQUFNaUIsYUFBYTtJQUVuQixxQkFDSSw4REFBQ2Y7UUFDR0MsV0FBVTtRQUNWZSxhQUFhLENBQUNDLElBQU07WUFDaEIsTUFBTUMsVUFBVUMsT0FBT0MsVUFBVSxHQUFHO1lBQ3BDLE1BQU1DLFFBQVEsQ0FBQ0gsVUFBVUQsRUFBRUssS0FBSyxJQUFJO1lBQ3BDVixZQUFZLElBQU1HLGFBQWFNO1lBQy9CWCxpQkFBaUIsSUFBTUssYUFBYU07WUFFcENQLEtBQUssSUFBTU8sUUFBUTtRQUN2QjtRQUNBRSxjQUFjLElBQU07WUFDaEJiLGlCQUFpQks7WUFDakJILFlBQVlHO1lBQ1pELEtBQUs7UUFDVDs7MEJBRUEsOERBQUNmOzs7OzswQkFDRCw4REFBQ0YscURBQVU7Z0JBQ1BJLFdBQVU7Z0JBQ1Z1QixTQUFTO29CQUFFWCxHQUFHO2dCQUFFO2dCQUNoQlksU0FBUztvQkFBRVo7Z0JBQUU7Z0JBQ2JhLFlBQVk7b0JBQUVDLE1BQU07b0JBQVNDLE1BQU07b0JBQVdDLFVBQVU7Z0JBQUk7O2tDQUU1RCw4REFBQ2hDLHFEQUFVO3dCQUNQNEIsU0FBUzs0QkFBRUssT0FBT25CO3dCQUFTO3dCQUMzQmUsWUFBWTs0QkFDUkMsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkMsVUFBVTt3QkFDZDt3QkFDQTVCLFdBQVU7a0NBRVYsNEVBQUNMLGtEQUFJQTs0QkFDREssV0FBVTs0QkFDVjhCLE1BQU07Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDbEMscURBQVU7d0JBQ1A0QixTQUFTOzRCQUFFSyxPQUFPckI7d0JBQWM7d0JBQ2hDaUIsWUFBWTs0QkFDUkMsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkMsVUFBVTt3QkFDZDt3QkFDQTVCLFdBQVU7a0NBRVYsNEVBQUNMLGtEQUFJQTs0QkFDREssV0FBVTs0QkFDVjhCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7R0E5RHVCMUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm90aW9uU3RvcmUgfSBmcm9tIFwiQC91dGlscy9zdG9yZS9ub3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEJhY2tHcm91bmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xLzIgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLVt1cmwoJy9pbWFnZXMvY3JlYXRpdmVfYmcuanBnJyldXCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNDAlXSBsZWZ0LVszMCVdIC10cmFuc2xhdGUteS0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtcm90YXRlLTYgdGV4dC03eGwgZm9udC1oYW4gZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdWJcIj5DcmVhdGl2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC02IGxlZnQtZnVsbCAtdHJhbnNsYXRlLXgtMjAgcm90YXRlLTEyIHRleHQtbWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgTUUhXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xLzIgYmctY292ZXIgYmctbm8tcmVwZWF0XCI+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNDAlXSByaWdodC1bNTAlXSAtdHJhbnNsYXRlLXktMS8yIHRyYW5zbGF0ZS14LTEvMiB0ZXh0LTZ4bCBmb250LWhhbiB1bmRlcmxpbiB0ZXh0LXBvaW50XCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2Zlc3Npb25hbFxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgTUUuXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBub3Rpb25EYXRhID0gbm90aW9uU3RvcmUuZ2V0U3RhdGUoKS5ub3Rpb247XG4gICAgY29uc3QgW2NyZWF0aXZlV2lkdGgsIHNldENyZWF0aXZlV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigzMDApO1xuICAgIGNvbnN0IFtwcm9XaWR0aCwgc2V0UHJvV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigzMDApO1xuICAgIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG4gICAgY29uc3QgcGhvdG9XaWR0aCA9IDMwMDtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggdy1zY3JlZW4gaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNlbnRlclggPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSAoY2VudGVyWCAtIGUucGFnZVgpIC8gMjtcbiAgICAgICAgICAgICAgICBzZXRQcm9XaWR0aCgoKSA9PiBwaG90b1dpZHRoICsgcG9pbnQpO1xuICAgICAgICAgICAgICAgIHNldENyZWF0aXZlV2lkdGgoKCkgPT4gcGhvdG9XaWR0aCAtIHBvaW50KTtcblxuICAgICAgICAgICAgICAgIHNldFgoKCkgPT4gcG9pbnQgLyAyMCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0Q3JlYXRpdmVXaWR0aChwaG90b1dpZHRoKTtcbiAgICAgICAgICAgICAgICBzZXRQcm9XaWR0aChwaG90b1dpZHRoKTtcbiAgICAgICAgICAgICAgICBzZXRYKDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJhY2tHcm91bmQgLz5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LVs2MDBweF0gaC1mdWxsXCJcbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHggfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwidHdlZW5cIiwgZWFzZTogXCJiYWNrT3V0XCIsIGR1cmF0aW9uOiAxLjYgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiBwcm9XaWR0aCB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImJhY2tPdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjYsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCB3LVszMDBweF0gaC1mdWxsIGJnLWxlZnQtYm90dG9tIGJnLVtsZW5ndGg6NjAwcHhfNjAwcHhdIGJnLW5vLXJlcGVhdCBiZy1bdXJsKCcvaW1hZ2VzL3Byb2ZpbGVfMDIucG5nJyldXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIGgtc2NyZWVuIHctc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgICAgICAgICAgICA+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHdpZHRoOiBjcmVhdGl2ZVdpZHRoIH19XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHdlZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiYmFja091dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEuNixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCB3LVszMDBweF0gaC1mdWxsIGJnLXJpZ2h0LWJvdHRvbSBiZy1bbGVuZ3RoOjYwMHB4XzYwMHB4XSBiZy1uby1yZXBlYXQgYmctW3VybCgnL2ltYWdlcy9wcm9maWxlXzAxLnBuZycpXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIGgtc2NyZWVuIHctc2NyZWVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e1wiL1wifVxuICAgICAgICAgICAgICAgICAgICA+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJub3Rpb25TdG9yZSIsIkxpbmsiLCJtb3Rpb24iLCJ1c2VTdGF0ZSIsIkJhY2tHcm91bmQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInNwYW4iLCJiciIsIkhvbWUiLCJub3Rpb25EYXRhIiwiZ2V0U3RhdGUiLCJub3Rpb24iLCJjcmVhdGl2ZVdpZHRoIiwic2V0Q3JlYXRpdmVXaWR0aCIsInByb1dpZHRoIiwic2V0UHJvV2lkdGgiLCJ4Iiwic2V0WCIsInBob3RvV2lkdGgiLCJvbk1vdXNlTW92ZSIsImUiLCJjZW50ZXJYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBvaW50IiwicGFnZVgiLCJvbk1vdXNlTGVhdmUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwid2lkdGgiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});