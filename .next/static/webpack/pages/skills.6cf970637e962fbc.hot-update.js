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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pageTitle */ \"./components/pageTitle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const response = await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results;\n            console.log(response);\n            const language = response.filter((skill)=>{\n                return skill.properties.Type.select.name === \"Language\";\n            });\n            const tool = response.filter((skill)=>{\n                return skill.properties.Type.select.name === \"Tool\";\n            });\n            setSkillData({\n                language,\n                tool: typeTool\n            });\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: \"SKILL\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            Object.keys(skillData).length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.keys(skillData).map((skillType)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 32\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDSTtBQUdHO0FBQ0E7QUFFaEMsU0FBU00sT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVyxRQUFRQyxHQUFHLENBQUNIO0lBRVpSLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1QsTUFBTVksV0FBVyxNQUFNLENBQUMsTUFBTVgsNERBQVVBLEVBQUMsRUFBR0csTUFBTSxDQUFDUyxPQUFPO1lBQzFESCxRQUFRQyxHQUFHLENBQUNDO1lBQ1osTUFBTUUsV0FBV0YsU0FBU0csTUFBTSxDQUFDLENBQUNDLFFBQWU7Z0JBQzdDLE9BQU9BLE1BQU1DLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksS0FBSztZQUNqRDtZQUNBLE1BQU1DLE9BQU9ULFNBQVNHLE1BQU0sQ0FBQyxDQUFDQyxRQUFlO2dCQUN6QyxPQUFPQSxNQUFNQyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEtBQUs7WUFDakQ7WUFDQVgsYUFBYTtnQkFBRUs7Z0JBQVVPLE1BQU1DO1lBQVM7UUFDNUM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUN0Qiw2REFBU0E7MEJBQUM7Ozs7OztZQUNWdUIsT0FBT0MsSUFBSSxDQUFDbEIsV0FBV21CLE1BQU0saUJBQzFCLDhEQUFDSjswQkFDSUUsT0FBT0MsSUFBSSxDQUFDbEIsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQyxZQUFzQjtvQkFDL0MscUJBQU8sOERBQUNDOzs7OztnQkFDWjs7Ozs7dUJBRUosSUFBSTs7Ozs7OztBQTRCcEIsQ0FBQztHQXpEdUIzQjs7UUFDTEwsa0RBQVNBOzs7S0FESks7QUEyRGpCLE1BQU00QixRQUFRLFNBUWY7UUFSZ0IsRUFDbEJYLEtBQUksRUFDSlksU0FBUSxFQUNSQyxLQUFJLEVBS1A7SUFDRyxxQkFDSTtrQkFDSSw0RUFBQ1Y7WUFDR0MsV0FBVyw4QkFFVixPQURHLENBQUNRLFdBQVcsZUFBZSxJQUFJOzs4QkFHbkMsOERBQUNuQyxtREFBS0E7b0JBQ0YyQixXQUFVO29CQUNWVSxLQUFLRDtvQkFDTEUsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBS2pCOzs7Ozs7OEJBRVQsOERBQUNVO29CQUFLTixXQUFVOzhCQUNYSjs7Ozs7Ozs7Ozs7OztBQUtyQixFQUFFO01BN0JXVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9za2lsbHMudHN4PzFlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEtleSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyYWRpZW50VGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL2dyYWRpZW50VGV4dFwiO1xuaW1wb3J0IHsgbm90aW9uSW5pdCB9IGZyb20gXCJAL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL3BhZ2VUaXRsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTa2lsbHMoeyBza2lsbHMgfTogeyBza2lsbHM6IE9iamVjdFtdIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbY3VycmVudFNraWxsLCBzZXRDdXJyZW50U2tpbGxdID0gdXNlU3RhdGU8YW55Pih7fSk7XG4gICAgY29uc3QgW3NraWxsRGF0YSwgc2V0U2tpbGxEYXRhXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuICAgIGNvbnNvbGUubG9nKHNraWxsRGF0YSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgbm90aW9uSW5pdCgpKS5za2lsbHMucmVzdWx0cztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGNvbnN0IGxhbmd1YWdlID0gcmVzcG9uc2UuZmlsdGVyKChza2lsbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNraWxsLnByb3BlcnRpZXMuVHlwZS5zZWxlY3QubmFtZSA9PT0gXCJMYW5ndWFnZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB0b29sID0gcmVzcG9uc2UuZmlsdGVyKChza2lsbDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNraWxsLnByb3BlcnRpZXMuVHlwZS5zZWxlY3QubmFtZSA9PT0gXCJUb29sXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFNraWxsRGF0YSh7IGxhbmd1YWdlLCB0b29sOiB0eXBlVG9vbCB9KTtcbiAgICAgICAgfSkoKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cbiAgICAgICAgICAgIDxQYWdlVGl0bGU+U0tJTEw8L1BhZ2VUaXRsZT5cbiAgICAgICAgICAgIHtPYmplY3Qua2V5cyhza2lsbERhdGEpLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7T2JqZWN0LmtleXMoc2tpbGxEYXRhKS5tYXAoKHNraWxsVHlwZTogU3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4+PC9zcGFuPjtcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAge3NraWxsRGF0YS5tYXAoKHNraWxsOiBhbnksIGluZGV4OiBLZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5wcm9wZXJ0aWVzLlBvc3NpYmxlLmNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBza2lsbC5wcm9wZXJ0aWVzLkljb24uZmlsZXNbMF0uZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNraWxsKHsgLi4uc2tpbGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NzaWJsZT17cG9zc2libGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgU2tpbGwgPSAoe1xuICAgIG5hbWUsXG4gICAgcG9zc2libGUsXG4gICAgaWNvbixcbn06IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcG9zc2libGU6IEJvb2xlYW47XG4gICAgaWNvbjogc3RyaW5nO1xufSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgJHtcbiAgICAgICAgICAgICAgICAgICAgIXBvc3NpYmxlID8gXCJvcGFjaXR5LTUwXCIgOiBudWxsXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTEgc2hhZG93LXhsIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItcG9pbnRcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ljb259XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHktMC41IHB4LTIgdGV4dC14cyBiZy1wb2ludCB0ZXh0LXdoaXRlIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub3Rpb25Jbml0IiwiUGFnZVRpdGxlIiwiU2tpbGxzIiwic2tpbGxzIiwicm91dGVyIiwiY3VycmVudFNraWxsIiwic2V0Q3VycmVudFNraWxsIiwic2tpbGxEYXRhIiwic2V0U2tpbGxEYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicmVzdWx0cyIsImxhbmd1YWdlIiwiZmlsdGVyIiwic2tpbGwiLCJwcm9wZXJ0aWVzIiwiVHlwZSIsInNlbGVjdCIsIm5hbWUiLCJ0b29sIiwidHlwZVRvb2wiLCJkaXYiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwibWFwIiwic2tpbGxUeXBlIiwic3BhbiIsIlNraWxsIiwicG9zc2libGUiLCJpY29uIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});