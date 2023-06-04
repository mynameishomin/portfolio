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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n/* harmony import */ var _components_pageTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/pageTitle */ \"./components/pageTitle.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            setSkillData(await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_pageTitle__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                children: \"SKILL\"\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow w-full lg:w-1/2 h-full p-4 bg-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-4 gap-2 w-full\",\n                    children: skillData.map((skill, index)=>{\n                        const name = skill.properties.Name.title[0].plain_text;\n                        const possible = JSON.parse(skill.properties.Possible.checkbox);\n                        const icon = skill.properties.Icon.files[0].file.url;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    setCurrentSkill({\n                                        ...skill\n                                    });\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                                    name: name,\n                                    possible: possible,\n                                    icon: icon\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 33\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 29\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 78,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 66,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1M7QUFDSTtBQUdHO0FBQ0E7QUFFaEMsU0FBU00sT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLENBQUNRLGNBQWNDLGdCQUFnQixHQUFHUiwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVyxRQUFRQyxHQUFHLENBQUNIO0lBRVpSLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1RTLGFBQWEsTUFBTSxDQUFDLE1BQU1SLDREQUFVQSxFQUFDLEVBQUdHLE1BQU0sQ0FBQ1EsT0FBTztRQUMxRDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ1osNkRBQVNBOzBCQUFDOzs7Ozs7MEJBQ1gsOERBQUNXO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDQztvQkFBR0QsV0FBVTs4QkFDVE4sVUFBVVEsR0FBRyxDQUFDLENBQUNDLE9BQVlDLFFBQWU7d0JBQ3ZDLE1BQU1DLE9BQU9GLE1BQU1HLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxVQUFVO3dCQUN0RCxNQUFNQyxXQUFXQyxLQUFLQyxLQUFLLENBQ3ZCVCxNQUFNRyxVQUFVLENBQUNPLFFBQVEsQ0FBQ0MsUUFBUTt3QkFFdEMsTUFBTUMsT0FBT1osTUFBTUcsVUFBVSxDQUFDVSxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FBQ0MsR0FBRzt3QkFDcEQscUJBQ0ksOERBQUNDO3NDQUNHLDRFQUFDQztnQ0FDR0MsTUFBSztnQ0FDTEMsU0FBUyxJQUFNO29DQUNYOUIsZ0JBQWdCO3dDQUFFLEdBQUdVLEtBQUs7b0NBQUM7Z0NBQy9COzBDQUVBLDRFQUFDcUI7b0NBQ0duQixNQUFNQTtvQ0FDTkssVUFBVUE7b0NBQ1ZLLE1BQU1BOzs7Ozs7Ozs7OzsyQkFWVFg7Ozs7O29CQWVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEIsQ0FBQztHQTVDdUJmOztRQUNMTCxrREFBU0E7OztLQURKSztBQThDakIsTUFBTW1DLFFBQVEsU0FRZjtRQVJnQixFQUNsQm5CLEtBQUksRUFDSkssU0FBUSxFQUNSSyxLQUFJLEVBS1A7SUFDRyxxQkFDSTtrQkFDSSw0RUFBQ2hCO1lBQ0dDLFdBQVcsOEJBRVYsT0FERyxDQUFDVSxXQUFXLGVBQWUsSUFBSTs7OEJBR25DLDhEQUFDM0IsbURBQUtBO29CQUNGaUIsV0FBVTtvQkFDVnlCLEtBQUtWO29CQUNMVyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLdkI7Ozs7Ozs4QkFFVCw4REFBQ3dCO29CQUFLN0IsV0FBVTs4QkFDWEs7Ozs7Ozs7Ozs7Ozs7QUFLckIsRUFBRTtNQTdCV21CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NraWxscy50c3g/MWVjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgS2V5IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR3JhZGllbnRUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvZ3JhZGllbnRUZXh0XCI7XG5pbXBvcnQgeyBub3Rpb25Jbml0IH0gZnJvbSBcIkAvdXRpbHMvZnVuY3Rpb25zXCI7XG5pbXBvcnQgUGFnZVRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvcGFnZVRpdGxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNraWxscyh7IHNraWxscyB9OiB7IHNraWxsczogT2JqZWN0W10gfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtjdXJyZW50U2tpbGwsIHNldEN1cnJlbnRTa2lsbF0gPSB1c2VTdGF0ZTxhbnk+KHt9KTtcbiAgICBjb25zdCBbc2tpbGxEYXRhLCBzZXRTa2lsbERhdGFdID0gdXNlU3RhdGU8YW55PihbXSk7XG4gICAgY29uc29sZS5sb2coc2tpbGxEYXRhKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRTa2lsbERhdGEoYXdhaXQgKGF3YWl0IG5vdGlvbkluaXQoKSkuc2tpbGxzLnJlc3VsdHMpO1xuICAgICAgICB9KSgpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZ3Jvd1wiPlxuICAgICAgICAgICAgPFBhZ2VUaXRsZT5TS0lMTDwvUGFnZVRpdGxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IHctZnVsbCBsZzp3LTEvMiBoLWZ1bGwgcC00IGJnLWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ2FwLTIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHtza2lsbERhdGEubWFwKChza2lsbDogYW55LCBpbmRleDogS2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gc2tpbGwucHJvcGVydGllcy5OYW1lLnRpdGxlWzBdLnBsYWluX3RleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZSA9IEpTT04ucGFyc2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGwucHJvcGVydGllcy5Qb3NzaWJsZS5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGljb24gPSBza2lsbC5wcm9wZXJ0aWVzLkljb24uZmlsZXNbMF0uZmlsZS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFNraWxsKHsgLi4uc2tpbGwgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2tpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlPXtwb3NzaWJsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNraWxsID0gKHtcbiAgICBuYW1lLFxuICAgIHBvc3NpYmxlLFxuICAgIGljb24sXG59OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBvc3NpYmxlOiBCb29sZWFuO1xuICAgIGljb246IHN0cmluZztcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICFwb3NzaWJsZSA/IFwib3BhY2l0eS01MFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIHNoYWRvdy14bCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTAuNSBweC0yIHRleHQteHMgYmctcG9pbnQgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlBhZ2VUaXRsZSIsIlNraWxscyIsInNraWxscyIsInJvdXRlciIsImN1cnJlbnRTa2lsbCIsInNldEN1cnJlbnRTa2lsbCIsInNraWxsRGF0YSIsInNldFNraWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJza2lsbCIsImluZGV4IiwibmFtZSIsInByb3BlcnRpZXMiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicG9zc2libGUiLCJKU09OIiwicGFyc2UiLCJQb3NzaWJsZSIsImNoZWNrYm94IiwiaWNvbiIsIkljb24iLCJmaWxlcyIsImZpbGUiLCJ1cmwiLCJsaSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiU2tpbGwiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});