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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills */ \"./pages/skills.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const [notionData, setNotionData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const notionData = await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)();\n            const sortProject = [\n                ...notionData.project.results\n            ].sort((a, b)=>{\n                return new Date(a.properties.Date.date.start).getTime() - new Date(b.properties.Date.date.start).getTime();\n            });\n            setNotionData({\n                skills: notionData.skills.results,\n                project: sortProject\n            });\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow font-han\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-point w-full mb-8 text-4xl\",\n                children: \"PROJECT\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            notionData.project ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: notionData.project.map((project, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"2022년\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-8 \".concat(index === notionData.project.results.length - 1 ? \"border-none\" : \"border-b-2\", \"  border-dashed border-point\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-3/5 pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"mb-4 text-2xl\",\n                                                children: project.properties.Name.title[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-6 font-sans font-medium\",\n                                                children: project.properties.Summary.rich_text[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"space-x-2\",\n                                                children: project.properties.Skill.multi_select.map((skill, index)=>{\n                                                    const skillData = notionData.skills.results.filter((item)=>{\n                                                        return item.properties.Name.title[0].plain_text.toLocaleUpperCase() === skill.name.toLocaleUpperCase();\n                                                    })[0];\n                                                    const icon = skillData.properties.Icon.files[0].file.url;\n                                                    const name = skillData.properties.Name.title[0].plain_text;\n                                                    const possible = JSON.parse(skillData.properties.Possible.checkbox);\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"inline-flex flex-col items-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skills__WEBPACK_IMPORTED_MODULE_5__.Skill, {\n                                                            name: name,\n                                                            possible: possible,\n                                                            icon: icon\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                            lineNumber: 89,\n                                                            columnNumber: 61\n                                                        }, this)\n                                                    }, index, false, {\n                                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 57\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-2/5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute inset-0 flex justify-center items-center\",\n                                                children: \"이미지 불러오는 중...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"relative\",\n                                                href: {\n                                                    pathname: \"/projects/\".concat(project.id),\n                                                    query: {\n                                                        name: project.properties.Name.title[0].plain_text\n                                                    }\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"\".concat(project.properties.Image.files[0].file.url),\n                                                    width: 400,\n                                                    height: 400,\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                    lineNumber: 117,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 106,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"MVFlqcPYwolLXG/SfQk2sQsu1xA=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0w7d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDTTtnREFBS04sV0FBVTswREFBb0Q7Ozs7OzswREFHcEUsOERBQUN0QixrREFBSUE7Z0RBQ0RzQixXQUFVO2dEQUNWZ0MsTUFBTTtvREFDRkMsVUFBVSxhQUF3QixPQUFYN0MsUUFBUThDLEVBQUU7b0RBQ2pDQyxPQUFPO3dEQUNIZCxNQUFNakMsUUFBUU0sVUFBVSxDQUNuQmUsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUNiQyxVQUFVO29EQUNuQjtnREFDSjswREFFQSw0RUFBQ2hDLG1EQUFLQTtvREFDRnlELEtBQUssR0FBOEMsT0FBM0NoRCxRQUFRTSxVQUFVLENBQUNmLEtBQUssQ0FBQzZDLEtBQUssQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsR0FBRztvREFDbERXLE9BQU87b0RBQ1BDLFFBQVE7b0RBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkF0RmZuQzs7Ozs7Z0JBNkZqQjs7Ozs7dUJBRUosSUFBSTs7Ozs7OztBQUdwQixDQUFDO0dBOUh1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzL2luZGV4LnRzeD9mNjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgS2V5IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBub3Rpb25Jbml0IH0gZnJvbSBcIkAvdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBTa2lsbCB9IGZyb20gXCIuLi9za2lsbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcbiAgICBjb25zdCBbbm90aW9uRGF0YSwgc2V0Tm90aW9uRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uSW5pdCgpO1xuICAgICAgICAgICAgY29uc3Qgc29ydFByb2plY3QgPSBbLi4ubm90aW9uRGF0YS5wcm9qZWN0LnJlc3VsdHNdLnNvcnQoXG4gICAgICAgICAgICAgICAgKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShhLnByb3BlcnRpZXMuRGF0ZS5kYXRlLnN0YXJ0KS5nZXRUaW1lKCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoYi5wcm9wZXJ0aWVzLkRhdGUuZGF0ZS5zdGFydCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHNldE5vdGlvbkRhdGEoe1xuICAgICAgICAgICAgICAgIHNraWxsczogbm90aW9uRGF0YS5za2lsbHMucmVzdWx0cyxcbiAgICAgICAgICAgICAgICBwcm9qZWN0OiBzb3J0UHJvamVjdCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBmb250LWhhblwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcG9pbnQgdy1mdWxsIG1iLTggdGV4dC00eGxcIj5QUk9KRUNUPC9oMj5cbiAgICAgICAgICAgIHtub3Rpb25EYXRhLnByb2plY3QgPyAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7bm90aW9uRGF0YS5wcm9qZWN0Lm1hcCgocHJvamVjdDogYW55LCBpbmRleDogS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgdy0yOCBtci0xMCBzaHJpbmstMCB0ZXh0LXhsIGJvcmRlci1yLTIgYm9yZGVyLXBvaW50IGJvcmRlci1kYXNoZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIwMjLrhYQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHB5LTggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rpb25EYXRhLnByb2plY3QucmVzdWx0cy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gIGJvcmRlci1kYXNoZWQgYm9yZGVyLXBvaW50YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBwci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cIm1iLTQgdGV4dC0yeGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhaW5fdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02IGZvbnQtc2FucyBmb250LW1lZGl1bVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb3BlcnRpZXMuU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yaWNoX3RleHRbMF0ucGxhaW5fdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS14LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3QucHJvcGVydGllcy5Ta2lsbC5tdWx0aV9zZWxlY3QubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNraWxsOiBhbnksIGluZGV4OiBLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBza2lsbERhdGEgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3Rpb25EYXRhLnNraWxscy5yZXN1bHRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsLm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YS5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuSWNvbi5maWxlc1swXS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxEYXRhLnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Qb3NzaWJsZS5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J2066+47KeAIOu2iOufrOyYpOuKlCDspJEuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5OYW1lLnRpdGxlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9qZWN0LnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub3Rpb25Jbml0IiwiU2tpbGwiLCJQcm9qZWN0Iiwibm90aW9uRGF0YSIsInNldE5vdGlvbkRhdGEiLCJzb3J0UHJvamVjdCIsInByb2plY3QiLCJyZXN1bHRzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInByb3BlcnRpZXMiLCJkYXRlIiwic3RhcnQiLCJnZXRUaW1lIiwic2tpbGxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJzcGFuIiwibGVuZ3RoIiwiaDQiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicCIsIlN1bW1hcnkiLCJyaWNoX3RleHQiLCJtdWx0aV9zZWxlY3QiLCJza2lsbCIsInNraWxsRGF0YSIsImZpbHRlciIsIml0ZW0iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsIm5hbWUiLCJpY29uIiwiSWNvbiIsImZpbGVzIiwiZmlsZSIsInVybCIsInBvc3NpYmxlIiwiSlNPTiIsInBhcnNlIiwiUG9zc2libGUiLCJjaGVja2JveCIsImhyZWYiLCJwYXRobmFtZSIsImlkIiwicXVlcnkiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/index.tsx\n"));

/***/ })

});