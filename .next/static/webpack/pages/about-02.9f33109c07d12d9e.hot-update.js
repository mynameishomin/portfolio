"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about-02",{

/***/ "./components/layout/header.tsx":
/*!**************************************!*\
  !*** ./components/layout/header.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Gnb = (param)=>{\n    let { isOpen , setIsOpen  } = param;\n    _s();\n    console.log(isOpen);\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        className: \"flex ml-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex space-x-4 text-white text-lg font-semibold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/portfolio\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            children: \"PORTFOLIO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"2\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/skill\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/skill\",\n                            children: \"SKILL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"3\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/blog\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/blog\",\n                            children: \"BLOG\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"4\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"\".concat(router.pathname === \"/contact\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            children: \"CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"5\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                type: \"button\",\n                className: \"p-4 text-white lg:hidden\",\n                title: \"메뉴 열기\",\n                whileTap: {\n                    scale: 0.9\n                },\n                whileHover: {\n                    scale: 1.1\n                },\n                variants: {\n                    open: {\n                        rotate: 180,\n                        color: \"#999\"\n                    },\n                    closed: {\n                        rotate: 0,\n                        color: \"#fff\"\n                    }\n                },\n                onClick: ()=>setIsOpen((prev)=>!prev),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"1em\",\n                    viewBox: \"0 0 448 512\",\n                    fill: \"currentColor\",\n                    className: \"w-6 h-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Gnb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s1(()=>{\n    _s1();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layoutId: router.pathname,\n            initial: {\n                y: -100\n            },\n            animate: {\n                y: 0\n            },\n            exit: {\n                y: -100\n            },\n            transition: {\n                duration: 0.5,\n                delay: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"h-20 bg-gray-900 font-black\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"flex items-center h-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"MY NAME IS HOMIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {\n                                isOpen: isOpen,\n                                setIsOpen: setIsOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 94,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n            lineNumber: 87,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n}, \"Y6YAMvWLEQi2oHPTWp3ks3tQlvY=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm1CTiw4REFBU0E7O0lBd0IxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudHN4P2IzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L2Rpc3QvY2xpZW50L3JvdXRlclwiO1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi9jb250YWluZXJcIjtcblxuaW50ZXJmYWNlIEduYlByb3BzIHtcbiAgICBpc09wZW46IGJvb2xlYW47XG4gICAgc2V0SXNPcGVuOiBGdW5jdGlvbjtcbn1cblxuY29uc3QgR25iID0gKHsgaXNPcGVuLCBzZXRJc09wZW4gfTogR25iUHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc09wZW4pO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG1vdGlvbi5uYXZcbiAgICAgICAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBtbC1hdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9wb3J0Zm9saW9cIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3J0Zm9saW9cIj5QT1JURk9MSU88L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAga2V5PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NraWxsXCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2tpbGxcIj5TS0lMTDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYmxvZ1wiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj5CTE9HPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT1cIjVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSBcIi9jb250YWN0XCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPkNPTlRBQ1Q8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtNCB0ZXh0LXdoaXRlIGxnOmhpZGRlblwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLrqZTribQg7Je06riwXCJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogeyByb3RhdGU6IDE4MCwgY29sb3I6IFwiIzk5OVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZDogeyByb3RhdGU6IDAsIGNvbG9yOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKChwcmV2OiBib29sZWFuKSA9PiAhcHJldil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDk2QzAgNzguMyAxNC4zIDY0IDMyIDY0SDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkgzMkMxNC4zIDEyOCAwIDExMy43IDAgOTZ6TTAgMjU2YzAtMTcuNyAxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkgzMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6TTQ0OCA0MTZjMCAxNy43LTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINDE2YzE3LjcgMCAzMiAxNC4zIDMyIDMyelwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3JvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImgtMjAgYmctZ3JheS05MDAgZm9udC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGgtZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk1ZIE5BTUUgSVMgSE9NSU48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R25iIGlzT3Blbj17aXNPcGVufSBzZXRJc09wZW49e3NldElzT3Blbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29udGFpbmVyIiwiR25iIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsIm5hdiIsImluaXRpYWwiLCJhbmltYXRlIiwiY2xhc3NOYW1lIiwidWwiLCJsaSIsInBhdGhuYW1lIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJ0aXRsZSIsIndoaWxlVGFwIiwic2NhbGUiLCJ3aGlsZUhvdmVyIiwidmFyaWFudHMiLCJvcGVuIiwicm90YXRlIiwiY29sb3IiLCJjbG9zZWQiLCJvbkNsaWNrIiwicHJldiIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImRpdiIsImxheW91dElkIiwieSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImhlYWRlciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});