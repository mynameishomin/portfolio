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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/store/notion */ \"./utils/store/notion.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const notionData = _utils_store_notion__WEBPACK_IMPORTED_MODULE_1__.notionStore.getState().notion;\n    const [width_01, setWidth_01] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(300);\n    const [width_02, setWidth_02] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(300);\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        className: \"relative flex justify-center w-full h-[600px] overflow-hidden\",\n        style: {\n            x\n        },\n        transition: {\n            duration: 1\n        },\n        onMouseMove: (e)=>{\n            const point = e.screenX / 2 - 300;\n            setWidth_02((prev)=>{\n                return 300 - point;\n            });\n            setWidth_01((prev)=>{\n                return 300 + point;\n            });\n            setX((prev)=>{\n                return point / 20;\n            });\n        },\n        onMouseLeave: ()=>{\n            console.log(\"leave\");\n            setWidth_01(300);\n            setWidth_02(300);\n            setX(0);\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            className: \"w-[600px] h-[600px]\",\n            animate: {\n                x\n            },\n            transition: {\n                ease: \"linear\",\n                duration: 2\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    animate: {\n                        width: width_01\n                    },\n                    transition: {\n                        type: \"just\",\n                        duration: 1.6\n                    },\n                    className: \"absolute right-0 w-[300px] h-full bg-right bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]\"\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    animate: {\n                        width: width_02\n                    },\n                    transition: {\n                        type: \"just\",\n                        duration: 1.6\n                    },\n                    className: \"absolute left-0 w-[300px] h-full bg-left bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]\"\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/pages/index.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"IJSY33MaB19WgkjTM0xaU+b2k/Q=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQW1EO0FBTzVCO0FBQ3FCO0FBRTdCLFNBQVNHLE9BQU87O0lBQzNCLE1BQU1DLGFBQWFKLHFFQUFvQixHQUFHTSxNQUFNO0lBQ2hELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNPLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQVM7SUFDakQsTUFBTSxDQUFDUyxHQUFHQyxLQUFLLEdBQUdWLCtDQUFRQSxDQUFTO0lBRW5DLHFCQUNJLDhEQUFDRCxxREFBVTtRQUNQYSxXQUFVO1FBQ1ZDLE9BQU87WUFBRUo7UUFBRTtRQUNYSyxZQUFZO1lBQUVDLFVBQVU7UUFBRTtRQUMxQkMsYUFBYSxDQUFDQyxJQUFNO1lBQ2hCLE1BQU1DLFFBQVFELEVBQUVFLE9BQU8sR0FBRyxJQUFJO1lBQzlCWCxZQUFZLENBQUNZLE9BQWlCO2dCQUMxQixPQUFPLE1BQU1GO1lBQ2pCO1lBQ0FaLFlBQVksQ0FBQ2MsT0FBaUI7Z0JBQzFCLE9BQU8sTUFBTUY7WUFDakI7WUFFQVIsS0FBSyxDQUFDVSxPQUFpQjtnQkFDbkIsT0FBT0YsUUFBUTtZQUNuQjtRQUNKO1FBQ0FHLGNBQWMsSUFBTTtZQUNoQkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pqQixZQUFZO1lBQ1pFLFlBQVk7WUFDWkUsS0FBSztRQUNUO2tCQUVBLDRFQUFDWCxxREFBVTtZQUNQYSxXQUFVO1lBQ1ZZLFNBQVM7Z0JBQUVmO1lBQUU7WUFDYkssWUFBWTtnQkFBRVcsTUFBTTtnQkFBVVYsVUFBVTtZQUFFOzs4QkFFMUMsOERBQUNoQixxREFBVTtvQkFDUHlCLFNBQVM7d0JBQUVFLE9BQU9yQjtvQkFBUztvQkFDM0JTLFlBQVk7d0JBQ1JhLE1BQU07d0JBQ05aLFVBQVU7b0JBQ2Q7b0JBQ0FILFdBQVU7Ozs7Ozs4QkFFZCw4REFBQ2IscURBQVU7b0JBQ1B5QixTQUFTO3dCQUFFRSxPQUFPbkI7b0JBQVM7b0JBQzNCTyxZQUFZO3dCQUNSYSxNQUFNO3dCQUNOWixVQUFVO29CQUNkO29CQUNBSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQW9IOUIsQ0FBQztHQXRLdUJYO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5vdGlvblN0b3JlIH0gZnJvbSBcIkAvdXRpbHMvc3RvcmUvbm90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQge1xuICAgIEFuaW1hdGVQcmVzZW5jZSxcbiAgICBtb3Rpb24sXG4gICAgdXNlTW90aW9uVmFsdWVFdmVudCxcbiAgICB1c2VNb3Rpb25WYWx1ZSxcbn0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBub3Rpb25EYXRhID0gbm90aW9uU3RvcmUuZ2V0U3RhdGUoKS5ub3Rpb247XG4gICAgY29uc3QgW3dpZHRoXzAxLCBzZXRXaWR0aF8wMV0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwMCk7XG4gICAgY29uc3QgW3dpZHRoXzAyLCBzZXRXaWR0aF8wMl0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwMCk7XG4gICAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbCBoLVs2MDBweF0gb3ZlcmZsb3ctaGlkZGVuXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHggfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cbiAgICAgICAgICAgIG9uTW91c2VNb3ZlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gZS5zY3JlZW5YIC8gMiAtIDMwMDtcbiAgICAgICAgICAgICAgICBzZXRXaWR0aF8wMigocHJldjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzMDAgLSBwb2ludDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRXaWR0aF8wMSgocHJldjogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzMDAgKyBwb2ludDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHNldFgoKHByZXY6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9pbnQgLyAyMDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlYXZlXCIpO1xuICAgICAgICAgICAgICAgIHNldFdpZHRoXzAxKDMwMCk7XG4gICAgICAgICAgICAgICAgc2V0V2lkdGhfMDIoMzAwKTtcbiAgICAgICAgICAgICAgICBzZXRYKDApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs2MDBweF0gaC1bNjAwcHhdXCJcbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHggfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGVhc2U6IFwibGluZWFyXCIsIGR1cmF0aW9uOiAyIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB3aWR0aDogd2lkdGhfMDEgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJqdXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHctWzMwMHB4XSBoLWZ1bGwgYmctcmlnaHQgYmctW2xlbmd0aDo2MDBweF82MDBweF0gYmctbm8tcmVwZWF0IGJnLVt1cmwoJy9pbWFnZXMvcHJvZmlsZV8wMS5wbmcnKV1cIlxuICAgICAgICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB3aWR0aDogd2lkdGhfMDIgfX1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJqdXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS42LFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdy1bMzAwcHhdIGgtZnVsbCBiZy1sZWZ0IGJnLVtsZW5ndGg6NjAwcHhfNjAwcHhdIGJnLW5vLXJlcGVhdCBiZy1bdXJsKCcvaW1hZ2VzL3Byb2ZpbGVfMDIucG5nJyldXCJcbiAgICAgICAgICAgICAgICA+PC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIC8vIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgcHgtMTAgZm9udC1oYW4gdGV4dC1wb2ludCBtYXgtbGc6cC0wXCI+XG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgLy8gICAgICAgICA8cCBjbGFzc05hbWU9XCJvcGFjaXR5LTAgbWItMzIgdGV4dC00eGwgbWF4LWxnOm1iLTE2XCI+XG4gICAgICAgIC8vICAgICAgICAgICAgIO2VoOq5jD8g66eQ6rmMP1xuICAgICAgICAvLyAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAg6rOg66+8IOyghOyXkCDsnbzri6gg7ZWY6rOg67O064qUXG4gICAgICAgIC8vICAgICAgICAgICAgIDxiciAvPiDtlonrj5nroKU8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1haW5cIj4gTUFYPC9zcGFuPlxuICAgICAgICAvLyAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgIC8vICAgICAgICAgICAgIOygiOuyvSDrgZ3sl5DshJwg66y07ISt64uk6rOgIOyauOq4sOuztOuLpFxuICAgICAgICAvLyAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAg7LCo652866asIOubsOyWtOuCtOumrOuKlCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW1haW5cIj7sg4HrgqjsnpA8L3NwYW4+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tYWluXCI+MeuFhOywqDwvc3Bhbj4g7Ju57Y2867iU66as7IWUXG4gICAgICAgIC8vICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgLy8gICAgICAgICAgICAg7KCA64qUPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tYWluXCI+IOygle2YuOuvvDwvc3Bhbj4g7J6F64uI64ukLlxuICAgICAgICAvLyAgICAgICAgIDwvcD5cblxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB0ZXh0LTR4bCB0ZXh0LWNlbnRlciBoLTQwXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCB3LWZ1bGwgaC00MCBiZy1tYWluXCI+PC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtMCByb3VuZGVkLWZ1bGwgdy1mdWxsIGgtNDAgYmctcG9pbnRcIj48L2Rpdj5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgLy8gICAgICAgICA8bW90aW9uLnVsIHZhcmlhbnRzPXtwcm9qZWN0c1ZhcmlhbnRzfSBpbml0aWFsPVwib3V0XCIgYW5pbWF0ZT1cImluXCIgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTYgbWF4LWxnOmZsZXgtY29sIG1heC1sZzpzcGFjZS14LTAgbWF4LWxnOnNwYWNlLXktNFwiPlxuICAgICAgICAvLyAgICAgICAgICAgICA8bW90aW9uLmxpIHZhcmlhbnRzPXtwcm9qZWN0VmFyaWFudHN9IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIvcHJvamVjdHNcIn0+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPFRleHRDYXJkPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9jayBtYi0yIHRleHQtNXhsXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aW9uRGF0YS5wcm9qZWN0XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBub3Rpb25EYXRhLnByb2plY3QucmVzdWx0cy5maWx0ZXIoXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9qZWN0OiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5UeXBlLnNlbGVjdFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmFtZSA9PT1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIu2NvOu4lOumrOyLsVwiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5sZW5ndGhcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiLVwifVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xIHRleHQteGxcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2NvOu4lOumrOyLsSDtlITroZzsoJ3tirhcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zYW5zIGZvbnQtc2VtaWJvbGQgdGV4dC1iYXNlXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICDrsJjsnZHtmJUg7Ju5LCDtgazroZzsiqQg67iM65287Jqw7KeVLCDsm7nsoJHqt7zshLHsnYRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIOykgOyImO2VnCDtjbzruJTrpqzsi7HsnYQg7IiY7ZaJ7ZWp64uI64ukLlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Q2FyZD5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e3Byb2plY3RWYXJpYW50c30gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9qZWN0c1wifT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VGV4dENhcmQ+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIG1iLTIgdGV4dC01eGxcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aW9uRGF0YS5wcm9qZWN0XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbm90aW9uRGF0YS5wcm9qZWN0LnJlc3VsdHMuZmlsdGVyKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHJvamVjdDogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllc1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuVHlwZS5zZWxlY3RcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUgPT09XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLtlITroaDtirjsl5Trk5xcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkubGVuZ3RoXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14bFwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7ZSE66Gg7Yq47JeU65OcIO2UhOuhnOygne2KuFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2UhOuhoO2KuOyXlOuTnCDtlITroZzsoJ3tirjrpbwg7IiY7ZaJ7ZWp64uI64ukLlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Q2FyZD5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgIC8vICAgICAgICAgICAgIDxtb3Rpb24ubGkgdmFyaWFudHM9e3Byb2plY3RWYXJpYW50c30gY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtcIi9wcm9qZWN0c1wifT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICA8VGV4dENhcmQ+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrIG1iLTIgdGV4dC01eGxcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3Rpb25EYXRhLnByb2plY3RcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG5vdGlvbkRhdGEucHJvamVjdC5yZXN1bHRzLmZpbHRlcihcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwcm9qZWN0OiBhbnkpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb3BlcnRpZXNcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5UeXBlLnNlbGVjdFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hbWUgPT09IFwi7Yag7J20XCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLmxlbmd0aFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJ9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTEgdGV4dC14bFwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7Yag7J20IO2UhOuhnOygne2KuFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LXNhbnMgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2VcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIO2GoOydtCDtlITroZzsoJ3tirjrpbwg7KeE7ZaJ7ZWp64uI64ukLlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9UZXh0Q2FyZD5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgLy8gICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgIC8vICAgICAgICAgPC9tb3Rpb24udWw+XG4gICAgICAgIC8vICAgICA8L2Rpdj5cbiAgICAgICAgLy8gPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJub3Rpb25TdG9yZSIsIm1vdGlvbiIsInVzZVN0YXRlIiwiSG9tZSIsIm5vdGlvbkRhdGEiLCJnZXRTdGF0ZSIsIm5vdGlvbiIsIndpZHRoXzAxIiwic2V0V2lkdGhfMDEiLCJ3aWR0aF8wMiIsInNldFdpZHRoXzAyIiwieCIsInNldFgiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9uTW91c2VNb3ZlIiwiZSIsInBvaW50Iiwic2NyZWVuWCIsInByZXYiLCJvbk1vdXNlTGVhdmUiLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZSIsImVhc2UiLCJ3aWR0aCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});