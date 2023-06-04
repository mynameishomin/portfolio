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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            setSkillData(await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow lg:w-1/2 h-full bg-gray-800\",\n                children: currentSkill.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute flex flex-col w-full h-full p-4 z-10 bg-gray-800 lg:static\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mb-4 text-xl font-bold text-center text-gray-200\",\n                            children: currentSkill.properties.Name.title[0].plain_text\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            className: \"whitespace-pre-wrap break-keep\",\n                            children: currentSkill.properties.Summary.rich_text[0].plain_text\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-auto lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-2\",\n                                children: \"닫기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow w-full lg:w-1/2 h-full p-4 bg-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-4 gap-2 w-full\",\n                    children: skillData.map((skill, index)=>{\n                        const name = skill.properties.Name.title[0].plain_text;\n                        const possible = skill.properties.Possible.checkbox;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    setCurrentSkill({\n                                        ...skill\n                                    });\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                                    name: skill.properties.Name.title[0].plain_text,\n                                    possible: skill.properties.Possible.checkbox,\n                                    src: skill.properties.Icon.files[0].file.url\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 33\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 87,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNJO0FBR0c7QUFFaEMsU0FBU0ssT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVSxRQUFRQyxHQUFHLENBQUNIO0lBRVpQLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1RRLGFBQWEsTUFBTSxDQUFDLE1BQU1QLDREQUFVQSxFQUFDLEVBQUdFLE1BQU0sQ0FBQ1EsT0FBTztRQUMxRDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZSLGFBQWFTLEVBQUUsaUJBQ1osOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1RSLGFBQWFXLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxVQUFVOzs7Ozs7c0NBRXJELDhEQUFDQzs0QkFBSVAsV0FBVTtzQ0FFUFIsYUFBYVcsVUFBVSxDQUFDSyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQ3ZDSCxVQUFVOzs7Ozs7c0NBR3ZCLDhEQUFDUDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ1U7Z0NBQU9WLFdBQVU7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR2hDLElBQUk7Ozs7OzswQkFFWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNXO29CQUFHWCxXQUFVOzhCQUNUTixVQUFVa0IsR0FBRyxDQUFDLENBQUNDLE9BQVlDLFFBQWU7d0JBQ3ZDLE1BQU1DLE9BQU9GLE1BQU1WLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxVQUFVO3dCQUN0RCxNQUFNVSxXQUFXSCxNQUFNVixVQUFVLENBQUNjLFFBQVEsQ0FBQ0MsUUFBUTt3QkFDbkQscUJBQ0ksOERBQUNDO3NDQUNHLDRFQUFDVDtnQ0FDR1UsTUFBSztnQ0FDTEMsU0FBUyxJQUFNO29DQUNYNUIsZ0JBQWdCO3dDQUFFLEdBQUdvQixLQUFLO29DQUFDO2dDQUMvQjswQ0FFQSw0RUFBQ1M7b0NBQ0dQLE1BQ0lGLE1BQU1WLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUN6QkMsVUFBVTtvQ0FFbkJVLFVBQ0lILE1BQU1WLFVBQVUsQ0FBQ2MsUUFBUSxDQUFDQyxRQUFRO29DQUV0Q0ssS0FDSVYsTUFBTVYsVUFBVSxDQUFDcUIsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxJQUFJLENBQzlCQyxHQUFHOzs7Ozs7Ozs7OzsyQkFqQmZiOzs7OztvQkF1QmpCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtwQixDQUFDO0dBbEV1QnpCOztRQUNMSixrREFBU0E7OztLQURKSTtBQW9FakIsTUFBTWlDLFFBQVEsU0FRZjtRQVJnQixFQUNsQlAsS0FBSSxFQUNKQyxTQUFRLEVBQ1JZLEtBQUksRUFLUDtJQUNHLHFCQUNJO2tCQUNJLDRFQUFDN0I7WUFDR0MsV0FBVyw4QkFFVixPQURHLENBQUNnQixXQUFXLGVBQWUsSUFBSTs7OEJBR25DLDhEQUFDaEMsbURBQUtBO29CQUNGZ0IsV0FBVTtvQkFDVnVCLEtBQUtLO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLaEI7Ozs7Ozs4QkFFVCw4REFBQ2lCO29CQUFLaEMsV0FBVTs4QkFDWGU7Ozs7Ozs7Ozs7Ozs7QUFLckIsRUFBRTtNQTdCV08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLnRzeD8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmFkaWVudFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9ncmFkaWVudFRleHRcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHsgc2tpbGxzIH06IHsgc2tpbGxzOiBPYmplY3RbXSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2N1cnJlbnRTa2lsbCwgc2V0Q3VycmVudFNraWxsXSA9IHVzZVN0YXRlPGFueT4oe30pO1xuICAgIGNvbnN0IFtza2lsbERhdGEsIHNldFNraWxsRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgICBjb25zb2xlLmxvZyhza2lsbERhdGEpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFNraWxsRGF0YShhd2FpdCAoYXdhaXQgbm90aW9uSW5pdCgpKS5za2lsbHMucmVzdWx0cyk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBsZzp3LTEvMiBoLWZ1bGwgYmctZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFNraWxsLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBwLTQgei0xMCBiZy1ncmF5LTgwMCBsZzpzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmUtd3JhcCBicmVhay1rZWVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2tpbGwucHJvcGVydGllcy5TdW1tYXJ5LnJpY2hfdGV4dFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC1hdXRvIGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yXCI+64ur6riwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyB3LWZ1bGwgbGc6dy0xLzIgaC1mdWxsIHAtNCBiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2tpbGxEYXRhLm1hcCgoc2tpbGw6IGFueSwgaW5kZXg6IEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zc2libGUgPSBza2lsbC5wcm9wZXJ0aWVzLlBvc3NpYmxlLmNoZWNrYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTa2lsbCh7IC4uLnNraWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGU9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5wcm9wZXJ0aWVzLlBvc3NpYmxlLmNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNraWxsLnByb3BlcnRpZXMuSWNvbi5maWxlc1swXS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IFNraWxsID0gKHtcbiAgICBuYW1lLFxuICAgIHBvc3NpYmxlLFxuICAgIGljb24sXG59OiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBvc3NpYmxlOiBCb29sZWFuO1xuICAgIGljb246IHN0cmluZztcbn0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICFwb3NzaWJsZSA/IFwib3BhY2l0eS01MFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIHNoYWRvdy14bCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTAuNSBweC0yIHRleHQteHMgYmctcG9pbnQgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwibm90aW9uSW5pdCIsIlNraWxscyIsInNraWxscyIsInJvdXRlciIsImN1cnJlbnRTa2lsbCIsInNldEN1cnJlbnRTa2lsbCIsInNraWxsRGF0YSIsInNldFNraWxsRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJoMyIsInByb3BlcnRpZXMiLCJOYW1lIiwidGl0bGUiLCJwbGFpbl90ZXh0IiwicHJlIiwiU3VtbWFyeSIsInJpY2hfdGV4dCIsImJ1dHRvbiIsInVsIiwibWFwIiwic2tpbGwiLCJpbmRleCIsIm5hbWUiLCJwb3NzaWJsZSIsIlBvc3NpYmxlIiwiY2hlY2tib3giLCJsaSIsInR5cGUiLCJvbkNsaWNrIiwiU2tpbGwiLCJzcmMiLCJJY29uIiwiZmlsZXMiLCJmaWxlIiwidXJsIiwiaWNvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});