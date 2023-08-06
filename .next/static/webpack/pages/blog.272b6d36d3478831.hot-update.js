"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./components/blogPosts.tsx":
/*!**********************************!*\
  !*** ./components/blogPosts.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tryghost/content-api */ \"./node_modules/@tryghost/content-api/es/content-api.js\");\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/variable */ \"./utils/variable.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    url: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostUrl,\n    key: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostApiKey,\n    version: \"v5.0\"\n});\nfunction BlogPosts() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        api.posts.browse({\n            limit: 20\n        }).then((posts)=>{\n            setPosts(posts);\n            console.log(posts);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col grow h-full mx-auto max-w-2xl\",\n        children: posts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"grow h-full space-y-3\",\n            children: posts.map((post)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-sm font-semibold truncate hover:text-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: post.url,\n                                target: \"_blank\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: \"shadow-lg rounded mb-4\",\n                                        src: post.feature_image,\n                                        alt: post.title,\n                                        width: 680,\n                                        height: 380\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-3xl font-normal\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            className: \"block text-xs font-medium\",\n                            dateTime: post.created_at.split(\"T\")[0],\n                            children: post.created_at.split(\"T\")[0].replaceAll(\"-\", \".\")\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"최신 글 불러오는 중...\"\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 63,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(BlogPosts, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = BlogPosts;\nvar _c;\n$RefreshReg$(_c, \"BlogPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2dQb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ3FCO0FBQ0s7QUFDYjtBQUU1QyxNQUFNTyxNQUFNLElBQUlMLDZEQUFlQSxDQUFDO0lBQzVCTSxLQUFLSixxREFBUUE7SUFDYkssS0FBS04sd0RBQVdBO0lBQ2hCTyxTQUFTO0FBQ2I7QUFFZSxTQUFTQyxZQUFZOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQU0sRUFBRTtJQUUxQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRSxJQUFJSyxLQUFLLENBQ0pFLE1BQU0sQ0FBQztZQUFFQyxPQUFPO1FBQUcsR0FDbkJDLElBQUksQ0FBQyxDQUFDSixRQUFVO1lBQ2JDLFNBQVNEO1lBQ1RLLFFBQVFDLEdBQUcsQ0FBQ047UUFDaEIsR0FDQ08sS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDWkgsUUFBUUksS0FBSyxDQUFDRDtRQUNsQjtJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNWWCxNQUFNWSxNQUFNLGlCQUNULDhEQUFDQztZQUFHRixXQUFVO3NCQUNUWCxNQUFNYyxHQUFHLENBQUMsQ0FBQ0MsT0FBYztnQkFDdEIscUJBQ0ksOERBQUNDOztzQ0FDRyw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQ1YsNEVBQUN2QixrREFBSUE7Z0NBQUM4QixNQUFNSCxLQUFLbkIsR0FBRztnQ0FBRXVCLFFBQU87O2tEQUN6Qiw4REFBQzlCLG1EQUFLQTt3Q0FDRnNCLFdBQVU7d0NBQ1ZTLEtBQUtMLEtBQUtNLGFBQWE7d0NBQ3ZCQyxLQUFLUCxLQUFLUSxLQUFLO3dDQUNmQyxPQUFPO3dDQUNQQyxRQUFROzs7Ozs7a0RBRVosOERBQUNSO3dDQUFHTixXQUFVO2tEQUNUSSxLQUFLUSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLdkIsOERBQUNHOzRCQUNHZixXQUFVOzRCQUNWZ0IsVUFBVVosS0FBS2EsVUFBVSxDQUFDQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7c0NBRXRDZCxLQUFLYSxVQUFVLENBQ1hDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNiQyxVQUFVLENBQUMsS0FBSzs7Ozs7OzttQkF0QnBCZixLQUFLZ0IsRUFBRTs7Ozs7WUEwQnhCOzs7OztpQ0FHSiw4REFBQ0M7c0JBQUs7Ozs7O2dCQUNUOzs7Ozs7QUFHYixDQUFDO0dBdER1QmpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmxvZ1Bvc3RzLnRzeD9mZWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IEdob3N0Q29udGVudEFQSSBmcm9tIFwiQHRyeWdob3N0L2NvbnRlbnQtYXBpXCI7XG5pbXBvcnQgeyBnaG9zdEFwaUtleSwgZ2hvc3RVcmwgfSBmcm9tIFwiQC91dGlscy92YXJpYWJsZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBhcGkgPSBuZXcgR2hvc3RDb250ZW50QVBJKHtcbiAgICB1cmw6IGdob3N0VXJsLFxuICAgIGtleTogZ2hvc3RBcGlLZXksXG4gICAgdmVyc2lvbjogXCJ2NS4wXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3RzKCkge1xuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8YW55PihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhcGkucG9zdHNcbiAgICAgICAgICAgIC5icm93c2UoeyBsaW1pdDogMjAgfSlcbiAgICAgICAgICAgIC50aGVuKChwb3N0cykgPT4ge1xuICAgICAgICAgICAgICAgIHNldFBvc3RzKHBvc3RzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ3JvdyBoLWZ1bGwgbXgtYXV0byBtYXgtdy0yeGxcIj5cbiAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyb3cgaC1mdWxsIHNwYWNlLXktM1wiPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJ1bmNhdGUgaG92ZXI6dGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbGcgcm91bmRlZCBtYi00XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVfaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszODB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC14cyBmb250LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17cG9zdC5jcmVhdGVkX2F0LnNwbGl0KFwiVFwiKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIlRcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbChcIi1cIiwgXCIuXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuPuy1nOyLoCDquIAg67aI65+s7Jik64qUIOykkS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiR2hvc3RDb250ZW50QVBJIiwiZ2hvc3RBcGlLZXkiLCJnaG9zdFVybCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwidXJsIiwia2V5IiwidmVyc2lvbiIsIkJsb2dQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJicm93c2UiLCJsaW1pdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInVsIiwibWFwIiwicG9zdCIsImxpIiwiaDMiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwiZmVhdHVyZV9pbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJjcmVhdGVkX2F0Iiwic3BsaXQiLCJyZXBsYWNlQWxsIiwiaWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blogPosts.tsx\n"));

/***/ })

});