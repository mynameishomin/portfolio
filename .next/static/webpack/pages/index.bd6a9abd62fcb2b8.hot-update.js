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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./container */ \"./components/layout/container.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst Gnb = (param)=>{\n    let { isOpen , setIsOpen  } = param;\n    _s();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const menuVariants = {\n        open: {\n            y: 0,\n            transition: {\n                staggerChildren: 0.07\n            }\n        },\n        closed: {\n            y: -500\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        className: \"flex items-center ml-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.ul, {\n                variants: {\n                    open: {\n                        y: 0\n                    },\n                    closed: {\n                        y: \"-100%\"\n                    }\n                },\n                className: \"absolute inset-x-0 top-full flex flex-col items-center pb-4 pt-10 -mt-8 space-y-4 text-white text-lg font-semibold bg-gray-900 lg:space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/portfolio\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/portfolio\",\n                            children: \"\\uD83D\\uDDA5️ PORTFOLIO\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"2\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/skill\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/skill\",\n                            children: \"\\uD83D\\uDEE0️ SKILL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"3\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/blog\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/blog\",\n                            children: \"\\uD83D\\uDCDD BLOG\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"4\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {\n                        variants: menuVariants,\n                        className: \"\".concat(router.pathname === \"/contact\" ? \"text-[#E8FFE8]\" : \"\", \" hover:underline\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/contact\",\n                            children: \"✉️ CONTACT\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 21\n                        }, undefined)\n                    }, \"5\", false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                type: \"button\",\n                className: \"-mr-4 p-4 text-white lg:hidden z-10\",\n                title: \"메뉴 열기\",\n                whileTap: {\n                    scale: 0.9\n                },\n                whileHover: {\n                    scale: 1.1\n                },\n                variants: {\n                    open: {\n                        rotate: 180,\n                        color: \"#999\"\n                    },\n                    closed: {\n                        rotate: 0,\n                        color: \"#fff\"\n                    }\n                },\n                onClick: ()=>setIsOpen((prev)=>!prev),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    height: \"1em\",\n                    viewBox: \"0 0 448 512\",\n                    fill: \"currentColor\",\n                    className: \"w-6 h-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        d: \"M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z\"\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gray-900\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 103,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Gnb, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Gnb;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s1(()=>{\n    _s1();\n    const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.AnimatePresence, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n            layoutId: router.pathname,\n            initial: {\n                y: -100\n            },\n            animate: {\n                y: 0\n            },\n            exit: {\n                y: -100\n            },\n            transition: {\n                duration: 0.5,\n                delay: 0.5\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative h-16 bg-gray-900 font-black z-50 lg:h-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"fixed inset-x-0 flex items-center h-16 lg:h-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"relative text-xl text-white z-50 lg:text-2xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/\",\n                                    children: \"MY NAME IS HOMIN\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Gnb, {\n                                isOpen: isOpen,\n                                setIsOpen: setIsOpen\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n                lineNumber: 120,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n            lineNumber: 113,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/layout/header.tsx\",\n        lineNumber: 112,\n        columnNumber: 9\n    }, undefined);\n}, \"Y6YAMvWLEQi2oHPTWp3ks3tQlvY=\", false, function() {\n    return [\n        next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n}));\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0MsTUFBTTtnQkFBRWhDLEdBQUcsQ0FBQztZQUFJO1lBQ2hCQyxZQUFZO2dCQUFFZ0MsVUFBVTtnQkFBS0MsT0FBTztZQUFJO3NCQUV4Qyw0RUFBQ0M7Z0JBQU81QixXQUFVOzBCQUNkLDRFQUFDZCxrREFBU0E7b0JBQUNjLFdBQVU7OEJBQ2pCOzswQ0FDSSw4REFBQzZCO2dDQUFHN0IsV0FBVTswQ0FDViw0RUFBQ25CLGtEQUFJQTtvQ0FBQ3dCLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7OzBDQUVuQiw4REFBQ2xCO2dDQUFJQyxRQUFRQTtnQ0FBUUMsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUQ7O1FBeEJtQk4sOERBQVNBOztJQXdCMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnRzeD9iMzY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9kaXN0L2NsaWVudC9yb3V0ZXJcIjtcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4vY29udGFpbmVyXCI7XG5cbmludGVyZmFjZSBHbmJQcm9wcyB7XG4gICAgaXNPcGVuOiBib29sZWFuO1xuICAgIHNldElzT3BlbjogRnVuY3Rpb247XG59XG5cbmNvbnN0IEduYiA9ICh7IGlzT3Blbiwgc2V0SXNPcGVuIH06IEduYlByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBtZW51VmFyaWFudHMgPSB7XG4gICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA3LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VkOiB7XG4gICAgICAgICAgICB5OiAtNTAwLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLm5hdlxuICAgICAgICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICAgICAgICBhbmltYXRlPXtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtbC1hdXRvXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPG1vdGlvbi51bFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgeTogXCItMTAwJVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHRvcC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHBiLTQgcHQtMTAgLW10LTggc3BhY2UteS00IHRleHQtd2hpdGUgdGV4dC1sZyBmb250LXNlbWlib2xkIGJnLWdyYXktOTAwIGxnOnNwYWNlLXgtNFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvcG9ydGZvbGlvXCIgPyBcInRleHQtWyNFOEZGRThdXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgIH0gaG92ZXI6dW5kZXJsaW5lYH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcG9ydGZvbGlvXCI+8J+Wpe+4jyBQT1JURk9MSU88L0xpbms+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvc2tpbGxcIiA/IFwidGV4dC1bI0U4RkZFOF1cIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSBob3Zlcjp1bmRlcmxpbmVgfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9za2lsbFwiPvCfm6DvuI8gU0tJTEw8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCI0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvYmxvZ1wiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Jsb2dcIj7wn5OdIEJMT0c8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24ubGk+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bWVudVZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBrZXk9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gXCIvY29udGFjdFwiID8gXCJ0ZXh0LVsjRThGRkU4XVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICB9IGhvdmVyOnVuZGVybGluZWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj7inInvuI8gQ09OVEFDVDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgIDwvbW90aW9uLnVsPlxuICAgICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCItbXItNCBwLTQgdGV4dC13aGl0ZSBsZzpoaWRkZW4gei0xMFwiXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLrqZTribQg7Je06riwXCJcbiAgICAgICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICAgICAgb3BlbjogeyByb3RhdGU6IDE4MCwgY29sb3I6IFwiIzk5OVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZDogeyByb3RhdGU6IDAsIGNvbG9yOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKChwcmV2OiBib29sZWFuKSA9PiAhcHJldil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMWVtXCJcbiAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0NDggNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNiBoLTZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDk2QzAgNzguMyAxNC4zIDY0IDMyIDY0SDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkgzMkMxNC4zIDEyOCAwIDExMy43IDAgOTZ6TTAgMjU2YzAtMTcuNyAxNC4zLTMyIDMyLTMySDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkgzMmMtMTcuNyAwLTMyLTE0LjMtMzItMzJ6TTQ0OCA0MTZjMCAxNy43LTE0LjMgMzItMzIgMzJIMzJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyczE0LjMtMzIgMzItMzJINDE2YzE3LjcgMCAzMiAxNC4zIDMyIDMyelwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JheS05MDBcIj48L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24ubmF2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBsYXlvdXRJZD17cm91dGVyLnBhdGhuYW1lfVxuICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeTogLTEwMCB9fVxuICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCB9fVxuICAgICAgICAgICAgICAgIGV4aXQ9e3sgeTogLTEwMCB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNSwgZGVsYXk6IDAuNSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC0xNiBiZy1ncmF5LTkwMCBmb250LWJsYWNrIHotNTAgbGc6aC0yMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LXgtMCBmbGV4IGl0ZW1zLWNlbnRlciBoLTE2IGxnOmgtMTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQteGwgdGV4dC13aGl0ZSB6LTUwIGxnOnRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+TVkgTkFNRSBJUyBIT01JTjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHbmIgaXNPcGVuPXtpc09wZW59IHNldElzT3Blbj17c2V0SXNPcGVufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJDb250YWluZXIiLCJHbmIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJyb3V0ZXIiLCJtZW51VmFyaWFudHMiLCJvcGVuIiwieSIsInRyYW5zaXRpb24iLCJzdGFnZ2VyQ2hpbGRyZW4iLCJjbG9zZWQiLCJuYXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImNsYXNzTmFtZSIsInVsIiwidmFyaWFudHMiLCJsaSIsInBhdGhuYW1lIiwiaHJlZiIsImJ1dHRvbiIsInR5cGUiLCJ0aXRsZSIsIndoaWxlVGFwIiwic2NhbGUiLCJ3aGlsZUhvdmVyIiwicm90YXRlIiwiY29sb3IiLCJvbkNsaWNrIiwicHJldiIsInN2ZyIsInhtbG5zIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJwYXRoIiwiZCIsImRpdiIsImxheW91dElkIiwiZXhpdCIsImR1cmF0aW9uIiwiZGVsYXkiLCJoZWFkZXIiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/header.tsx\n"));

/***/ })

});