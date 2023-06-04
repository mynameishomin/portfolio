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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills */ \"./pages/skills.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [skills, setSkills] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const notionData = await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)();\n            const sortProject = [\n                ...notionData.project.results\n            ].sort((a, b)=>{\n                return new Date(a.properties.Date.date.start).getTime() - new Date(b.properties.Date.date.start).getTime();\n            });\n            setProjects(sortProject.reverse());\n            setSkills(notionData.skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow font-han\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-point w-full mb-8 text-4xl\",\n                children: \"PROJECT\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            projects.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: projects.map((project, index)=>{\n                    const projectDate = new Date(project.properties.Date.date.start);\n                    const nextProjectDate = new Date(projects[index++].properties.Date.date.start);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        projectDate.getFullYear(),\n                                        \"년\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-8 \".concat(index === projects.length - 1 ? \"border-none\" : \"border-b-2\", \"  border-dashed border-point\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-3/5 pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"mb-4 text-2xl\",\n                                                children: project.properties.Name.title[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-6 font-sans font-medium\",\n                                                children: project.properties.Summary.rich_text[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"space-x-2\",\n                                                children: project.properties.Skill.multi_select.map((skill, index)=>{\n                                                    const skillData = skills.filter((item)=>{\n                                                        return item.properties.Name.title[0].plain_text.toLocaleUpperCase() === skill.name.toLocaleUpperCase();\n                                                    })[0];\n                                                    const icon = skillData.properties.Icon.files[0].file.url;\n                                                    const name = skillData.properties.Name.title[0].plain_text;\n                                                    const possible = JSON.parse(skillData.properties.Possible.checkbox);\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"inline-flex flex-col items-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skills__WEBPACK_IMPORTED_MODULE_5__.Skill, {\n                                                            name: name,\n                                                            possible: possible,\n                                                            icon: icon\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                            lineNumber: 95,\n                                                            columnNumber: 61\n                                                        }, this)\n                                                    }, index, false, {\n                                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                        lineNumber: 91,\n                                                        columnNumber: 57\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-2/5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute inset-0 flex justify-center items-center\",\n                                                children: \"이미지 불러오는 중...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 41\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"relative\",\n                                                href: {\n                                                    pathname: \"/projects/\".concat(project.id),\n                                                    query: {\n                                                        name: project.properties.Name.title[0].plain_text\n                                                    }\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"\".concat(project.properties.Image.files[0].file.url),\n                                                    width: 400,\n                                                    height: 400,\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                    lineNumber: 123,\n                                                    columnNumber: 45\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 41\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 29\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"iQ/cxlhsLJjAaXr/+k2ZwGrkYxc=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUN2QlosVUFBVTFCLFVBQVUsQ0FDZnVDLFFBQVEsQ0FBQ0MsUUFBUTtvREFFMUIscUJBQ0ksOERBQUMxQjt3REFDR1IsV0FBVTtrRUFHViw0RUFBQ3BCLDBDQUFLQTs0REFDRjRDLE1BQU1BOzREQUNOTSxVQUNJQTs0REFFSkwsTUFBTUE7Ozs7Ozt1REFQTHBCOzs7OztnREFXakI7Ozs7Ozs7Ozs7OztrREFJWiw4REFBQ047d0NBQUlDLFdBQVU7OzBEQUNYLDhEQUFDUztnREFBS1QsV0FBVTswREFBb0Q7Ozs7OzswREFHcEUsOERBQUN6QixrREFBSUE7Z0RBQ0R5QixXQUFVO2dEQUNWbUMsTUFBTTtvREFDRkMsVUFBVSxhQUF3QixPQUFYaEQsUUFBUWlELEVBQUU7b0RBQ2pDQyxPQUFPO3dEQUNIZCxNQUFNcEMsUUFBUU0sVUFBVSxDQUNuQmtCLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FDYkMsVUFBVTtvREFDbkI7Z0RBQ0o7MERBRUEsNEVBQUN0QyxtREFBS0E7b0RBQ0YrRCxLQUFLLEdBQThDLE9BQTNDbkQsUUFBUU0sVUFBVSxDQUFDbEIsS0FBSyxDQUFDbUQsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO29EQUNsRFcsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQXJGZnJDOzs7OztnQkE0RmpCOzs7Ozt1QkFFSixJQUFJOzs7Ozs7O0FBR3BCLENBQUM7R0FwSXVCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4P2Y2MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4uL3NraWxsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGU8T2JqZWN0W10+KFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub3Rpb25EYXRhID0gYXdhaXQgbm90aW9uSW5pdCgpO1xuICAgICAgICAgICAgY29uc3Qgc29ydFByb2plY3QgPSBbLi4ubm90aW9uRGF0YS5wcm9qZWN0LnJlc3VsdHNdLnNvcnQoXG4gICAgICAgICAgICAgICAgKGE6IGFueSwgYjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShhLnByb3BlcnRpZXMuRGF0ZS5kYXRlLnN0YXJ0KS5nZXRUaW1lKCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoYi5wcm9wZXJ0aWVzLkRhdGUuZGF0ZS5zdGFydCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgc2V0UHJvamVjdHMoc29ydFByb2plY3QucmV2ZXJzZSgpKTtcbiAgICAgICAgICAgIHNldFNraWxscyhub3Rpb25EYXRhLnNraWxscy5yZXN1bHRzKTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgZm9udC1oYW5cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXBvaW50IHctZnVsbCBtYi04IHRleHQtNHhsXCI+UFJPSkVDVDwvaDI+XG4gICAgICAgICAgICB7cHJvamVjdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdDogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllcy5EYXRlLmRhdGUuc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRQcm9qZWN0RGF0ZSA9IG5ldyBEYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzW2luZGV4KytdLnByb3BlcnRpZXMuRGF0ZS5kYXRlLnN0YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctMjggbXItMTAgc2hyaW5rLTAgdGV4dC14bCBib3JkZXItci0yIGJvcmRlci1wb2ludCBib3JkZXItZGFzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvamVjdERhdGUuZ2V0RnVsbFllYXIoKX3rhYQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHB5LTggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gcHJvamVjdHMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYm9yZGVyLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBib3JkZXItZGFzaGVkIGJvcmRlci1wb2ludGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgcHItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBmb250LXNhbnMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzLlN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmljaF90ZXh0WzBdLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnByb3BlcnRpZXMuU2tpbGwubXVsdGlfc2VsZWN0Lm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChza2lsbDogYW55LCBpbmRleDogS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxEYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsLm5hbWUudG9Mb2NhbGVVcHBlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YS5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuSWNvbi5maWxlc1swXS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3NpYmxlID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxEYXRhLnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5Qb3NzaWJsZS5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTIvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg7J2066+47KeAIOu2iOufrOyYpOuKlCDspJEuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5OYW1lLnRpdGxlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9qZWN0LnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub3Rpb25Jbml0IiwiU2tpbGwiLCJQcm9qZWN0IiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInNraWxscyIsInNldFNraWxscyIsIm5vdGlvbkRhdGEiLCJzb3J0UHJvamVjdCIsInByb2plY3QiLCJyZXN1bHRzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsInByb3BlcnRpZXMiLCJkYXRlIiwic3RhcnQiLCJnZXRUaW1lIiwicmV2ZXJzZSIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJpbmRleCIsInByb2plY3REYXRlIiwibmV4dFByb2plY3REYXRlIiwibGkiLCJzcGFuIiwiZ2V0RnVsbFllYXIiLCJoNCIsIk5hbWUiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJwIiwiU3VtbWFyeSIsInJpY2hfdGV4dCIsIm11bHRpX3NlbGVjdCIsInNraWxsIiwic2tpbGxEYXRhIiwiZmlsdGVyIiwiaXRlbSIsInRvTG9jYWxlVXBwZXJDYXNlIiwibmFtZSIsImljb24iLCJJY29uIiwiZmlsZXMiLCJmaWxlIiwidXJsIiwicG9zc2libGUiLCJKU09OIiwicGFyc2UiLCJQb3NzaWJsZSIsImNoZWNrYm94IiwiaHJlZiIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/index.tsx\n"));

/***/ })

});