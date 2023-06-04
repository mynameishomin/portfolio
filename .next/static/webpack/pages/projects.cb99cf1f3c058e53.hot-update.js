"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects/index.tsx":
/*!**********************************!*\
  !*** ./pages/projects/index.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project() {\n    _s();\n    const [projectData, setProjectData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            setProjectData(await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)());\n        })();\n    }, []);\n    console.log(projectData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow font-han\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-point w-full mb-8 text-4xl\",\n                children: \"PROJECT\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            projectData.project ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: projectData.project.results.map((project, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                className: \"block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed\",\n                                children: \"2022년\"\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-8 \".concat(index === projectData.project.results.length - 1 ? \"border-none\" : \"border-b-2\", \"  border-dashed border-point\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-3/5 pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"mb-4 text-2xl\",\n                                                children: project.properties.Name.title[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-6 font-sans font-medium\",\n                                                children: project.properties.Summary.rich_text[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"space-x-2\",\n                                                children: project.properties.Skill.multi_select.map((skill)=>{\n                                                    const skillData = projectData.skills.results.filter((item)=>{\n                                                        return item.properties.Name.title[0].plain_text.toLocaleUpperCase() === skill.name.toLocaleUpperCase();\n                                                    })[0];\n                                                    console.log(skillData);\n                                                    const skillIconUrl = skillData.properties.Icon.files[0].file.url;\n                                                    const skillName = skillData.properties.Name.title[0].plain_text;\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"inline-flex flex-col items-center\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                                className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                                                                src: skillIconUrl,\n                                                                width: 50,\n                                                                height: 50,\n                                                                alt: skillName\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                                lineNumber: 73,\n                                                                columnNumber: 65\n                                                            }, this),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                                                                children: skillName\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                                lineNumber: 84,\n                                                                columnNumber: 65\n                                                            }, this)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                        lineNumber: 72,\n                                                        columnNumber: 61\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 45\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-2/5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: {\n                                                pathname: \"/projects/\".concat(project.id),\n                                                query: {\n                                                    notionUrl: project.id\n                                                }\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"\".concat(project.properties.Image.files[0].file.url),\n                                                width: 400,\n                                                height: 400,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 102,\n                                                columnNumber: 49\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                            lineNumber: 94,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 93,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 33\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"t1qTxOacMs3ATAuS+eUf43ayUF4=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFDa0I7QUFDRjtBQUVoQyxTQUFTSyxVQUFVOztJQUM5QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0wsK0NBQVFBLENBQU0sRUFBRTtJQUN0REMsZ0RBQVNBLENBQUMsSUFBTTtRQUNYLFdBQVk7WUFDVEksZUFBZSxNQUFNSCw0REFBVUE7UUFDbkM7SUFDSixHQUFHLEVBQUU7SUFDTEksUUFBUUMsR0FBRyxDQUFDSDtJQUVaLHFCQUNJLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQWtDOzs7Ozs7WUFDL0NMLFlBQVlPLE9BQU8saUJBQ2hCLDhEQUFDQzswQkFDSVIsWUFBWU8sT0FBTyxDQUFDRSxPQUFPLENBQUNDLEdBQUcsQ0FDNUIsQ0FBQ0gsU0FBY0ksUUFBZTtvQkFDMUIscUJBQ0ksOERBQUNDO3dCQUFlUCxXQUFVOzswQ0FDdEIsOERBQUNRO2dDQUFPUixXQUFVOzBDQUEwRTs7Ozs7OzBDQUc1Riw4REFBQ0Q7Z0NBQ0dDLFdBQVcsYUFNVixPQUxHTSxVQUNBWCxZQUFZTyxPQUFPLENBQUNFLE9BQU8sQ0FBQ0ssTUFBTSxHQUM5QixJQUNFLGdCQUNBLFlBQVksRUFDckI7O2tEQUVELDhEQUFDVjt3Q0FBSUMsV0FBVTs7MERBQ1gsOERBQUNVO2dEQUFHVixXQUFVOzBEQUVORSxRQUFRUyxVQUFVLENBQUNDLElBQUksQ0FDbEJDLEtBQUssQ0FBQyxFQUFFLENBQUNDLFVBQVU7Ozs7OzswREFHaEMsOERBQUNDO2dEQUFFZixXQUFVOzBEQUVMRSxRQUFRUyxVQUFVLENBQUNLLE9BQU8sQ0FDckJDLFNBQVMsQ0FBQyxFQUFFLENBQUNILFVBQVU7Ozs7OzswREFHcEMsOERBQUNYO2dEQUFHSCxXQUFVOzBEQUNURSxRQUFRUyxVQUFVLENBQUNPLEtBQUssQ0FBQ0MsWUFBWSxDQUFDZCxHQUFHLENBQ3RDLENBQUNlLFFBQWU7b0RBQ1osTUFBTUMsWUFDRjFCLFlBQVkyQixNQUFNLENBQUNsQixPQUFPLENBQUNtQixNQUFNLENBQzdCLENBQUNDLE9BQWM7d0RBQ1gsT0FDSUEsS0FBS2IsVUFBVSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLFVBQVUsQ0FBQ1csaUJBQWlCLE9BQzFETCxNQUFNTSxJQUFJLENBQUNELGlCQUFpQjtvREFFcEMsRUFDSCxDQUFDLEVBQUU7b0RBQ1I1QixRQUFRQyxHQUFHLENBQUN1QjtvREFDWixNQUFNTSxlQUNGTixVQUFVVixVQUFVLENBQ2ZpQixJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQ2JDLElBQUksQ0FBQ0MsR0FBRztvREFDakIsTUFBTUMsWUFDRlgsVUFBVVYsVUFBVSxDQUNmQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQ2JDLFVBQVU7b0RBRW5CLHFCQUNJLDhEQUFDUDt3REFBR1AsV0FBVTs7MEVBQ1YsOERBQUNWLG1EQUFLQTtnRUFDRlUsV0FBVTtnRUFDVmlDLEtBQ0lOO2dFQUVKTyxPQUFPO2dFQUNQQyxRQUFRO2dFQUNSQyxLQUNJSjs7Ozs7OzBFQUdSLDhEQUFDSztnRUFBS3JDLFdBQVU7MEVBQ1hnQzs7Ozs7Ozs7Ozs7O2dEQUlqQjs7Ozs7Ozs7Ozs7O2tEQUlaLDhEQUFDakM7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNYLGtEQUFJQTs0Q0FDRGlELE1BQU07Z0RBQ0ZDLFVBQVUsYUFBd0IsT0FBWHJDLFFBQVFzQyxFQUFFO2dEQUNqQ0MsT0FBTztvREFDSEMsV0FBV3hDLFFBQVFzQyxFQUFFO2dEQUN6Qjs0Q0FDSjtzREFFQSw0RUFBQ2xELG1EQUFLQTtnREFDRjJDLEtBQUssR0FBOEMsT0FBM0MvQixRQUFRUyxVQUFVLENBQUNyQixLQUFLLENBQUN1QyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7Z0RBQ2xERyxPQUFPO2dEQUNQQyxRQUFRO2dEQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFuRmY5Qjs7Ozs7Z0JBMEZqQjs7Ozs7dUJBR1IsSUFBSTs7Ozs7OztBQTZDcEIsQ0FBQztHQTNKdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzL2luZGV4LnRzeD9mNjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub3Rpb25Jbml0IH0gZnJvbSBcIkAvdXRpbHMvZnVuY3Rpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XG4gICAgY29uc3QgW3Byb2plY3REYXRhLCBzZXRQcm9qZWN0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvamVjdERhdGEoYXdhaXQgbm90aW9uSW5pdCgpKTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdERhdGEpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGZvbnQtaGFuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1wb2ludCB3LWZ1bGwgbWItOCB0ZXh0LTR4bFwiPlBST0pFQ1Q8L2gyPlxuICAgICAgICAgICAge3Byb2plY3REYXRhLnByb2plY3QgPyAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdERhdGEucHJvamVjdC5yZXN1bHRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9qZWN0OiBhbnksIGluZGV4OiBLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJibG9jayB3LTI4IG1yLTEwIHNocmluay0wIHRleHQteGwgYm9yZGVyLXItMiBib3JkZXItcG9pbnQgYm9yZGVyLWRhc2hlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIwMjLrhYRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggcHktOCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGEucHJvamVjdC5yZXN1bHRzLmxlbmd0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImJvcmRlci1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIGJvcmRlci1kYXNoZWQgYm9yZGVyLXBvaW50YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMy81IHByLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb3BlcnRpZXMuTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGl0bGVbMF0ucGxhaW5fdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IGZvbnQtc2FucyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllcy5TdW1tYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yaWNoX3RleHRbMF0ucGxhaW5fdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnByb3BlcnRpZXMuU2tpbGwubXVsdGlfc2VsZWN0Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2tpbGw6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lsbERhdGEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdERhdGEuc2tpbGxzLnJlc3VsdHMuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQudG9Mb2NhbGVVcHBlckNhc2UoKSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsLm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNraWxsRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsSWNvblVybCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5JY29uLmZpbGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lsbE5hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxEYXRhLnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTmFtZS50aXRsZVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEgc2hhZG93LXhsIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxJY29uVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTAuNSBweC0yIHRleHQteHMgYmctcG9pbnQgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtza2lsbE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0yLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rpb25Vcmw6IHByb2plY3QuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvamVjdC5wcm9wZXJ0aWVzLkltYWdlLmZpbGVzWzBdLmZpbGUudXJsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAvLyA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgcmVsYXRpdmUgdy1mdWxsIGJvcmRlci10LTIgYm9yZGVyLWdyYXktOTAwIGxnOnB4LTRcIj5cbiAgICAgICAgLy8gICAgIHtwcm9qZWN0RGF0YS5wcm9qZWN0ID8gKFxuICAgICAgICAvLyAgICAgICAgIDxMYXRlc3RMaXN0XG4gICAgICAgIC8vICAgICAgICAgICAgIGRhdGE9e3Byb2plY3REYXRhLnByb2plY3QucmVzdWx0c31cbiAgICAgICAgLy8gICAgICAgICAgICAgY291bnQ9e0luZmluaXR5fVxuICAgICAgICAvLyAgICAgICAgICAgICBmYWN0b3J5PXsoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2RhdGEuaWR9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgbGc6dy0xLzMgcHktMlwiXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGJnLWdyYXktNjAwIHAtMiBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Bwcm9qZWN0cy8ke2RhdGEuaWR9YH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtkYXRhLnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmx9YH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGZsZXgtY29sIG9wYWNpdHktMCBob3ZlcjpvcGFjaXR5LTEwMCBqdXN0aWZ5LWVuZCBwLTIgdGV4dC1ncmF5LTIwMCBiZy1ncmFkaWVudC10by10IGZyb20tZ3JheS02MDAgdG8tZ3JheS00MDAvWy41XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAtYm90dG9tLTE2IG9wYWNpdHktMCBncm91cC1ob3Zlcjpib3R0b20tMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgZGVsYXktMTUwXCI+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcm9wZXJ0aWVzLk5hbWVcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZVswXS5wbGFpbl90ZXh0XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICApO1xuICAgICAgICAvLyAgICAgICAgICAgICB9fVxuICAgICAgICAvLyAgICAgICAgIC8+XG4gICAgICAgIC8vICAgICApIDogbnVsbH1cbiAgICAgICAgLy8gPC91bD5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlByb2plY3QiLCJwcm9qZWN0RGF0YSIsInNldFByb2plY3REYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicHJvamVjdCIsInVsIiwicmVzdWx0cyIsIm1hcCIsImluZGV4IiwibGkiLCJzdHJvbmciLCJsZW5ndGgiLCJoNCIsInByb3BlcnRpZXMiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicCIsIlN1bW1hcnkiLCJyaWNoX3RleHQiLCJTa2lsbCIsIm11bHRpX3NlbGVjdCIsInNraWxsIiwic2tpbGxEYXRhIiwic2tpbGxzIiwiZmlsdGVyIiwiaXRlbSIsInRvTG9jYWxlVXBwZXJDYXNlIiwibmFtZSIsInNraWxsSWNvblVybCIsIkljb24iLCJmaWxlcyIsImZpbGUiLCJ1cmwiLCJza2lsbE5hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iLCJocmVmIiwicGF0aG5hbWUiLCJpZCIsInF1ZXJ5Iiwibm90aW9uVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/index.tsx\n"));

/***/ })

});