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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/layout */ \"./components/layout/layout.tsx\");\n/* harmony import */ var _components_layout_visual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/visual */ \"./components/layout/visual.tsx\");\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/variable */ \"./utils/variable.ts\");\n/* harmony import */ var _components_portfolioCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/portfolioCard */ \"./components/portfolioCard.tsx\");\n/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/section */ \"./components/section.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst BudgetChart = (param)=>{\n    let { budgetData  } = param;\n    const state = {\n        options: {\n            chart: {\n                id: \"basic-bar\"\n            },\n            xaxis: {\n                categories: [\n                    1991,\n                    1992,\n                    1993,\n                    1994,\n                    1995,\n                    1996,\n                    1997,\n                    1998,\n                    1999\n                ]\n            }\n        },\n        series: [\n            {\n                name: \"series-1\",\n                data: [\n                    30,\n                    40,\n                    45,\n                    50,\n                    49,\n                    60,\n                    70,\n                    91\n                ]\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 30,\n        columnNumber: 12\n    }, undefined);\n};\n_c = BudgetChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(()=>{\n    _s();\n    const [portfolioList, setPortfolioList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [budgetList, setBudgetList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const [creativeWidth, setCreativeWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(300);\n    const [proWidth, setProWidth] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(300);\n    const [x, setX] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const photoWidth = 300;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getNotionData)(_utils_variable__WEBPACK_IMPORTED_MODULE_6__.projectId).then((data)=>{\n            setPortfolioList(data);\n        });\n        (0,_utils_functions__WEBPACK_IMPORTED_MODULE_5__.getNotionData)(_utils_variable__WEBPACK_IMPORTED_MODULE_6__.budgetId).then((data)=>{\n            setBudgetList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_visual__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative flex h-[600px] overflow-hidden\",\n                        onMouseMove: (e)=>{\n                            const centerX = window.innerWidth / 2;\n                            const point = (centerX - e.pageX) / 2;\n                            setProWidth(()=>photoWidth + point);\n                            setCreativeWidth(()=>photoWidth - point);\n                            setX(()=>point / 20);\n                        },\n                        onMouseLeave: ()=>{\n                            setCreativeWidth(photoWidth);\n                            setProWidth(photoWidth);\n                            setX(0);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                            className: \"absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-full\",\n                            initial: {\n                                x: 0\n                            },\n                            animate: {\n                                x\n                            },\n                            transition: {\n                                type: \"tween\",\n                                ease: \"backOut\",\n                                duration: 1.6\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    animate: {\n                                        width: proWidth\n                                    },\n                                    transition: {\n                                        type: \"tween\",\n                                        ease: \"backOut\",\n                                        duration: 1.6\n                                    },\n                                    className: \"absolute left-0 w-[300px] h-full bg-left-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_02.png')]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"absolute right-0 h-screen w-screen\",\n                                        href: \"/creative\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {\n                                    animate: {\n                                        width: creativeWidth\n                                    },\n                                    transition: {\n                                        type: \"tween\",\n                                        ease: \"backOut\",\n                                        duration: 1.6\n                                    },\n                                    className: \"absolute right-0 w-[300px] h-full bg-right-bottom bg-[length:600px_600px] bg-no-repeat bg-[url('/images/profile_01.png')]\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"absolute left-0 h-screen w-screen\",\n                                        href: \"/professional\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 25\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-32\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            title: \"저는 최근에 이런 작업을 했어요\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"grid grid-cols-3 gap-4\",\n                                children: portfolioList.length ? portfolioList.map((portfolio)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolioCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                            portfolioData: portfolio\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                            lineNumber: 126,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    }, portfolio.id, false, {\n                                        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                        lineNumber: 125,\n                                        columnNumber: 41\n                                    }, undefined);\n                                }) : [\n                                    1,\n                                    2,\n                                    3\n                                ].map((item)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_portfolioCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                            lineNumber: 136,\n                                            columnNumber: 45\n                                        }, undefined)\n                                    }, item, false, {\n                                        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 41\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                lineNumber: 120,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 119,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_section__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            title: \"저는 최근에 이런 곳에 소비했어요\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: budgetList.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BudgetChart, {\n                                    budgetData: budgetList\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                                    lineNumber: 144,\n                                    columnNumber: 50\n                                }, undefined) : null\n                            }, void 0, false)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                            lineNumber: 142,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n                    lineNumber: 118,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\00. JUNG_HOMIN\\\\portfolio\\\\pages\\\\index.tsx\",\n        lineNumber: 59,\n        columnNumber: 9\n    }, undefined);\n}, \"q9A9n1fgqFBgBRMRzdkfl6OrVTU=\"));\nvar _c;\n$RefreshReg$(_c, \"BudgetChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUMwQjtBQUVoQjtBQUNTO0FBQ0E7QUFDRTtBQUNLO0FBQ0E7QUFDWjtBQUUzQyxNQUFNVyxjQUFjLFNBQTBDO1FBQXpDLEVBQUNDLFdBQVUsRUFBeUI7SUFDckQsTUFBTUMsUUFBUTtRQUNWQyxTQUFTO1lBQ1BDLE9BQU87Z0JBQ0xDLElBQUk7WUFDTjtZQUNBQyxPQUFPO2dCQUNMQyxZQUFZO29CQUFDO29CQUFNO29CQUFNO29CQUFNO29CQUFNO29CQUFNO29CQUFNO29CQUFNO29CQUFNO2lCQUFLO1lBQ3BFO1FBQ0Y7UUFDQUMsUUFBUTtZQUNOO2dCQUNFQyxNQUFNO2dCQUNOQyxNQUFNO29CQUFDO29CQUFJO29CQUFJO29CQUFJO29CQUFJO29CQUFJO29CQUFJO29CQUFJO2lCQUFHO1lBQ3hDO1NBQ0Q7SUFDSDtJQUVGLHFCQUFPLDhEQUFDQzs7Ozs7QUFRWjtLQTFCTVg7QUE0Qk4sK0RBQWUsT0FBTTs7SUFDakIsTUFBTSxDQUFDWSxlQUFlQyxpQkFBaUIsR0FBR3ZCLCtDQUFRQSxDQUFNLEVBQUU7SUFDMUQsTUFBTSxDQUFDd0IsWUFBWUMsY0FBYyxHQUFHekIsK0NBQVFBLENBQU0sQ0FBQztJQUNuRCxNQUFNLENBQUMwQixlQUFlQyxpQkFBaUIsR0FBRzNCLCtDQUFRQSxDQUFTO0lBQzNELE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFTO0lBQ2pELE1BQU0sQ0FBQzhCLEdBQUdDLEtBQUssR0FBRy9CLCtDQUFRQSxDQUFTO0lBQ25DLE1BQU1nQyxhQUFhO0lBRW5CL0IsZ0RBQVNBLENBQUMsSUFBTTtRQUNaSSwrREFBYUEsQ0FBQ0Msc0RBQVNBLEVBQUUyQixJQUFJLENBQUMsQ0FBQ2IsT0FBUztZQUNwQ0csaUJBQWlCSDtRQUNyQjtRQUVBZiwrREFBYUEsQ0FBQ0UscURBQVFBLEVBQUUwQixJQUFJLENBQUMsQ0FBQ2IsT0FBUztZQUNuQ0ssY0FBY0w7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ2pCLGlFQUFNQTtrQkFDSDs7OEJBQ0ksOERBQUNDLGlFQUFNQTs4QkFDSCw0RUFBQ2lCO3dCQUNHYSxXQUFVO3dCQUNWQyxhQUFhLENBQUNDLElBQU07NEJBQ2hCLE1BQU1DLFVBQVVDLE9BQU9DLFVBQVUsR0FBRzs0QkFDcEMsTUFBTUMsUUFBUSxDQUFDSCxVQUFVRCxFQUFFSyxLQUFLLElBQUk7NEJBQ3BDWixZQUFZLElBQU1HLGFBQWFROzRCQUMvQmIsaUJBQWlCLElBQU1LLGFBQWFROzRCQUNwQ1QsS0FBSyxJQUFNUyxRQUFRO3dCQUN2Qjt3QkFDQUUsY0FBYyxJQUFNOzRCQUNoQmYsaUJBQWlCSzs0QkFDakJILFlBQVlHOzRCQUNaRCxLQUFLO3dCQUNUO2tDQUVBLDRFQUFDN0IscURBQVU7NEJBQ1BnQyxXQUFVOzRCQUNWUyxTQUFTO2dDQUFFYixHQUFHOzRCQUFFOzRCQUNoQmMsU0FBUztnQ0FBRWQ7NEJBQUU7NEJBQ2JlLFlBQVk7Z0NBQ1JDLE1BQU07Z0NBQ05DLE1BQU07Z0NBQ05DLFVBQVU7NEJBQ2Q7OzhDQUVBLDhEQUFDOUMscURBQVU7b0NBQ1AwQyxTQUFTO3dDQUFFSyxPQUFPckI7b0NBQVM7b0NBQzNCaUIsWUFBWTt3Q0FDUkMsTUFBTTt3Q0FDTkMsTUFBTTt3Q0FDTkMsVUFBVTtvQ0FDZDtvQ0FDQWQsV0FBVTs4Q0FFViw0RUFBQ25DLGtEQUFJQTt3Q0FDRG1DLFdBQVU7d0NBQ1ZnQixNQUFNOzs7Ozs7Ozs7Ozs4Q0FHZCw4REFBQ2hELHFEQUFVO29DQUNQMEMsU0FBUzt3Q0FBRUssT0FBT3ZCO29DQUFjO29DQUNoQ21CLFlBQVk7d0NBQ1JDLE1BQU07d0NBQ05DLE1BQU07d0NBQ05DLFVBQVU7b0NBQ2Q7b0NBQ0FkLFdBQVU7OENBRVYsNEVBQUNuQyxrREFBSUE7d0NBQ0RtQyxXQUFVO3dDQUNWZ0IsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU0xQiw4REFBQzdCO29CQUFJYSxXQUFVOztzQ0FDWCw4REFBQ3pCLDJEQUFPQTs0QkFBQzBDLE9BQU07c0NBQ1gsNEVBQUNDO2dDQUFHbEIsV0FBVTswQ0FDVFosY0FBYytCLE1BQU0sR0FFakIvQixjQUFjZ0MsR0FBRyxDQUFDLENBQUNDLFlBQW1CO29DQUNsQyxxQkFDSSw4REFBQ0M7a0RBQ0csNEVBQUNoRCxpRUFBYUE7NENBQ1ZpRCxlQUFlRjs7Ozs7O3VDQUZkQSxVQUFVeEMsRUFBRTs7Ozs7Z0NBTTdCLEtBRUU7b0NBQUM7b0NBQUc7b0NBQUc7aUNBQUUsQ0FBQ3VDLEdBQUcsQ0FBQyxDQUFDSSxPQUFTO29DQUN0QixxQkFDSSw4REFBQ0Y7a0RBQ0csNEVBQUNoRCxpRUFBYUE7Ozs7O3VDQURUa0Q7Ozs7O2dDQUlqQixFQUFFOzs7Ozs7Ozs7OztzQ0FHZCw4REFBQ2pELDJEQUFPQTs0QkFBQzBDLE9BQU87c0NBQ1o7MENBQ0szQixXQUFXNkIsTUFBTSxpQkFBRyw4REFBQzNDO29DQUFZQyxZQUFZYTs7Ozs7Z0RBQWlCLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTy9GLG9DQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGFydCBmcm9tIFwicmVhY3QtYXBleGNoYXJ0c1wiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dFwiO1xyXG5pbXBvcnQgVmlzdWFsIGZyb20gXCJAL2NvbXBvbmVudHMvbGF5b3V0L3Zpc3VhbFwiO1xyXG5pbXBvcnQgeyBnZXROb3Rpb25EYXRhIH0gZnJvbSBcIkAvdXRpbHMvZnVuY3Rpb25zXCI7XHJcbmltcG9ydCB7IHByb2plY3RJZCwgYnVkZ2V0SWQgfSBmcm9tIFwiQC91dGlscy92YXJpYWJsZVwiO1xyXG5pbXBvcnQgUG9ydGZvbGlvQ2FyZCBmcm9tIFwiQC9jb21wb25lbnRzL3BvcnRmb2xpb0NhcmRcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9zZWN0aW9uXCI7XHJcblxyXG5jb25zdCBCdWRnZXRDaGFydCA9ICh7YnVkZ2V0RGF0YX06IHtidWRnZXREYXRhOiBPYmplY3RbXX0pID0+IHtcclxuICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgICAgIGlkOiBcImJhc2ljLWJhclwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeGF4aXM6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcmllczogWzE5OTEsIDE5OTIsIDE5OTMsIDE5OTQsIDE5OTUsIDE5OTYsIDE5OTcsIDE5OTgsIDE5OTldXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJzZXJpZXMtMVwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbMzAsIDQwLCA0NSwgNTAsIDQ5LCA2MCwgNzAsIDkxXVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfTtcclxuXHJcbiAgICByZXR1cm4gPGRpdj5cclxuICAgICAgICB7LyogPENoYXJ0XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3N0YXRlLm9wdGlvbnN9XHJcbiAgICAgICAgICAgIHNlcmllcz17c3RhdGUuc2VyaWVzfVxyXG4gICAgICAgICAgICB0eXBlPVwiYmFyXCJcclxuICAgICAgICAgICAgd2lkdGg9XCI1MDBcIlxyXG4gICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgICBjb25zdCBbcG9ydGZvbGlvTGlzdCwgc2V0UG9ydGZvbGlvTGlzdF0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcclxuICAgIGNvbnN0IFtidWRnZXRMaXN0LCBzZXRCdWRnZXRMaXN0XSA9IHVzZVN0YXRlPGFueT4oe30pO1xyXG4gICAgY29uc3QgW2NyZWF0aXZlV2lkdGgsIHNldENyZWF0aXZlV2lkdGhdID0gdXNlU3RhdGU8bnVtYmVyPigzMDApO1xyXG4gICAgY29uc3QgW3Byb1dpZHRoLCBzZXRQcm9XaWR0aF0gPSB1c2VTdGF0ZTxudW1iZXI+KDMwMCk7XHJcbiAgICBjb25zdCBbeCwgc2V0WF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG4gICAgY29uc3QgcGhvdG9XaWR0aCA9IDMwMDtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldE5vdGlvbkRhdGEocHJvamVjdElkKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFBvcnRmb2xpb0xpc3QoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGdldE5vdGlvbkRhdGEoYnVkZ2V0SWQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0QnVkZ2V0TGlzdChkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8VmlzdWFsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBoLVs2MDBweF0gb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU1vdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZW50ZXJYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSAoY2VudGVyWCAtIGUucGFnZVgpIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByb1dpZHRoKCgpID0+IHBob3RvV2lkdGggKyBwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRDcmVhdGl2ZVdpZHRoKCgpID0+IHBob3RvV2lkdGggLSBwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRYKCgpID0+IHBvaW50IC8gMjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENyZWF0aXZlV2lkdGgocGhvdG9XaWR0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRQcm9XaWR0aChwaG90b1dpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB3LVs2MDBweF0gaC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9e3sgeDogMCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT17eyB4IH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0d2VlblwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiYmFja091dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IHByb1dpZHRoIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiYmFja091dFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMS42LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHctWzMwMHB4XSBoLWZ1bGwgYmctbGVmdC1ib3R0b20gYmctW2xlbmd0aDo2MDBweF82MDBweF0gYmctbm8tcmVwZWF0IGJnLVt1cmwoJy9pbWFnZXMvcHJvZmlsZV8wMi5wbmcnKV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgaC1zY3JlZW4gdy1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcIi9jcmVhdGl2ZVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3sgd2lkdGg6IGNyZWF0aXZlV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidHdlZW5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWFzZTogXCJiYWNrT3V0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxLjYsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSByaWdodC0wIHctWzMwMHB4XSBoLWZ1bGwgYmctcmlnaHQtYm90dG9tIGJnLVtsZW5ndGg6NjAwcHhfNjAwcHhdIGJnLW5vLXJlcGVhdCBiZy1bdXJsKCcvaW1hZ2VzL3Byb2ZpbGVfMDEucG5nJyldXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtcIi9wcm9mZXNzaW9uYWxcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Zpc3VhbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uIHRpdGxlPVwi7KCA64qUIOy1nOq3vOyXkCDsnbTrn7Ag7J6R7JeF7J2EIO2WiOyWtOyalFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3BvcnRmb2xpb0xpc3QubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0Zm9saW9MaXN0Lm1hcCgocG9ydGZvbGlvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3BvcnRmb2xpby5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcnRmb2xpb0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydGZvbGlvRGF0YT17cG9ydGZvbGlvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAyLCAzXS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3J0Zm9saW9DYXJkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbiB0aXRsZT17XCLsoIDripQg7LWc6re87JeQIOydtOufsCDqs7Psl5Ag7IaM67mE7ZaI7Ja07JqUXCJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2J1ZGdldExpc3QubGVuZ3RoID8gPEJ1ZGdldENoYXJ0IGJ1ZGdldERhdGE9e2J1ZGdldExpc3R9IC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm1vdGlvbiIsIkxheW91dCIsIlZpc3VhbCIsImdldE5vdGlvbkRhdGEiLCJwcm9qZWN0SWQiLCJidWRnZXRJZCIsIlBvcnRmb2xpb0NhcmQiLCJTZWN0aW9uIiwiQnVkZ2V0Q2hhcnQiLCJidWRnZXREYXRhIiwic3RhdGUiLCJvcHRpb25zIiwiY2hhcnQiLCJpZCIsInhheGlzIiwiY2F0ZWdvcmllcyIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwiZGl2IiwicG9ydGZvbGlvTGlzdCIsInNldFBvcnRmb2xpb0xpc3QiLCJidWRnZXRMaXN0Iiwic2V0QnVkZ2V0TGlzdCIsImNyZWF0aXZlV2lkdGgiLCJzZXRDcmVhdGl2ZVdpZHRoIiwicHJvV2lkdGgiLCJzZXRQcm9XaWR0aCIsIngiLCJzZXRYIiwicGhvdG9XaWR0aCIsInRoZW4iLCJjbGFzc05hbWUiLCJvbk1vdXNlTW92ZSIsImUiLCJjZW50ZXJYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBvaW50IiwicGFnZVgiLCJvbk1vdXNlTGVhdmUiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwid2lkdGgiLCJocmVmIiwidGl0bGUiLCJ1bCIsImxlbmd0aCIsIm1hcCIsInBvcnRmb2xpbyIsImxpIiwicG9ydGZvbGlvRGF0YSIsIml0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});