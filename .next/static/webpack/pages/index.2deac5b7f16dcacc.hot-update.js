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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/store/notion */ \"./utils/store/notion.ts\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst BackGround = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-1/2 bg-cover bg-no-repeat bg-[url('/images/creative_bg.jpg')]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute top-[40%] left-[30%] -translate-y-1/2 -translate-x-1/2 -rotate-6 text-7xl font-han font-medium\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sub\",\n                            children: \"Creative\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 11,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"absolute -top-6 left-full -translate-x-20 rotate-12 text-main\",\n                            children: \"ME!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 12,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-1/2 bg-cover bg-no-repeat\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"absolute top-[40%] right-[50%] -translate-y-1/2 translate-x-1/2 text-6xl font-han underlin text-point\",\n                    children: [\n                        \"Professional\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined),\n                        \"ME.\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = BackGround;\nfunction Home() {\n    _s();\n    const notionData = _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.getState().notion;\n    const [creativeWidth, setCreativeWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(300);\n    const [proWidth, setProWidth] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(300);\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const photoWidth = 300;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex w-screen h-screen overflow-hidden\",\n        onMouseMove: (e)=>{\n            const centerX = window.innerWidth / 2;\n            const point = (centerX - e.pageX) / 2;\n            setProWidth(()=>{\n                photoWidth + point;\n            });\n            setCreativeWidth(()=>{\n                return photoWidth - point;\n            });\n            setX(()=>{\n                return point / 20;\n            });\n        },\n        onMouseLeave: ()=>{\n            setCreativeWidth(photoWidth);\n            setProWidth(photoWidth);\n            setX(0);\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackGround, {}, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full\",\n                initial: {\n                    x: 0\n                },\n                animate: {\n                    x\n                },\n                transition: {\n                    type: \"tween\",\n                    ease: \"backOut\",\n                    duration: 1.6\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        animate: {\n                            width: proWidth\n                        },\n                        transition: {\n                            type: \"tween\",\n                            ease: \"backOut\",\n                            duration: 1.6\n                        },\n                        className: \"absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"absolute right-0 h-screen w-screen\",\n                            href: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        animate: {\n                            width: creativeWidth\n                        },\n                        transition: {\n                            type: \"tween\",\n                            ease: \"backOut\",\n                            duration: 1.6\n                        },\n                        className: \"absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"absolute left-0 h-screen w-screen\",\n                            href: \"/\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"Y+Y4OfMli46ApabM01pVzmWSz+U=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"BackGround\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDdEI7QUFDVTtBQUNLO0FBRTVDLE1BQU1JLGFBQWEsSUFBTTtJQUNyQixxQkFDSTs7MEJBQ0ksOERBQUNDO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBR0QsV0FBVTs7c0NBQ1YsOERBQUNFOzRCQUFLRixXQUFVO3NDQUFXOzs7Ozs7c0NBQzNCLDhEQUFDRTs0QkFBS0YsV0FBVTtzQ0FBZ0U7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU14Riw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNDO29CQUFHRCxXQUFVOzt3QkFBd0c7c0NBRWxILDhEQUFDRzs7Ozs7d0JBQUs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCO0tBckJNTDtBQXVCUyxTQUFTTSxPQUFPOztJQUMzQixNQUFNQyxhQUFhWCxxRUFBb0IsR0FBR2EsTUFBTTtJQUNoRCxNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHWiwrQ0FBUUEsQ0FBUztJQUMzRCxNQUFNLENBQUNhLFVBQVVDLFlBQVksR0FBR2QsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDZSxHQUFHQyxLQUFLLEdBQUdoQiwrQ0FBUUEsQ0FBUztJQUNuQyxNQUFNaUIsYUFBYTtJQUVuQixxQkFDSSw4REFBQ2Y7UUFDR0MsV0FBVTtRQUNWZSxhQUFhLENBQUNDLElBQU07WUFDaEIsTUFBTUMsVUFBVUMsT0FBT0MsVUFBVSxHQUFHO1lBQ3BDLE1BQU1DLFFBQVEsQ0FBQ0gsVUFBVUQsRUFBRUssS0FBSyxJQUFJO1lBQ3BDVixZQUFZLElBQU07Z0JBQ2RHLGFBQWFNO1lBQ2pCO1lBQ0FYLGlCQUFpQixJQUFNO2dCQUNuQixPQUFPSyxhQUFhTTtZQUN4QjtZQUVBUCxLQUFLLElBQU07Z0JBQ1AsT0FBT08sUUFBUTtZQUNuQjtRQUNKO1FBQ0FFLGNBQWMsSUFBTTtZQUNoQmIsaUJBQWlCSztZQUNqQkgsWUFBWUc7WUFDWkQsS0FBSztRQUNUOzswQkFFQSw4REFBQ2Y7Ozs7OzBCQUNELDhEQUFDRixxREFBVTtnQkFDUEksV0FBVTtnQkFDVnVCLFNBQVM7b0JBQUVYLEdBQUc7Z0JBQUU7Z0JBQ2hCWSxTQUFTO29CQUFFWjtnQkFBRTtnQkFDYmEsWUFBWTtvQkFBRUMsTUFBTTtvQkFBU0MsTUFBTTtvQkFBV0MsVUFBVTtnQkFBSTs7a0NBRTVELDhEQUFDaEMscURBQVU7d0JBQ1A0QixTQUFTOzRCQUFFSyxPQUFPbkI7d0JBQVM7d0JBQzNCZSxZQUFZOzRCQUNSQyxNQUFNOzRCQUNOQyxNQUFNOzRCQUNOQyxVQUFVO3dCQUNkO3dCQUNBNUIsV0FBVTtrQ0FFViw0RUFBQ0wsa0RBQUlBOzRCQUNESyxXQUFVOzRCQUNWOEIsTUFBTTs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUNsQyxxREFBVTt3QkFDUDRCLFNBQVM7NEJBQUVLLE9BQU9yQjt3QkFBYzt3QkFDaENpQixZQUFZOzRCQUNSQyxNQUFNOzRCQUNOQyxNQUFNOzRCQUNOQyxVQUFVO3dCQUNkO3dCQUNBNUIsV0FBVTtrQ0FFViw0RUFBQ0wsa0RBQUlBOzRCQUNESyxXQUFVOzRCQUNWOEIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQztHQXBFdUIxQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3Rpb25TdG9yZSB9IGZyb20gXCJAL3V0aWxzL3N0b3JlL25vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQmFja0dyb3VuZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEvMiBiZy1jb3ZlciBiZy1uby1yZXBlYXQgYmctW3VybCgnL2ltYWdlcy9jcmVhdGl2ZV9iZy5qcGcnKV1cIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs0MCVdIGxlZnQtWzMwJV0gLXRyYW5zbGF0ZS15LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC1yb3RhdGUtNiB0ZXh0LTd4bCBmb250LWhhbiBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXN1YlwiPkNyZWF0aXZlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTYgbGVmdC1mdWxsIC10cmFuc2xhdGUteC0yMCByb3RhdGUtMTIgdGV4dC1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBNRSFcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEvMiBiZy1jb3ZlciBiZy1uby1yZXBlYXRcIj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVs0MCVdIHJpZ2h0LVs1MCVdIC10cmFuc2xhdGUteS0xLzIgdHJhbnNsYXRlLXgtMS8yIHRleHQtNnhsIGZvbnQtaGFuIHVuZGVybGluIHRleHQtcG9pbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgUHJvZmVzc2lvbmFsXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICBNRS5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IG5vdGlvbkRhdGEgPSBub3Rpb25TdG9yZS5nZXRTdGF0ZSgpLm5vdGlvbjtcbiAgICBjb25zdCBbY3JlYXRpdmVXaWR0aCwgc2V0Q3JlYXRpdmVXaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwMCk7XG4gICAgY29uc3QgW3Byb1dpZHRoLCBzZXRQcm9XaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwMCk7XG4gICAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBwaG90b1dpZHRoID0gMzAwO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LXNjcmVlbiBoLXNjcmVlbiBvdmVyZmxvdy1oaWRkZW5cIlxuICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2VudGVyWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IChjZW50ZXJYIC0gZS5wYWdlWCkgLyAyO1xuICAgICAgICAgICAgICAgIHNldFByb1dpZHRoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9XaWR0aCArIHBvaW50O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldENyZWF0aXZlV2lkdGgoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGhvdG9XaWR0aCAtIHBvaW50O1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgc2V0WCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb2ludCAvIDIwO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldENyZWF0aXZlV2lkdGgocGhvdG9XaWR0aCk7XG4gICAgICAgICAgICAgICAgc2V0UHJvV2lkdGgocGhvdG9XaWR0aCk7XG4gICAgICAgICAgICAgICAgc2V0WCgwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxCYWNrR3JvdW5kIC8+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdy1bNjAwcHhdIGgtZnVsbFwiXG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4IH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInR3ZWVuXCIsIGVhc2U6IFwiYmFja091dFwiLCBkdXJhdGlvbjogMS42IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB3aWR0aDogcHJvV2lkdGggfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJiYWNrT3V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdy1bMzAwcHhdIGgtZnVsbCBiZy1sZWZ0LWJvdHRvbSBiZy1bbGVuZ3RoOjYwMHB4XzYwMHB4XSBiZy1uby1yZXBlYXQgYmctW3VybCgnL2ltYWdlcy9wcm9maWxlXzAyLnBuZycpXVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBoLXNjcmVlbiB3LXNjcmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcIi9cIn1cbiAgICAgICAgICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB3aWR0aDogY3JlYXRpdmVXaWR0aCB9fVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImJhY2tPdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjYsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy1bMzAwcHhdIGgtZnVsbCBiZy1yaWdodC1ib3R0b20gYmctW2xlbmd0aDo2MDBweF82MDBweF0gYmctbm8tcmVwZWF0IGJnLVt1cmwoJy9pbWFnZXMvcHJvZmlsZV8wMS5wbmcnKV1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcIi9cIn1cbiAgICAgICAgICAgICAgICAgICAgPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsibm90aW9uU3RvcmUiLCJMaW5rIiwibW90aW9uIiwidXNlU3RhdGUiLCJCYWNrR3JvdW5kIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJzcGFuIiwiYnIiLCJIb21lIiwibm90aW9uRGF0YSIsImdldFN0YXRlIiwibm90aW9uIiwiY3JlYXRpdmVXaWR0aCIsInNldENyZWF0aXZlV2lkdGgiLCJwcm9XaWR0aCIsInNldFByb1dpZHRoIiwieCIsInNldFgiLCJwaG90b1dpZHRoIiwib25Nb3VzZU1vdmUiLCJlIiwiY2VudGVyWCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJwb2ludCIsInBhZ2VYIiwib25Nb3VzZUxlYXZlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImVhc2UiLCJkdXJhdGlvbiIsIndpZHRoIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});