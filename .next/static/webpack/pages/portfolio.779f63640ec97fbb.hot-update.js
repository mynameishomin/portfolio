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

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Gnb = (param)=>{\n    let { isOpen , setIsOpen  } = param;\n    _s();\n    console.log(isOpen);\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        className: \"flex items-center ml-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                variants: {\n                    open: {\n                        y: 0\n                    },\n                    closed: {\n                        y: \"-100%\"\n                    }\n                },\n                className: \"absolute inset-x-0 top-full flex flex-col items-center pb-4 pt-10 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/portfolio\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            children: \"\\uD83D\\uDDA5️ PORTFOLIO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"2\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/skill\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/skill\",\n                            children: \"\\uD83D\\uDEE0️ SKILL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"3\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/blog\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/blog\",\n                            children: \"\\uD83D\\uDCDD BLOG\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"4\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/contact\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            children: \"✉️ CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"5\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                type: \"button\",\n                className: \"-mr-4 p-4 text-white lg:hidden z-10\",\n                title: \"메뉴 열기\",\n                whileTap: {\n                    scale: 0.9\n                },\n                whileHover: {\n                    scale: 1.1\n                },\n                variants: {\n                    open: {\n                        rotate: 180,\n                        color: \"#999\"\n                    },\n                    closed: {\n                        rotate: 0,\n                        color: \"#fff\"\n                    }\n                },\n                onClick: ()=>setIsOpen((prev)=>!prev),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"1em\",\n                    viewBox: \"0 0 448 512\",\n                    fill: \"currentColor\",\n                    className: \"w-6 h-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Gnb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s1(()=>{\n    _s1();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layoutId: router.pathname,\n            initial: {\n                y: -100\n            },\n            animate: {\n                y: 0\n            },\n            exit: {\n                y: -100\n            },\n            transition: {\n                duration: 0.5,\n                delay: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative h-16 bg-gray-900 font-black z-50 lg:h-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"fixed inset-x-0 flex items-center h-16 lg:h-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"relative text-xl text-white z-50 lg:text-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"MY NAME IS HOMIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {\n                                isOpen: isOpen,\n                                setIsOpen: setIsOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n            lineNumber: 98,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n}, \"Y6YAMvWLEQi2oHPTWp3ks3tQlvY=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZixrREFBSUE7b0NBQUN1QixNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFbkIsOERBQUNqQjtnQ0FBSUMsUUFBUUE7Z0NBQVFDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVEOztRQXhCbUJOLDhEQUFTQTs7SUF3QjFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci50c3g/YjM2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgR25iUHJvcHMge1xuICAgIGlzT3BlbjogYm9vbGVhbjtcbiAgICBzZXRJc09wZW46IEZ1bmN0aW9uO1xufVxuXG5jb25zdCBHbmIgPSAoeyBpc09wZW4sIHNldElzT3BlbiB9OiBHbmJQcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGlzT3Blbik7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLm5hdlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC1hdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi51bFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCItMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHRvcC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTQgcHQtMTAgLW10LTggc3BhY2UteS00IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LXNlbWlib2xkIGJnLWdyYXktOTAwIGxnOnNwYWNlLXgtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9wb3J0Zm9saW9cIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj7wn5al77iPIFBPUlRGT0xJTzwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2tpbGxcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9za2lsbFwiPvCfm6DvuI8gU0tJTEw8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Jsb2dcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+8J+TnSBCTE9HPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPuKcie+4jyBDT05UQUNUPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L21vdGlvbi51bD5cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLW1yLTQgcC00IHRleHQtd2hpdGUgbGc6aGlkZGVuIHotMTBcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi66mU64m0IOyXtOq4sFwiXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHsgcm90YXRlOiAxODAsIGNvbG9yOiBcIiM5OTlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHsgcm90YXRlOiAwLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbigocHJldjogYm9vbGVhbikgPT4gIXByZXYpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCA5NkMwIDc4LjMgMTQuMyA2NCAzMiA2NEg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMkg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek00NDggNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktOTAwXCI+PC9kaXY+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3JvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTYgYmctZ3JheS05MDAgZm9udC1ibGFjayB6LTUwIGxnOmgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC14LTAgZmxleCBpdGVtcy1jZW50ZXIgaC0xNiBsZzpoLTE2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXhsIHRleHQtd2hpdGUgei01MCBsZzp0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk1ZIE5BTUUgSVMgSE9NSU48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R25iIGlzT3Blbj17aXNPcGVufSBzZXRJc09wZW49e3NldElzT3Blbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29udGFpbmVyIiwiR25iIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsIm5hdiIsImluaXRpYWwiLCJhbmltYXRlIiwiY2xhc3NOYW1lIiwidWwiLCJ2YXJpYW50cyIsIm9wZW4iLCJ5IiwiY2xvc2VkIiwibGkiLCJwYXRobmFtZSIsImhyZWYiLCJidXR0b24iLCJ0eXBlIiwidGl0bGUiLCJ3aGlsZVRhcCIsInNjYWxlIiwid2hpbGVIb3ZlciIsInJvdGF0ZSIsImNvbG9yIiwib25DbGljayIsInByZXYiLCJzdmciLCJ4bWxucyIsImhlaWdodCIsInZpZXdCb3giLCJmaWxsIiwicGF0aCIsImQiLCJkaXYiLCJsYXlvdXRJZCIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImhlYWRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});