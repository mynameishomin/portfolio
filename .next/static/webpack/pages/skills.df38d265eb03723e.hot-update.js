"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/skills",{

/***/ "./pages/skills.tsx":
/*!**************************!*\
  !*** ./pages/skills.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pageTitle */ \"./components/pageTitle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const response = await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results;\n            const typeLang = response.fillter((skill)=>{\n                return skill.properties.Type.select.name === \"Language\";\n            });\n            const typeTool = response.fillter((skill)=>{});\n            setSkillData(await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: \"SKILL\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"\",\n                children: skillData.map((skill, index)=>{\n                    const name = skill.properties.Name.title[0].plain_text;\n                    const possible = JSON.parse(skill.properties.Possible.checkbox);\n                    const icon = skill.properties.Icon.files[0].file.url;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>{\n                                setCurrentSkill({\n                                    ...skill\n                                });\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                                name: name,\n                                possible: possible,\n                                icon: icon\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 29\n                        }, this)\n                    }, index, false, {\n                        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 25\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 69,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDSTtBQUdHO0FBQ0E7QUFFaEMsU0FBU00sT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVyxRQUFRQyxHQUFHLENBQUNIO0lBRVpSLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1QsTUFBTVksV0FBVyxNQUFNLENBQUMsTUFBTVgsNERBQVVBLEVBQUMsRUFBR0csTUFBTSxDQUFDUyxPQUFPO1lBQzFELE1BQU1DLFdBQVdGLFNBQVNHLE9BQU8sQ0FBQyxDQUFDQyxRQUFlO2dCQUM5QyxPQUFPQSxNQUFNQyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEtBQUs7WUFDakQ7WUFDQSxNQUFNQyxXQUFXVCxTQUFTRyxPQUFPLENBQUMsQ0FBQ0MsUUFBVSxDQUFDO1lBQzlDUCxhQUFhLE1BQU0sQ0FBQyxNQUFNUiw0REFBVUEsRUFBQyxFQUFHRyxNQUFNLENBQUNTLE9BQU87UUFDMUQ7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNyQiw2REFBU0E7MEJBQUM7Ozs7OzswQkFDWCw4REFBQ3NCO2dCQUFHRCxXQUFVOzBCQUNUZixVQUFVaUIsR0FBRyxDQUFDLENBQUNULE9BQVlVLFFBQWU7b0JBQ3ZDLE1BQU1OLE9BQU9KLE1BQU1DLFVBQVUsQ0FBQ1UsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxVQUFVO29CQUN0RCxNQUFNQyxXQUFXQyxLQUFLQyxLQUFLLENBQ3ZCaEIsTUFBTUMsVUFBVSxDQUFDZ0IsUUFBUSxDQUFDQyxRQUFRO29CQUV0QyxNQUFNQyxPQUFPbkIsTUFBTUMsVUFBVSxDQUFDbUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUc7b0JBQ3BELHFCQUNJLDhEQUFDQztrQ0FDRyw0RUFBQ0M7NEJBQ0dDLE1BQUs7NEJBQ0xDLFNBQVMsSUFBTTtnQ0FDWHBDLGdCQUFnQjtvQ0FBRSxHQUFHUyxLQUFLO2dDQUFDOzRCQUMvQjtzQ0FFQSw0RUFBQzRCO2dDQUNHeEIsTUFBTUE7Z0NBQ05VLFVBQVVBO2dDQUNWSyxNQUFNQTs7Ozs7Ozs7Ozs7dUJBVlRUOzs7OztnQkFlakI7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0dBL0N1QnZCOztRQUNMTCxrREFBU0E7OztLQURKSztBQWlEakIsTUFBTXlDLFFBQVEsU0FRZjtRQVJnQixFQUNsQnhCLEtBQUksRUFDSlUsU0FBUSxFQUNSSyxLQUFJLEVBS1A7SUFDRyxxQkFDSTtrQkFDSSw0RUFBQ2I7WUFDR0MsV0FBVyw4QkFFVixPQURHLENBQUNPLFdBQVcsZUFBZSxJQUFJOzs4QkFHbkMsOERBQUNqQyxtREFBS0E7b0JBQ0YwQixXQUFVO29CQUNWc0IsS0FBS1Y7b0JBQ0xXLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUs1Qjs7Ozs7OzhCQUVULDhEQUFDNkI7b0JBQUsxQixXQUFVOzhCQUNYSDs7Ozs7Ozs7Ozs7OztBQUtyQixFQUFFO01BN0JXd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLnRzeD8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmFkaWVudFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9ncmFkaWVudFRleHRcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9wYWdlVGl0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHsgc2tpbGxzIH06IHsgc2tpbGxzOiBPYmplY3RbXSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2N1cnJlbnRTa2lsbCwgc2V0Q3VycmVudFNraWxsXSA9IHVzZVN0YXRlPGFueT4oe30pO1xuICAgIGNvbnN0IFtza2lsbERhdGEsIHNldFNraWxsRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgICBjb25zb2xlLmxvZyhza2lsbERhdGEpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKGF3YWl0IG5vdGlvbkluaXQoKSkuc2tpbGxzLnJlc3VsdHM7XG4gICAgICAgICAgICBjb25zdCB0eXBlTGFuZyA9IHJlc3BvbnNlLmZpbGx0ZXIoKHNraWxsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbGwucHJvcGVydGllcy5UeXBlLnNlbGVjdC5uYW1lID09PSBcIkxhbmd1YWdlXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVUb29sID0gcmVzcG9uc2UuZmlsbHRlcigoc2tpbGwpID0+IHt9KTtcbiAgICAgICAgICAgIHNldFNraWxsRGF0YShhd2FpdCAoYXdhaXQgbm90aW9uSW5pdCgpKS5za2lsbHMucmVzdWx0cyk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCI+XG4gICAgICAgICAgICA8UGFnZVRpdGxlPlNLSUxMPC9QYWdlVGl0bGU+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAge3NraWxsRGF0YS5tYXAoKHNraWxsOiBhbnksIGluZGV4OiBLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5wcm9wZXJ0aWVzLlBvc3NpYmxlLmNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBza2lsbC5wcm9wZXJ0aWVzLkljb24uZmlsZXNbMF0uZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNraWxsKHsgLi4uc2tpbGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZT17cG9zc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTa2lsbCA9ICh7XG4gICAgbmFtZSxcbiAgICBwb3NzaWJsZSxcbiAgICBpY29uLFxufToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb3NzaWJsZTogQm9vbGVhbjtcbiAgICBpY29uOiBzdHJpbmc7XG59KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciAke1xuICAgICAgICAgICAgICAgICAgICAhcG9zc2libGUgPyBcIm9wYWNpdHktNTBcIiA6IG51bGxcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItMSBzaGFkb3cteGwgcm91bmRlZC1mdWxsIGJvcmRlci00IGJvcmRlci1wb2ludFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJweS0wLjUgcHgtMiB0ZXh0LXhzIGJnLXBvaW50IHRleHQtd2hpdGUgcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5vdGlvbkluaXQiLCJQYWdlVGl0bGUiLCJTa2lsbHMiLCJza2lsbHMiLCJyb3V0ZXIiLCJjdXJyZW50U2tpbGwiLCJzZXRDdXJyZW50U2tpbGwiLCJza2lsbERhdGEiLCJzZXRTa2lsbERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJyZXN1bHRzIiwidHlwZUxhbmciLCJmaWxsdGVyIiwic2tpbGwiLCJwcm9wZXJ0aWVzIiwiVHlwZSIsInNlbGVjdCIsIm5hbWUiLCJ0eXBlVG9vbCIsImRpdiIsImNsYXNzTmFtZSIsInVsIiwibWFwIiwiaW5kZXgiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicG9zc2libGUiLCJKU09OIiwicGFyc2UiLCJQb3NzaWJsZSIsImNoZWNrYm94IiwiaWNvbiIsIkljb24iLCJmaWxlcyIsImZpbGUiLCJ1cmwiLCJsaSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiU2tpbGwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});