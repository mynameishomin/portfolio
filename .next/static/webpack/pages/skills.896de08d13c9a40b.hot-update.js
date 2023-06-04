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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            const response = await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results;\n            console.log(response);\n            const language = response.filter((skill)=>{\n                return skill.properties.Type.select.name === \"Language\";\n            });\n            const tool = response.filter((skill)=>{\n                return skill.properties.Type.select.name === \"Tool\";\n            });\n            setSkillData({\n                language,\n                tool\n            });\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageTitle, {\n                children: \"SKILL\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            Object.keys(skillData).length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: Object.keys(skillData).map((skillType)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 32\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 79,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNJO0FBR0c7QUFHaEMsU0FBU0ssT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVSxRQUFRQyxHQUFHLENBQUNIO0lBRVpQLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1QsTUFBTVcsV0FBVyxNQUFNLENBQUMsTUFBTVYsNERBQVVBLEVBQUMsRUFBR0UsTUFBTSxDQUFDUyxPQUFPO1lBQzFESCxRQUFRQyxHQUFHLENBQUNDO1lBQ1osTUFBTUUsV0FBV0YsU0FBU0csTUFBTSxDQUFDLENBQUNDLFFBQWU7Z0JBQzdDLE9BQU9BLE1BQU1DLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUNDLElBQUksS0FBSztZQUNqRDtZQUNBLE1BQU1DLE9BQU9ULFNBQVNHLE1BQU0sQ0FBQyxDQUFDQyxRQUFlO2dCQUN6QyxPQUFPQSxNQUFNQyxVQUFVLENBQUNDLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEtBQUs7WUFDakQ7WUFDQVgsYUFBYTtnQkFBRUs7Z0JBQVVPO1lBQUs7UUFDbEM7SUFDSixHQUFHLEVBQUU7SUFFTCxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDOzBCQUFVOzs7Ozs7WUFDVkMsT0FBT0MsSUFBSSxDQUFDbEIsV0FBV21CLE1BQU0saUJBQzFCLDhEQUFDTDswQkFDSUcsT0FBT0MsSUFBSSxDQUFDbEIsV0FBV29CLEdBQUcsQ0FBQyxDQUFDQyxZQUFzQjtvQkFDL0MscUJBQU8sOERBQUNDOzs7OztnQkFDWjs7Ozs7dUJBRUosSUFBSTs7Ozs7OztBQTRCcEIsQ0FBQztHQXpEdUIzQjs7UUFDTEosa0RBQVNBOzs7S0FESkk7QUEyRGpCLE1BQU00QixRQUFRLFNBUWY7UUFSZ0IsRUFDbEJYLEtBQUksRUFDSlksU0FBUSxFQUNSQyxLQUFJLEVBS1A7SUFDRyxxQkFDSTtrQkFDSSw0RUFBQ1g7WUFDR0MsV0FBVyw4QkFFVixPQURHLENBQUNTLFdBQVcsZUFBZSxJQUFJOzs4QkFHbkMsOERBQUNsQyxtREFBS0E7b0JBQ0Z5QixXQUFVO29CQUNWVyxLQUFLRDtvQkFDTEUsT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBS2pCOzs7Ozs7OEJBRVQsOERBQUNVO29CQUFLUCxXQUFVOzhCQUNYSDs7Ozs7Ozs7Ozs7OztBQUtyQixFQUFFO01BN0JXVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9za2lsbHMudHN4PzFlYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEtleSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEdyYWRpZW50VGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL2dyYWRpZW50VGV4dFwiO1xuaW1wb3J0IHsgbm90aW9uSW5pdCB9IGZyb20gXCJAL3V0aWxzL2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHsgUGFnZVRpdGxlMSB9IGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZVRpdGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7IHNraWxscyB9OiB7IHNraWxsczogT2JqZWN0W10gfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtjdXJyZW50U2tpbGwsIHNldEN1cnJlbnRTa2lsbF0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcbiAgICBjb25zdCBbc2tpbGxEYXRhLCBzZXRTa2lsbERhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gICAgY29uc29sZS5sb2coc2tpbGxEYXRhKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBub3Rpb25Jbml0KCkpLnNraWxscy5yZXN1bHRzO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSByZXNwb25zZS5maWx0ZXIoKHNraWxsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbGwucHJvcGVydGllcy5UeXBlLnNlbGVjdC5uYW1lID09PSBcIkxhbmd1YWdlXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHRvb2wgPSByZXNwb25zZS5maWx0ZXIoKHNraWxsOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbGwucHJvcGVydGllcy5UeXBlLnNlbGVjdC5uYW1lID09PSBcIlRvb2xcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2V0U2tpbGxEYXRhKHsgbGFuZ3VhZ2UsIHRvb2wgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCI+XG4gICAgICAgICAgICA8UGFnZVRpdGxlPlNLSUxMPC9QYWdlVGl0bGU+XG4gICAgICAgICAgICB7T2JqZWN0LmtleXMoc2tpbGxEYXRhKS5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAge09iamVjdC5rZXlzKHNraWxsRGF0YSkubWFwKChza2lsbFR5cGU6IFN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjwvc3Bhbj47XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICB7LyogPHVsIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgIHtza2lsbERhdGEubWFwKChza2lsbDogYW55LCBpbmRleDogS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBza2lsbC5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zc2libGUgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGwucHJvcGVydGllcy5Qb3NzaWJsZS5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gc2tpbGwucHJvcGVydGllcy5JY29uLmZpbGVzWzBdLmZpbGUudXJsO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTa2lsbCh7IC4uLnNraWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGU9e3Bvc3NpYmxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3VsPiAqL31cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNraWxsID0gKHtcbiAgICBuYW1lLFxuICAgIHBvc3NpYmxlLFxuICAgIGljb24sXG59OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBvc3NpYmxlOiBCb29sZWFuO1xuICAgIGljb246IHN0cmluZztcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICFwb3NzaWJsZSA/IFwib3BhY2l0eS01MFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIHNoYWRvdy14bCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTAuNSBweC0yIHRleHQteHMgYmctcG9pbnQgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlNraWxscyIsInNraWxscyIsInJvdXRlciIsImN1cnJlbnRTa2lsbCIsInNldEN1cnJlbnRTa2lsbCIsInNraWxsRGF0YSIsInNldFNraWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInJlc3VsdHMiLCJsYW5ndWFnZSIsImZpbHRlciIsInNraWxsIiwicHJvcGVydGllcyIsIlR5cGUiLCJzZWxlY3QiLCJuYW1lIiwidG9vbCIsImRpdiIsImNsYXNzTmFtZSIsIlBhZ2VUaXRsZSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJtYXAiLCJza2lsbFR5cGUiLCJzcGFuIiwiU2tpbGwiLCJwb3NzaWJsZSIsImljb24iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});