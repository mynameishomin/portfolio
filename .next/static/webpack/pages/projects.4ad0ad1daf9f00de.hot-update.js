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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills */ \"./pages/skills.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [skills, setSkills] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    // const filterProject = (category: String) => {\n    //     const result = projects.filter((project) => {\n    //         return project.properties.Type.select.name === category;\n    //     });\n    //     return result;\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const notionData = await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)();\n            const sortProject = [\n                ...notionData.project.results\n            ].sort((a, b)=>{\n                return new Date(a.properties.Date.date.start).getTime() - new Date(b.properties.Date.date.start).getTime();\n            });\n            setProjects(sortProject.reverse());\n            setSkills(notionData.skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow font-han\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-point w-full mb-8 text-4xl\",\n                children: \"PROJECT\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            projects.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: projects.filter((project)=>{\n                    if (filter === \"\") return true;\n                    return project.properties.Type.select.name === filter;\n                }).map((project, index)=>{\n                    const date = new Date(project.properties.Date.date.start);\n                    let isYear = false;\n                    if (index === 0) {\n                        isYear = true;\n                    } else if (!(new Date(projects[index - 1].properties.Date.date.start).getFullYear() === date.getFullYear())) {\n                        isYear = true;\n                    }\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed\",\n                                children: isYear ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        date.getFullYear(),\n                                        \"년\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 45\n                                }, this) : null\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-8 \".concat(index === projects.length - 1 ? \"border-none\" : \"border-b-2\", \"  border-dashed border-point\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-3/5 pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"mb-4 text-2xl\",\n                                                children: project.properties.Name.title[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-6 font-sans font-medium\",\n                                                children: project.properties.Summary.rich_text[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 87,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"mb-4 space-x-2\",\n                                                children: project.properties.Skill.multi_select.map((skill, index)=>{\n                                                    const skillData = skills.filter((item)=>{\n                                                        return item.properties.Name.title[0].plain_text.toLocaleUpperCase() === skill.name.toLocaleUpperCase();\n                                                    })[0];\n                                                    const icon = skillData.properties.Icon.files[0].file.url;\n                                                    const name = skillData.properties.Name.title[0].plain_text;\n                                                    const possible = JSON.parse(skillData.properties.Possible.checkbox);\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"inline-flex flex-col items-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skills__WEBPACK_IMPORTED_MODULE_5__.Skill, {\n                                                            name: name,\n                                                            possible: possible,\n                                                            icon: icon\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                            lineNumber: 128,\n                                                            columnNumber: 65\n                                                        }, this)\n                                                    }, index, false, {\n                                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                        lineNumber: 124,\n                                                        columnNumber: 61\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"pt-2 pb-1 px-3 bg-point text-white rounded\",\n                                                href: {\n                                                    pathname: \"/projects/\".concat(project.id),\n                                                    query: {\n                                                        name: project.properties.Name.title[0].plain_text\n                                                    }\n                                                },\n                                                children: \"자세히보기\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 140,\n                                                columnNumber: 45\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative w-2/5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute flex justify-center items-center\",\n                                                children: \"이미지 불러오는 중...\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 155,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                                className: \"relative\",\n                                                href: {\n                                                    pathname: \"/projects/\".concat(project.id),\n                                                    query: {\n                                                        name: project.properties.Name.title[0].plain_text\n                                                    }\n                                                },\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"\".concat(project.properties.Image.files[0].file.url),\n                                                    width: 400,\n                                                    height: 400,\n                                                    alt: \"\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                    lineNumber: 169,\n                                                    columnNumber: 49\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 158,\n                                                columnNumber: 45\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 154,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 33\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"4Jr+aB0Fr7VD4oTo9Ex9L//ZBi0=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQXdCLE9BQVhoRCxRQUFRaUQsRUFBRTtvREFDakNDLE9BQU87d0RBQ0hoQyxNQUFNbEIsUUFBUU0sVUFBVSxDQUNuQm9CLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FDYkMsVUFBVTtvREFDbkI7Z0RBQ0o7MERBRUEsNEVBQUMxQyxtREFBS0E7b0RBQ0ZpRSxLQUFLLEdBQThDLE9BQTNDbkQsUUFBUU0sVUFBVSxDQUFDcEIsS0FBSyxDQUFDcUQsS0FBSyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHO29EQUNsRFcsT0FBTztvREFDUEMsUUFBUTtvREFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFHZmxDOzs7OztnQkFpSGpCOzs7Ozt1QkFFUixJQUFJOzs7Ozs7O0FBR3BCLENBQUM7R0FsTHVCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4P2Y2MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4uL3NraWxsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgICBjb25zdCBbc2tpbGxzLCBzZXRTa2lsbHNdID0gdXNlU3RhdGU8T2JqZWN0W10+KFtdKTtcbiAgICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGU8U3RyaW5nPihcIlwiKTtcblxuICAgIC8vIGNvbnN0IGZpbHRlclByb2plY3QgPSAoY2F0ZWdvcnk6IFN0cmluZykgPT4ge1xuICAgIC8vICAgICBjb25zdCByZXN1bHQgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcbiAgICAvLyAgICAgICAgIHJldHVybiBwcm9qZWN0LnByb3BlcnRpZXMuVHlwZS5zZWxlY3QubmFtZSA9PT0gY2F0ZWdvcnk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByZXR1cm4gcmVzdWx0O1xuICAgIC8vIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vdGlvbkRhdGEgPSBhd2FpdCBub3Rpb25Jbml0KCk7XG4gICAgICAgICAgICBjb25zdCBzb3J0UHJvamVjdCA9IFsuLi5ub3Rpb25EYXRhLnByb2plY3QucmVzdWx0c10uc29ydChcbiAgICAgICAgICAgICAgICAoYTogYW55LCBiOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKGEucHJvcGVydGllcy5EYXRlLmRhdGUuc3RhcnQpLmdldFRpbWUoKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShiLnByb3BlcnRpZXMuRGF0ZS5kYXRlLnN0YXJ0KS5nZXRUaW1lKClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBzZXRQcm9qZWN0cyhzb3J0UHJvamVjdC5yZXZlcnNlKCkpO1xuICAgICAgICAgICAgc2V0U2tpbGxzKG5vdGlvbkRhdGEuc2tpbGxzLnJlc3VsdHMpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBmb250LWhhblwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcG9pbnQgdy1mdWxsIG1iLTggdGV4dC00eGxcIj5QUk9KRUNUPC9oMj5cbiAgICAgICAgICAgIHtwcm9qZWN0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHByb2plY3Q6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgPT09IFwiXCIpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllcy5UeXBlLnNlbGVjdC5uYW1lID09PSBmaWx0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHByb2plY3Q6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzLkRhdGUuZGF0ZS5zdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGlzWWVhciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1llYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5wcm9wZXJ0aWVzLkRhdGUuZGF0ZS5zdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5nZXRGdWxsWWVhcigpID09PSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1llYXIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHctMjggbXItMTAgc2hyaW5rLTAgdGV4dC14bCBib3JkZXItci0yIGJvcmRlci1wb2ludCBib3JkZXItZGFzaGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzWWVhciA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2RhdGUuZ2V0RnVsbFllYXIoKX3rhYQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHB5LTggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IHByb2plY3RzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJib3JkZXItbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiYm9yZGVyLWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgYm9yZGVyLWRhc2hlZCBib3JkZXItcG9pbnRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0zLzUgcHItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTJ4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QucHJvcGVydGllcy5OYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZVswXS5wbGFpbl90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgZm9udC1zYW5zIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzLlN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJpY2hfdGV4dFswXS5wbGFpbl90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTQgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5wcm9wZXJ0aWVzLlNraWxsLm11bHRpX3NlbGVjdC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbDogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleDogS2V5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNraWxsRGF0YTogYW55ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxscy5maWx0ZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dC50b0xvY2FsZVVwcGVyQ2FzZSgpID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGwubmFtZS50b0xvY2FsZVVwcGVyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbERhdGEucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5JY29uLmZpbGVzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YS5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhaW5fdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zc2libGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLlBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC0yIHBiLTEgcHgtMyBiZy1wb2ludCB0ZXh0LXdoaXRlIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDsnpDshLjtnojrs7TquLBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0yLzVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOydtOuvuOyngCDrtojrn6zsmKTripQg7KSRLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0LnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5OYW1lLnRpdGxlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucGxhaW5fdGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9qZWN0LnByb3BlcnRpZXMuSW1hZ2UuZmlsZXNbMF0uZmlsZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlNraWxsIiwiUHJvamVjdCIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJza2lsbHMiLCJzZXRTa2lsbHMiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJub3Rpb25EYXRhIiwic29ydFByb2plY3QiLCJwcm9qZWN0IiwicmVzdWx0cyIsInNvcnQiLCJhIiwiYiIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiZGF0ZSIsInN0YXJ0IiwiZ2V0VGltZSIsInJldmVyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImxlbmd0aCIsInVsIiwiVHlwZSIsInNlbGVjdCIsIm5hbWUiLCJtYXAiLCJpbmRleCIsImlzWWVhciIsImdldEZ1bGxZZWFyIiwibGkiLCJzcGFuIiwiaDQiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicCIsIlN1bW1hcnkiLCJyaWNoX3RleHQiLCJtdWx0aV9zZWxlY3QiLCJza2lsbCIsInNraWxsRGF0YSIsIml0ZW0iLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsImljb24iLCJJY29uIiwiZmlsZXMiLCJmaWxlIiwidXJsIiwicG9zc2libGUiLCJKU09OIiwicGFyc2UiLCJQb3NzaWJsZSIsImNoZWNrYm94IiwiaHJlZiIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/index.tsx\n"));

/***/ })

});