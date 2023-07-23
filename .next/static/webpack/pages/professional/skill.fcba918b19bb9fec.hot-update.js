"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/professional/skill",{

/***/ "./pages/professional/skill.tsx":
/*!**************************************!*\
  !*** ./pages/professional/skill.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_professional_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/professional/layout */ \"./components/layout/professional/layout.tsx\");\n/* harmony import */ var _components_layout_professional_visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/professional/visual */ \"./components/layout/professional/visual.tsx\");\n/* harmony import */ var _components_layout_professional_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/professional/container */ \"./components/layout/professional/container.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/variable */ \"./utils/variable.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SkillList = ()=>{\n    _s();\n    const [skillList, setSkillList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [selectedSkill, setSelectedSkill] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        name: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_6__.getNotionData)(_utils_variable__WEBPACK_IMPORTED_MODULE_7__.skillId).then((data)=>{\n            setSkillList(data);\n            console.log(data);\n            setLoading(false);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_professional_container__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            transition: {\n                duration: 0.6,\n                delay: 0.9\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.AnimatePresence, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex space-x-4\",\n                        children: loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"block\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"p-2 pb-1 border border-gray-100 bg-white\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-24 h-24 rounded animate-pulse bg-gray-200\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-6 mt-2 pb-0 font-mt text-gray-900 bg-gray-200 animate-pulse rounded font-extrabold\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 37\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 33\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, undefined) : skillList.map((skill)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"rounded shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"block\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-2 pb-1 border border-gray-100 bg-white\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-24 h-24 rounded animate-pulse bg-gray-200\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 49\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"h-6 mt-2 pb-0 font-mt text-gray-900 bg-gray-200 animate-pulse rounded font-extrabold\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 49\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 45\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 41\n                                }, undefined)\n                            }, skill.id, false, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 37\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 21\n                    }, undefined),\n                    selectedSkill.name ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                        className: \"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-2 pb-1 rounded shadow-md border border-gray-100 bg-white\",\n                        layoutId: \"3\",\n                        transition: {\n                            duration: 0,\n                            delay: 0\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-24 h-24 rounded animate-pulse bg-gray-200\"\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-2 pb-0 font-mt text-gray-900 font-extrabold\",\n                                children: \"Javascript\"\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 25\n                    }, undefined) : null\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                lineNumber: 34,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, undefined);\n};\n_s(SkillList, \"ac67P25m4QtZtsV45OucP1ix0Gs=\");\n_c = SkillList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_professional_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_professional_visual__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex mb-8 pt-12 font-mt\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                className: \"w-1/2\",\n                                initial: {\n                                    x: -500,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    x: 0,\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 0.5,\n                                    ease: \"easeInOut\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"mb-6 pt-16 text-5xl font-extrabold text-gray-800\",\n                                        children: \"SKILL\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        className: \"block mb-6 text-2xl text-gray-400\",\n                                        children: [\n                                            \"I can use these skills now \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 60\n                                            }, undefined),\n                                            \"and will use many more in the future.\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-base text-gray-500\",\n                                        children: [\n                                            \"I will learn more in the future,\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"and I am ready to learn whatever it is if you direct it.\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            \"I'm not afraid to learn\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                className: \"flex justify-center w-1/2\",\n                                initial: {\n                                    x: 500,\n                                    opacity: 0\n                                },\n                                animate: {\n                                    x: 0,\n                                    opacity: 1\n                                },\n                                transition: {\n                                    duration: 0.6,\n                                    ease: \"easeInOut\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/images/profile_01.png\",\n                                    alt: \"프로필 사진\",\n                                    width: \"400\",\n                                    height: \"400\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SkillList, {}, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/pages/professional/skill.tsx\",\n        lineNumber: 86,\n        columnNumber: 9\n    }, undefined);\n});\nvar _c;\n$RefreshReg$(_c, \"SkillList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7Z0NBQUU7Z0NBQzlCQyxTQUFTO29DQUFFYSxHQUFHO29DQUFHZCxTQUFTO2dDQUFFO2dDQUM1QkUsWUFBWTtvQ0FDUkMsVUFBVTtvQ0FDVlksTUFBTTtnQ0FDVjswQ0FFQSw0RUFBQ3JDLG1EQUFLQTtvQ0FDRjBDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pDLE9BQU07b0NBQ05DLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS3ZCLDhEQUFDckM7Ozs7Ozs7Ozs7OztBQUlqQixHQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2Zlc3Npb25hbC9za2lsbC50c3g/YWJhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9mZXNzaW9uYWxMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvcHJvZmVzc2lvbmFsL2xheW91dFwiO1xuaW1wb3J0IFZpc3VhbCBmcm9tIFwiQC9jb21wb25lbnRzL2xheW91dC9wcm9mZXNzaW9uYWwvdmlzdWFsXCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L3Byb2Zlc3Npb25hbC9jb250YWluZXJcIjtcbmltcG9ydCB7IGdldE5vdGlvbkRhdGEgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IHNraWxsSWQgfSBmcm9tIFwiQC91dGlscy92YXJpYWJsZVwiO1xuXG5pbnRlcmZhY2UgSVNlbGN0ZWRTa2lsbCB7XG4gICAgbmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBTa2lsbExpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgW3NraWxsTGlzdCwgc2V0U2tpbGxMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbc2VsZWN0ZWRTa2lsbCwgc2V0U2VsZWN0ZWRTa2lsbF0gPSB1c2VTdGF0ZTxJU2VsY3RlZFNraWxsPih7XG4gICAgICAgIG5hbWU6IFwiXCIsXG4gICAgfSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0Tm90aW9uRGF0YShza2lsbElkKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBzZXRTa2lsbExpc3QoZGF0YSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC42LCBkZWxheTogMC45IH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3ctbWQgaG92ZXI6c2hhZG93LXhsIGhvdmVyOi10cmFuc2xhdGUteS0yIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBwYi0xIGJvcmRlciBib3JkZXItZ3JheS0xMDAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog7J6E7IucIOydtOuvuOyngCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkIGFuaW1hdGUtcHVsc2UgYmctZ3JheS0yMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtNiBtdC0yIHBiLTAgZm9udC1tdCB0ZXh0LWdyYXktOTAwIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2Ugcm91bmRlZCBmb250LWV4dHJhYm9sZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsTGlzdC5tYXAoKHNraWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3NraWxsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQgc2hhZG93LW1kIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMiB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcGItMSBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog7J6E7IucIOydtOuvuOyngCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQgYW5pbWF0ZS1wdWxzZSBiZy1ncmF5LTIwMFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTYgbXQtMiBwYi0wIGZvbnQtbXQgdGV4dC1ncmF5LTkwMCBiZy1ncmF5LTIwMCBhbmltYXRlLXB1bHNlIHJvdW5kZWQgZm9udC1leHRyYWJvbGRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRTa2lsbC5uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiB3LTgwIHAtMiBwYi0xIHJvdW5kZWQgc2hhZG93LW1kIGJvcmRlciBib3JkZXItZ3JheS0xMDAgYmctd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dElkPVwiM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMCwgZGVsYXk6IDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyog7J6E7IucIOydtOuvuOyngCAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjQgaC0yNCByb3VuZGVkIGFuaW1hdGUtcHVsc2UgYmctZ3JheS0yMDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMiBwYi0wIGZvbnQtbXQgdGV4dC1ncmF5LTkwMCBmb250LWV4dHJhYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKYXZhc2NyaXB0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFByb2Zlc3Npb25hbExheW91dD5cbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPFZpc3VhbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTggcHQtMTIgZm9udC1tdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEvMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAtNTAwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLTYgcHQtMTYgdGV4dC01eGwgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTS0lMTFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayBtYi02IHRleHQtMnhsIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSSBjYW4gdXNlIHRoZXNlIHNraWxscyBub3cgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCB3aWxsIHVzZSBtYW55IG1vcmUgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJIHdpbGwgbGVhcm4gbW9yZSBpbiB0aGUgZnV0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kIEkgYW0gcmVhZHkgdG8gbGVhcm4gd2hhdGV2ZXIgaXQgaXMgaWYgeW91XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdCBpdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEknbSBub3QgYWZyYWlkIHRvIGxlYXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHctMS8yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7IHg6IDUwMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Byb2ZpbGVfMDEucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwi7ZSE66Gc7ZWEIOyCrOynhFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1Zpc3VhbD5cbiAgICAgICAgICAgICAgICA8U2tpbGxMaXN0IC8+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgPC9Qcm9mZXNzaW9uYWxMYXlvdXQ+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2Zlc3Npb25hbExheW91dCIsIlZpc3VhbCIsIkNvbnRhaW5lciIsImdldE5vdGlvbkRhdGEiLCJza2lsbElkIiwiU2tpbGxMaXN0Iiwic2tpbGxMaXN0Iiwic2V0U2tpbGxMaXN0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWxlY3RlZFNraWxsIiwic2V0U2VsZWN0ZWRTa2lsbCIsIm5hbWUiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJidXR0b24iLCJtYXAiLCJza2lsbCIsImlkIiwibGF5b3V0SWQiLCJoMyIsIngiLCJlYXNlIiwiaDIiLCJzdHJvbmciLCJiciIsInAiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/professional/skill.tsx\n"));

/***/ })

});