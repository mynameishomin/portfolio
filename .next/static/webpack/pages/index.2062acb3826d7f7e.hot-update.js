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

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Gnb = (param)=>{\n    let { isOpen , setIsOpen  } = param;\n    _s();\n    console.log(isOpen);\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        className: \"flex items-center ml-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                variants: {\n                    open: {\n                        y: 0\n                    },\n                    closed: {\n                        y: \"-100%\"\n                    }\n                },\n                className: \"absolute inset-x-0 top-full flex flex-col items-center pb-8 pt-16 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/portfolio\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            children: \"PORTFOLIO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"2\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/skill\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/skill\",\n                            children: \"SKILL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"3\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/blog\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/blog\",\n                            children: \"BLOG\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"4\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/contact\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            children: \"CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"5\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                type: \"button\",\n                className: \"p-4 text-white lg:hidden z-10\",\n                title: \"메뉴 열기\",\n                whileTap: {\n                    scale: 0.9\n                },\n                whileHover: {\n                    scale: 1.1\n                },\n                variants: {\n                    open: {\n                        rotate: 180,\n                        color: \"#999\"\n                    },\n                    closed: {\n                        rotate: 0,\n                        color: \"#fff\"\n                    }\n                },\n                onClick: ()=>setIsOpen((prev)=>!prev),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"1em\",\n                    viewBox: \"0 0 448 512\",\n                    fill: \"currentColor\",\n                    className: \"w-6 h-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 66,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 88,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Gnb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s1(()=>{\n    _s1();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layoutId: router.pathname,\n            initial: {\n                y: -100\n            },\n            animate: {\n                y: 0\n            },\n            exit: {\n                y: -100\n            },\n            transition: {\n                duration: 0.5,\n                delay: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative h-16 bg-gray-900 font-black z-50 lg:h-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \" inset-x-0 flex items-center h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"sticky top-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"relative text-xl text-white z-50 lg:text-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"MY NAME IS HOMIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {\n                                isOpen: isOpen,\n                                setIsOpen: setIsOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 106,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n            lineNumber: 98,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 97,\n        columnNumber: 9\n    }, undefined);\n}, \"Y6YAMvWLEQi2oHPTWp3ks3tQlvY=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdqQyxXQUFVOzBDQUNWLDRFQUFDZixrREFBSUE7b0NBQUN1QixNQUFLOzhDQUFJOzs7Ozs7Ozs7OzswQ0FFbkIsOERBQUNqQjtnQ0FBSUMsUUFBUUE7Z0NBQVFDLFdBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU81RDs7UUF4Qm1CTiw4REFBU0E7O0lBd0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4P2IzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcblxuaW50ZXJmYWNlIEduYlByb3BzIHtcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgc2V0SXNPcGVuOiBGdW5jdGlvbjtcbn1cblxuY29uc3QgR25iID0gKHsgaXNPcGVuLCBzZXRJc09wZW4gfTogR25iUHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc09wZW4pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5uYXZcbiAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbWwtYXV0b1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxtb3Rpb24udWxcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICAgICAgICBvcGVuOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiLTEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi04IHB0LTE2IC1tdC04IHNwYWNlLXktNCB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTkwMCBsZzpzcGFjZS14LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9ydGZvbGlvXCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+UE9SVEZPTElPPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9za2lsbFwiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NraWxsXCI+U0tJTEw8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Jsb2dcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+QkxPRzwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY29udGFjdFwiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5DT05UQUNUPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L21vdGlvbi51bD5cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHRleHQtd2hpdGUgbGc6aGlkZGVuIHotMTBcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi66mU64m0IOyXtOq4sFwiXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHsgcm90YXRlOiAxODAsIGNvbG9yOiBcIiM5OTlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHsgcm90YXRlOiAwLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbigocHJldjogYm9vbGVhbikgPT4gIXByZXYpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCA5NkMwIDc4LjMgMTQuMyA2NCAzMiA2NEg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMkg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek00NDggNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktOTAwXCI+PC9kaXY+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3JvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTYgYmctZ3JheS05MDAgZm9udC1ibGFjayB6LTUwIGxnOmgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCIgaW5zZXQteC0wIGZsZXggaXRlbXMtY2VudGVyIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGlja3kgdG9wLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC14bCB0ZXh0LXdoaXRlIHotNTAgbGc6dGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5NWSBOQU1FIElTIEhPTUlOPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEduYiBpc09wZW49e2lzT3Blbn0gc2V0SXNPcGVuPXtzZXRJc09wZW59IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIm1vdGlvbiIsIkFuaW1hdGVQcmVzZW5jZSIsIkNvbnRhaW5lciIsIkduYiIsImlzT3BlbiIsInNldElzT3BlbiIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImNsYXNzTmFtZSIsInVsIiwidmFyaWFudHMiLCJvcGVuIiwieSIsImNsb3NlZCIsImxpIiwicGF0aG5hbWUiLCJocmVmIiwiYnV0dG9uIiwidHlwZSIsInRpdGxlIiwid2hpbGVUYXAiLCJzY2FsZSIsIndoaWxlSG92ZXIiLCJyb3RhdGUiLCJjb2xvciIsIm9uQ2xpY2siLCJwcmV2Iiwic3ZnIiwieG1sbnMiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInBhdGgiLCJkIiwiZGl2IiwibGF5b3V0SWQiLCJleGl0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXkiLCJoZWFkZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});