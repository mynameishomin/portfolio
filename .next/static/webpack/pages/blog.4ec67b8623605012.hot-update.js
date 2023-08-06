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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tryghost/content-api */ \"./node_modules/@tryghost/content-api/es/content-api.js\");\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/variable */ \"./utils/variable.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    url: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostUrl,\n    key: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostApiKey,\n    version: \"v5.0\"\n});\nfunction BlogPosts() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        api.posts.browse({\n            limit: 21\n        }).then((posts)=>{\n            setPosts(posts);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col grow h-full\",\n        children: posts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"grow grid grid-cols-3 gap-8\",\n            children: posts.map((post)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-sm font-semibold truncate hover:text-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: post.url,\n                                target: \"_blank\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative pb-[60%] shadow-lg rounded mb-4 overflow-hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"absolute inset-0 object-cover w-full h-full\",\n                                            src: post.feature_image,\n                                            alt: post.title,\n                                            width: 680,\n                                            height: 380\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"mb-1 font-normal text-gray-900\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            className: \"block text-base font-normal text-gray-600\",\n                            dateTime: post.created_at.split(\"T\")[0],\n                            children: post.created_at.split(\"T\")[0].replaceAll(\"-\", \".\")\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 30,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"최신 글 불러오는 중...\"\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 65,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(BlogPosts, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = BlogPosts;\nvar _c;\n$RefreshReg$(_c, \"BlogPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2dQb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ3FCO0FBQ0s7QUFDYjtBQUU1QyxNQUFNTyxNQUFNLElBQUlMLDZEQUFlQSxDQUFDO0lBQzVCTSxLQUFLSixxREFBUUE7SUFDYkssS0FBS04sd0RBQVdBO0lBQ2hCTyxTQUFTO0FBQ2I7QUFFZSxTQUFTQyxZQUFZOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQU0sRUFBRTtJQUUxQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRSxJQUFJSyxLQUFLLENBQ0pFLE1BQU0sQ0FBQztZQUFFQyxPQUFPO1FBQUcsR0FDbkJDLElBQUksQ0FBQyxDQUFDSixRQUFVO1lBQ2JDLFNBQVNEO1FBQ2IsR0FDQ0ssS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDWkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNsQjtJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNWVixNQUFNVyxNQUFNLGlCQUNULDhEQUFDQztZQUFHRixXQUFVO3NCQUNUVixNQUFNYSxHQUFHLENBQUMsQ0FBQ0MsT0FBYztnQkFDdEIscUJBQ0ksOERBQUNDOztzQ0FDRyw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQ1YsNEVBQUN0QixrREFBSUE7Z0NBQUM2QixNQUFNSCxLQUFLbEIsR0FBRztnQ0FBRXNCLFFBQU87O2tEQUN6Qiw4REFBQ1Q7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUNyQixtREFBS0E7NENBQ0ZxQixXQUFVOzRDQUNWUyxLQUFLTCxLQUFLTSxhQUFhOzRDQUN2QkMsS0FBS1AsS0FBS1EsS0FBSzs0Q0FDZkMsT0FBTzs0Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7a0RBSWhCLDhEQUFDUjt3Q0FBR04sV0FBVTtrREFDVEksS0FBS1EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3ZCLDhEQUFDRzs0QkFDR2YsV0FBVTs0QkFDVmdCLFVBQVVaLEtBQUthLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO3NDQUV0Q2QsS0FBS2EsVUFBVSxDQUNYQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDYkMsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7bUJBekJwQmYsS0FBS2dCLEVBQUU7Ozs7O1lBNkJ4Qjs7Ozs7aUNBR0osOERBQUNDO3NCQUFLOzs7OztnQkFDVDs7Ozs7O0FBR2IsQ0FBQztHQXhEdUJoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jsb2dQb3N0cy50c3g/ZmVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBHaG9zdENvbnRlbnRBUEkgZnJvbSBcIkB0cnlnaG9zdC9jb250ZW50LWFwaVwiO1xuaW1wb3J0IHsgZ2hvc3RBcGlLZXksIGdob3N0VXJsIH0gZnJvbSBcIkAvdXRpbHMvdmFyaWFibGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgYXBpID0gbmV3IEdob3N0Q29udGVudEFQSSh7XG4gICAgdXJsOiBnaG9zdFVybCxcbiAgICBrZXk6IGdob3N0QXBpS2V5LFxuICAgIHZlcnNpb246IFwidjUuMFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0cygpIHtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXBpLnBvc3RzXG4gICAgICAgICAgICAuYnJvd3NlKHsgbGltaXQ6IDIxIH0pXG4gICAgICAgICAgICAudGhlbigocG9zdHMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhwb3N0cyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ3JvdyBoLWZ1bGxcIj5cbiAgICAgICAgICAgIHtwb3N0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyb3cgZ3JpZCBncmlkLWNvbHMtMyBnYXAtOFwiPlxuICAgICAgICAgICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtc2VtaWJvbGQgdHJ1bmNhdGUgaG92ZXI6dGV4dC1ibGFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cG9zdC51cmx9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcGItWzYwJV0gc2hhZG93LWxnIHJvdW5kZWQgbWItNCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9iamVjdC1jb3ZlciB3LWZ1bGwgaC1mdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezY4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzgwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1iLTEgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZT17cG9zdC5jcmVhdGVkX2F0LnNwbGl0KFwiVFwiKVswXX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIlRcIilbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZUFsbChcIi1cIiwgXCIuXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RpbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuPuy1nOyLoCDquIAg67aI65+s7Jik64qUIOykkS4uLjwvc3Bhbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiR2hvc3RDb250ZW50QVBJIiwiZ2hvc3RBcGlLZXkiLCJnaG9zdFVybCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwidXJsIiwia2V5IiwidmVyc2lvbiIsIkJsb2dQb3N0cyIsInBvc3RzIiwic2V0UG9zdHMiLCJicm93c2UiLCJsaW1pdCIsInRoZW4iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImxlbmd0aCIsInVsIiwibWFwIiwicG9zdCIsImxpIiwiaDMiLCJocmVmIiwidGFyZ2V0Iiwic3JjIiwiZmVhdHVyZV9pbWFnZSIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0aW1lIiwiZGF0ZVRpbWUiLCJjcmVhdGVkX2F0Iiwic3BsaXQiLCJyZXBsYWNlQWxsIiwiaWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/blogPosts.tsx\n"));

/***/ })

});