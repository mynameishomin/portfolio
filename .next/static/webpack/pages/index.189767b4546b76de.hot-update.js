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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Gnb = (param)=>{\n    let { isOpen , setIsOpen  } = param;\n    _s();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const menuVariants = {\n        open: {\n            y: 0,\n            opacity: 1\n        },\n        closed: {\n            y: -20,\n            opacity: 0\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        className: \"flex items-center ml-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                variants: {\n                    open: {\n                        y: 0,\n                        transition: {\n                            type: \"keyframes\",\n                            delayChildren: 0.1,\n                            staggerChildren: 0.05\n                        }\n                    },\n                    closed: {\n                        y: \"-100%\"\n                    }\n                },\n                className: \"absolute inset-x-0 top-full flex flex-col items-center pb-6 pt-10 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/portfolio\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            children: \"\\uD83D\\uDDA5️ PORTFOLIO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"2\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/skill\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/skill\",\n                            children: \"\\uD83D\\uDEE0️ SKILL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"3\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/blog\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/blog\",\n                            children: \"\\uD83D\\uDCDD BLOG\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"4\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/contact\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            children: \"✉️ CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 82,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"5\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                type: \"button\",\n                className: \"-mr-4 p-4 text-white lg:hidden z-10\",\n                title: \"메뉴 열기\",\n                whileTap: {\n                    scale: 0.9\n                },\n                whileHover: {\n                    scale: 1.1\n                },\n                variants: {\n                    open: {\n                        rotate: 180,\n                        color: \"#999\"\n                    },\n                    closed: {\n                        rotate: 0,\n                        color: \"#fff\"\n                    }\n                },\n                onClick: ()=>setIsOpen((prev)=>!prev),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"1em\",\n                    viewBox: \"0 0 448 512\",\n                    fill: \"currentColor\",\n                    className: \"w-6 h-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 97,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 85,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 107,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Gnb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s1(()=>{\n    _s1();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layoutId: router.pathname,\n            initial: {\n                y: -100\n            },\n            animate: {\n                y: 0\n            },\n            exit: {\n                y: -100\n            },\n            transition: {\n                duration: 0.5,\n                delay: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative h-16 bg-gray-900 font-black z-50 lg:h-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"fixed inset-x-0 flex items-center h-16 lg:h-16 bg-gray-900\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"relative text-xl text-white z-50 lg:text-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"MY NAME IS HOMIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {\n                                isOpen: isOpen,\n                                setIsOpen: setIsOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 124,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n            lineNumber: 117,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 116,\n        columnNumber: 9\n    }, undefined);\n}, \"Y6YAMvWLEQi2oHPTWp3ks3tQlvY=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixHQUFHLENBQUM7WUFBSTtZQUNuQkssU0FBUztnQkFBRUwsR0FBRztZQUFFO1lBQ2hCa0MsTUFBTTtnQkFBRWxDLEdBQUcsQ0FBQztZQUFJO1lBQ2hCUyxZQUFZO2dCQUFFMEIsVUFBVTtnQkFBS0MsT0FBTztZQUFJO3NCQUV4Qyw0RUFBQ0M7Z0JBQU8vQixXQUFVOzBCQUNkLDRFQUFDYixrREFBU0E7b0JBQUNhLFdBQVU7OEJBQ2pCOzswQ0FDSSw4REFBQ2dDO2dDQUFHaEMsV0FBVTswQ0FDViw0RUFBQ2xCLGtEQUFJQTtvQ0FBQzJCLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7OzBDQUVuQiw4REFBQ3JCO2dDQUFJQyxRQUFRQTtnQ0FBUUMsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQ7O1FBeEJtQk4sOERBQVNBOztJQXdCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeD9iMzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBHbmJQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIHNldElzT3BlbjogRnVuY3Rpb247XG59XG5cbmNvbnN0IEduYiA9ICh7IGlzT3Blbiwgc2V0SXNPcGVuIH06IEduYlByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBtZW51VmFyaWFudHMgPSB7XG4gICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgICBjbG9zZWQ6IHtcbiAgICAgICAgICAgIHk6IC0yMCxcbiAgICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxtb3Rpb24ubmF2XG4gICAgICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgICAgIGFuaW1hdGU9e2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1sLWF1dG9cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLnVsXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgb3Blbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImtleWZyYW1lc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5Q2hpbGRyZW46IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMDUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IFwiLTEwMCVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtZnVsbCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwYi02IHB0LTEwIC1tdC04IHNwYWNlLXktNCB0ZXh0LXdoaXRlIHRleHQtbGcgZm9udC1zZW1pYm9sZCBiZy1ncmF5LTkwMCBsZzpzcGFjZS14LTRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e21lbnVWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAga2V5PVwiMlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3BvcnRmb2xpb1wiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BvcnRmb2xpb1wiPvCflqXvuI8gUE9SVEZPTElPPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e21lbnVWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAga2V5PVwiM1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL3NraWxsXCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2tpbGxcIj7wn5ug77iPIFNLSUxMPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e21lbnVWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAga2V5PVwiNFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2Jsb2dcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nXCI+8J+TnSBCTE9HPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmxpPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24ubGlcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e21lbnVWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAga2V5PVwiNVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09IFwiL2NvbnRhY3RcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+4pyJ77iPIENPTlRBQ1Q8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICA8L21vdGlvbi51bD5cbiAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiLW1yLTQgcC00IHRleHQtd2hpdGUgbGc6aGlkZGVuIHotMTBcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwi66mU64m0IOyXtOq4sFwiXG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOSB9fVxuICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHsgcm90YXRlOiAxODAsIGNvbG9yOiBcIiM5OTlcIiB9LFxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQ6IHsgcm90YXRlOiAwLCBjb2xvcjogXCIjZmZmXCIgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbigocHJldjogYm9vbGVhbikgPT4gIXByZXYpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjFlbVwiXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTYgaC02XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCA5NkMwIDc4LjMgMTQuMyA2NCAzMiA2NEg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJDMTQuMyAxMjggMCAxMTMuNyAwIDk2ek0wIDI1NmMwLTE3LjcgMTQuMy0zMiAzMi0zMkg0MTZjMTcuNyAwIDMyIDE0LjMgMzIgMzJzLTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyek00NDggNDE2YzAgMTcuNy0xNC4zIDMyLTMyIDMySDMyYy0xNy43IDAtMzItMTQuMy0zMi0zMnMxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktOTAwXCI+PC9kaXY+XG4gICAgICAgIDwvbW90aW9uLm5hdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgbGF5b3V0SWQ9e3JvdXRlci5wYXRobmFtZX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgICAgICAgICBleGl0PXt7IHk6IC0xMDAgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUsIGRlbGF5OiAwLjUgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtMTYgYmctZ3JheS05MDAgZm9udC1ibGFjayB6LTUwIGxnOmgtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC14LTAgZmxleCBpdGVtcy1jZW50ZXIgaC0xNiBsZzpoLTE2IGJnLWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXhsIHRleHQtd2hpdGUgei01MCBsZzp0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPk1ZIE5BTUUgSVMgSE9NSU48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R25iIGlzT3Blbj17aXNPcGVufSBzZXRJc09wZW49e3NldElzT3Blbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiQ29udGFpbmVyIiwiR25iIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwicm91dGVyIiwibWVudVZhcmlhbnRzIiwib3BlbiIsInkiLCJvcGFjaXR5IiwiY2xvc2VkIiwibmF2IiwiaW5pdGlhbCIsImFuaW1hdGUiLCJjbGFzc05hbWUiLCJ1bCIsInZhcmlhbnRzIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwibGkiLCJwYXRobmFtZSIsImhyZWYiLCJidXR0b24iLCJ0aXRsZSIsIndoaWxlVGFwIiwic2NhbGUiLCJ3aGlsZUhvdmVyIiwicm90YXRlIiwiY29sb3IiLCJvbkNsaWNrIiwicHJldiIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImRpdiIsImxheW91dElkIiwiZXhpdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJoZWFkZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});