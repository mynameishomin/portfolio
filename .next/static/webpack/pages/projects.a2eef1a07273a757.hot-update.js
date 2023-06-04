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

/***/ "./pages/skills.tsx":
/*!**************************!*\
  !*** ./pages/skills.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Skill\": function() { return /* binding */ Skill; },\n/* harmony export */   \"default\": function() { return /* binding */ Skills; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/functions */ \"./utils/functions.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Skills(param) {\n    let { skills  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [currentSkill, setCurrentSkill] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [skillData, setSkillData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(skillData);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (async ()=>{\n            setSkillData(await (await (0,_utils_functions__WEBPACK_IMPORTED_MODULE_4__.notionInit)()).skills.results);\n        })();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex grow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow lg:w-1/2 h-full bg-gray-800\",\n                children: currentSkill.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute flex flex-col w-full h-full p-4 z-10 bg-gray-800 lg:static\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"mb-4 text-xl font-bold text-center text-gray-200\",\n                            children: currentSkill.properties.Name.title[0].plain_text\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                            className: \"whitespace-pre-wrap break-keep\",\n                            children: currentSkill.properties.Summary.rich_text[0].plain_text\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-auto lg:hidden\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"p-2\",\n                                children: \"닫기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, this) : null\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grow w-full lg:w-1/2 h-full p-4 bg-gray-700\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"grid grid-cols-4 gap-2 w-full\",\n                    children: skillData.map((skill, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: ()=>{\n                                    setCurrentSkill({\n                                        ...skill\n                                    });\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Skill, {\n                                    skill: skill.properties.Name.title[0].plain_text,\n                                    possible: skill.properties.Possible.checkbox,\n                                    src: skill.properties.Icon.files[0].file.url\n                                }, void 0, false, {\n                                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 37\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 33\n                            }, this)\n                        }, index, false, {\n                            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_s(Skills, \"cOm6PdQpY3hfDwEm16BusqS5wao=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Skills;\nconst Skill = (param)=>{\n    let { name , possible , icon  } = param;\n    console.log(possible);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"inline-flex flex-col items-center \".concat(!possible ? \"opacity-50\" : null),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: \"mb-1 shadow-xl rounded-full border-4 border-point\",\n                    src: icon,\n                    width: 50,\n                    height: 50,\n                    alt: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"py-0.5 px-2 text-xs bg-point text-white rounded\",\n                    children: name\n                }, void 0, false, {\n                    fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homin/portfolio/pages/skills.tsx\",\n            lineNumber: 86,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n};\n_c1 = Skill;\nvar _c, _c1;\n$RefreshReg$(_c, \"Skills\");\n$RefreshReg$(_c1, \"Skill\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9za2lsbHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUztBQUNJO0FBR0c7QUFFaEMsU0FBU0ssT0FBTyxLQUFnQyxFQUFFO1FBQWxDLEVBQUVDLE9BQU0sRUFBd0IsR0FBaEM7O0lBQzNCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixNQUFNLENBQUNPLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBTSxDQUFDO0lBQ3ZELE1BQU0sQ0FBQ1EsV0FBV0MsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBTSxFQUFFO0lBQ2xEVSxRQUFRQyxHQUFHLENBQUNIO0lBRVpQLGdEQUFTQSxDQUFDLElBQU07UUFDWCxXQUFZO1lBQ1RRLGFBQWEsTUFBTSxDQUFDLE1BQU1QLDREQUFVQSxFQUFDLEVBQUdFLE1BQU0sQ0FBQ1EsT0FBTztRQUMxRDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1ZSLGFBQWFTLEVBQUUsaUJBQ1osOERBQUNGO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQ1RSLGFBQWFXLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsRUFBRSxDQUFDQyxVQUFVOzs7Ozs7c0NBRXJELDhEQUFDQzs0QkFBSVAsV0FBVTtzQ0FFUFIsYUFBYVcsVUFBVSxDQUFDSyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQ3ZDSCxVQUFVOzs7Ozs7c0NBR3ZCLDhEQUFDUDs0QkFBSUMsV0FBVTtzQ0FDWCw0RUFBQ1U7Z0NBQU9WLFdBQVU7MENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7MkJBR2hDLElBQUk7Ozs7OzswQkFFWiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNXO29CQUFHWCxXQUFVOzhCQUNUTixVQUFVa0IsR0FBRyxDQUFDLENBQUNDLE9BQVlDLFFBQWU7d0JBQ3ZDLHFCQUNJLDhEQUFDQztzQ0FDRyw0RUFBQ0w7Z0NBQ0dNLE1BQUs7Z0NBQ0xDLFNBQVMsSUFBTTtvQ0FDWHhCLGdCQUFnQjt3Q0FBRSxHQUFHb0IsS0FBSztvQ0FBQztnQ0FDL0I7MENBRUEsNEVBQUNLO29DQUNHTCxPQUNJQSxNQUFNVixVQUFVLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FDekJDLFVBQVU7b0NBRW5CYSxVQUNJTixNQUFNVixVQUFVLENBQUNpQixRQUFRLENBQUNDLFFBQVE7b0NBRXRDQyxLQUNJVCxNQUFNVixVQUFVLENBQUNvQixJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLElBQUksQ0FDOUJDLEdBQUc7Ozs7Ozs7Ozs7OzJCQWpCZlo7Ozs7O29CQXVCakI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCLENBQUM7R0FoRXVCekI7O1FBQ0xKLGtEQUFTQTs7O0tBREpJO0FBa0VqQixNQUFNNkIsUUFBUSxTQVFmO1FBUmdCLEVBQ2xCUyxLQUFJLEVBQ0pSLFNBQVEsRUFDUlMsS0FBSSxFQUtQO0lBQ0doQyxRQUFRQyxHQUFHLENBQUNzQjtJQUNaLHFCQUNJO2tCQUNJLDRFQUFDcEI7WUFDR0MsV0FBVyxxQ0FFVixPQURHLENBQUNtQixXQUFXLGVBQWUsSUFBSTs7OEJBR25DLDhEQUFDbkMsbURBQUtBO29CQUNGZ0IsV0FBVTtvQkFDVnNCLEtBQUtNO29CQUNMQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFLSjs7Ozs7OzhCQUVULDhEQUFDSztvQkFBS2hDLFdBQVU7OEJBQ1gyQjs7Ozs7Ozs7Ozs7OztBQXdCckIsRUFBRTtNQWpEV1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2tpbGxzLnRzeD8xZWM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBLZXkgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBHcmFkaWVudFRleHQgZnJvbSBcIkAvY29tcG9uZW50cy9ncmFkaWVudFRleHRcIjtcbmltcG9ydCB7IG5vdGlvbkluaXQgfSBmcm9tIFwiQC91dGlscy9mdW5jdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2tpbGxzKHsgc2tpbGxzIH06IHsgc2tpbGxzOiBPYmplY3RbXSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW2N1cnJlbnRTa2lsbCwgc2V0Q3VycmVudFNraWxsXSA9IHVzZVN0YXRlPGFueT4oe30pO1xuICAgIGNvbnN0IFtza2lsbERhdGEsIHNldFNraWxsRGF0YV0gPSB1c2VTdGF0ZTxhbnk+KFtdKTtcbiAgICBjb25zb2xlLmxvZyhza2lsbERhdGEpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldFNraWxsRGF0YShhd2FpdCAoYXdhaXQgbm90aW9uSW5pdCgpKS5za2lsbHMucmVzdWx0cyk7XG4gICAgICAgIH0pKCk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGdyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBsZzp3LTEvMiBoLWZ1bGwgYmctZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFNraWxsLmlkID8gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCBwLTQgei0xMCBiZy1ncmF5LTgwMCBsZzpzdGF0aWNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFNraWxsLnByb3BlcnRpZXMuTmFtZS50aXRsZVswXS5wbGFpbl90ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1wcmUtd3JhcCBicmVhay1rZWVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50U2tpbGwucHJvcGVydGllcy5TdW1tYXJ5LnJpY2hfdGV4dFswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYWluX3RleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC1hdXRvIGxnOmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0yXCI+64ur6riwPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyB3LWZ1bGwgbGc6dy0xLzIgaC1mdWxsIHAtNCBiZy1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy00IGdhcC0yIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2tpbGxEYXRhLm1hcCgoc2tpbGw6IGFueSwgaW5kZXg6IEtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRTa2lsbCh7IC4uLnNraWxsIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNraWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGw9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5wbGFpbl90ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3NpYmxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2tpbGwucHJvcGVydGllcy5Qb3NzaWJsZS5jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBza2lsbC5wcm9wZXJ0aWVzLkljb24uZmlsZXNbMF0uZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBTa2lsbCA9ICh7XG4gICAgbmFtZSxcbiAgICBwb3NzaWJsZSxcbiAgICBpY29uLFxufToge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBwb3NzaWJsZTogQm9vbGVhbjtcbiAgICBpY29uOiBzdHJpbmc7XG59KSA9PiB7XG4gICAgY29uc29sZS5sb2cocG9zc2libGUpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW5saW5lLWZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyICR7XG4gICAgICAgICAgICAgICAgICAgICFwb3NzaWJsZSA/IFwib3BhY2l0eS01MFwiIDogbnVsbFxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xIHNoYWRvdy14bCByb3VuZGVkLWZ1bGwgYm9yZGVyLTQgYm9yZGVyLXBvaW50XCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpY29ufVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB5LTAuNSBweC0yIHRleHQteHMgYmctcG9pbnQgdGV4dC13aGl0ZSByb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTYgaC0xNiBtYi0yIHJvdW5kZWQtZnVsbCBib3JkZXItNCBib3JkZXItd2hpdGUgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFwb3NzaWJsZSA/IFwib3BhY2l0eS01MFwiIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17c2tpbGx9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHshcG9zc2libGUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcC0xIHJvdW5kZWQtZnVsbCBiZy1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9jazwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHgtMiBweS0wLjUgdGV4dC14cyBiZy1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8R3JhZGllbnRUZXh0Pntza2lsbH08L0dyYWRpZW50VGV4dD5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJub3Rpb25Jbml0IiwiU2tpbGxzIiwic2tpbGxzIiwicm91dGVyIiwiY3VycmVudFNraWxsIiwic2V0Q3VycmVudFNraWxsIiwic2tpbGxEYXRhIiwic2V0U2tpbGxEYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsImgzIiwicHJvcGVydGllcyIsIk5hbWUiLCJ0aXRsZSIsInBsYWluX3RleHQiLCJwcmUiLCJTdW1tYXJ5IiwicmljaF90ZXh0IiwiYnV0dG9uIiwidWwiLCJtYXAiLCJza2lsbCIsImluZGV4IiwibGkiLCJ0eXBlIiwib25DbGljayIsIlNraWxsIiwicG9zc2libGUiLCJQb3NzaWJsZSIsImNoZWNrYm94Iiwic3JjIiwiSWNvbiIsImZpbGVzIiwiZmlsZSIsInVybCIsIm5hbWUiLCJpY29uIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/skills.tsx\n"));

/***/ })

});