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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../skills */ \"./pages/skills.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const [projectData, setProjectData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            setProjectData(await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)());\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow font-han\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-point w-full mb-8 text-4xl\",\n                children: \"PROJECT\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            projectData.project ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: projectData.project.results.map((project, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"block w-28 mr-10 shrink-0 text-xl border-r-2 border-point border-dashed\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"2022년\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 41\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 37\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex py-8 \".concat(index === projectData.project.results.length - 1 ? \"border-none\" : \"border-b-2\", \"  border-dashed border-point\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-3/5 pr-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"mb-4 text-2xl\",\n                                                children: project.properties.Name.title[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"mb-6 font-sans font-medium\",\n                                                children: project.properties.Summary.rich_text[0].plain_text\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 45\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"space-x-2\",\n                                                children: project.properties.Skill.multi_select.map((skill)=>{\n                                                    const skillData = projectData.skills.results.filter((item)=>{\n                                                        return item.properties.Name.title[0].plain_text.toLocaleUpperCase() === skill.name.toLocaleUpperCase();\n                                                    })[0];\n                                                    const icon = skillData.properties.Icon.files[0].file.url;\n                                                    const name = skillData.properties.Name.title[0].plain_text;\n                                                    const possible = JSON.parse(skillData.properties.Possible.checkbox);\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        className: \"inline-flex flex-col items-center\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skills__WEBPACK_IMPORTED_MODULE_5__.Skill, {\n                                                            name: name,\n                                                            possible: possible,\n                                                            icon: icon\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 65\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 61\n                                                    }, this);\n                                                })\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 45\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-2/5\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: {\n                                                pathname: \"/projects/\".concat(project.id),\n                                                query: {\n                                                    name: project.properties.Name.title[0].plain_text\n                                                }\n                                            },\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"\".concat(project.properties.Image.files[0].file.url),\n                                                width: 400,\n                                                height: 400,\n                                                alt: \"\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                                lineNumber: 116,\n                                                columnNumber: 49\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 33\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/projects/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"t1qTxOacMs3ATAuS+eUf43ayUF4=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dEQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFqR2ZyQzs7Ozs7Z0JBd0dqQjs7Ozs7dUJBR1IsSUFBSTs7Ozs7OztBQUdwQixDQUFDO0dBOUh1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvaW5kZXgudHN4P2Y2MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4uL3NraWxsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xuICAgIGNvbnN0IFtwcm9qZWN0RGF0YSwgc2V0UHJvamVjdERhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFByb2plY3REYXRhKGF3YWl0IG5vdGlvbkluaXQoKSk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGZvbnQtaGFuXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1wb2ludCB3LWZ1bGwgbWItOCB0ZXh0LTR4bFwiPlBST0pFQ1Q8L2gyPlxuICAgICAgICAgICAge3Byb2plY3REYXRhLnByb2plY3QgPyAoXG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdERhdGEucHJvamVjdC5yZXN1bHRzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChwcm9qZWN0OiBhbnksIGluZGV4OiBLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayB3LTI4IG1yLTEwIHNocmluay0wIHRleHQteGwgYm9yZGVyLXItMiBib3JkZXItcG9pbnQgYm9yZGVyLWRhc2hlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjIwMjLrhYQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHB5LTggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRhLnByb2plY3QucmVzdWx0cy5sZW5ndGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImJvcmRlci1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJib3JkZXItYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICBib3JkZXItZGFzaGVkIGJvcmRlci1wb2ludGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTMvNSBwci00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi00IHRleHQtMnhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5wcm9wZXJ0aWVzLk5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRpdGxlWzBdLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiBmb250LXNhbnMgZm9udC1tZWRpdW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnByb3BlcnRpZXMuU3VtbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmljaF90ZXh0WzBdLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5wcm9wZXJ0aWVzLlNraWxsLm11bHRpX3NlbGVjdC5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNraWxsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2tpbGxEYXRhID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3REYXRhLnNraWxscy5yZXN1bHRzLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0LnRvTG9jYWxlVXBwZXJDYXNlKCkgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5uYW1lLnRvTG9jYWxlVXBwZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YS5wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLkljb24uZmlsZXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxEYXRhLnByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuTmFtZS50aXRsZVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuUG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTa2lsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEgc2hhZG93LXhsIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGxJY29uVXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0wLjUgcHgtMiB0ZXh0LXhzIGJnLXBvaW50IHRleHQtd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2tpbGxOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTIvNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Byb2plY3RzLyR7cHJvamVjdC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2plY3QucHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2plY3QucHJvcGVydGllcy5JbWFnZS5maWxlc1swXS5maWxlLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlNraWxsIiwiUHJvamVjdCIsInByb2plY3REYXRhIiwic2V0UHJvamVjdERhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInByb2plY3QiLCJ1bCIsInJlc3VsdHMiLCJtYXAiLCJpbmRleCIsImxpIiwic3BhbiIsImxlbmd0aCIsImg0IiwicHJvcGVydGllcyIsIk5hbWUiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJwIiwiU3VtbWFyeSIsInJpY2hfdGV4dCIsIm11bHRpX3NlbGVjdCIsInNraWxsIiwic2tpbGxEYXRhIiwic2tpbGxzIiwiZmlsdGVyIiwiaXRlbSIsInRvTG9jYWxlVXBwZXJDYXNlIiwibmFtZSIsImljb24iLCJJY29uIiwiZmlsZXMiLCJmaWxlIiwidXJsIiwicG9zc2libGUiLCJKU09OIiwicGFyc2UiLCJQb3NzaWJsZSIsImNoZWNrYm94IiwiaHJlZiIsInBhdGhuYW1lIiwiaWQiLCJxdWVyeSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/index.tsx\n"));

/***/ })

});