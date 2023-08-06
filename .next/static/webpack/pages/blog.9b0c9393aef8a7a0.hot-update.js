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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPosts; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tryghost/content-api */ \"./node_modules/@tryghost/content-api/es/content-api.js\");\n/* harmony import */ var _utils_variable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/variable */ \"./utils/variable.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst api = new _tryghost_content_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"]({\n    url: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostUrl,\n    key: _utils_variable__WEBPACK_IMPORTED_MODULE_4__.ghostApiKey,\n    version: \"v5.0\"\n});\nfunction BlogPosts() {\n    _s();\n    const [posts, setPosts] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        api.posts.browse({\n            limit: 21\n        }).then((posts)=>{\n            setPosts(posts);\n            console.log(posts);\n        }).catch((err)=>{\n            console.error(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col grow h-full\",\n        children: posts.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"grow grid grid-cols-3 gap-8\",\n            children: posts.map((post)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"text-sm font-semibold truncate hover:text-black\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: post.url,\n                                target: \"_blank\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"relative pb-[60%] shadow-lg rounded mb-4 overflow-hidden\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: \"absolute inset-0 object-cover w-full h-full\",\n                                            src: post.feature_image,\n                                            alt: post.title,\n                                            width: 680,\n                                            height: 380\n                                        }, void 0, false, {\n                                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 45\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"mb-1 text-2xl font-normal text-gray-900\",\n                                        children: post.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 37\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 33\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                            className: \"block text-base font-normal text-gray-600\",\n                            dateTime: post.created_at.split(\"T\")[0],\n                            children: post.created_at.split(\"T\")[0].replaceAll(\"-\", \".\")\n                        }, void 0, false, {\n                            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 33\n                        }, this)\n                    ]\n                }, post.id, true, {\n                    fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 29\n                }, this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 31,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"최신 글 불러오는 중...\"\n        }, void 0, false, {\n            fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n            lineNumber: 66,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/homin/portfolio/components/blogPosts.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this);\n}\n_s(BlogPosts, \"bG8V4duoIfO0BEPgauWMVT5Qvyw=\");\n_c = BlogPosts;\nvar _c;\n$RefreshReg$(_c, \"BlogPosts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Jsb2dQb3N0cy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNFO0FBQ3FCO0FBQ0s7QUFDYjtBQUU1QyxNQUFNTyxNQUFNLElBQUlMLDZEQUFlQSxDQUFDO0lBQzVCTSxLQUFLSixxREFBUUE7SUFDYkssS0FBS04sd0RBQVdBO0lBQ2hCTyxTQUFTO0FBQ2I7QUFFZSxTQUFTQyxZQUFZOztJQUNoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQU0sRUFBRTtJQUUxQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaRSxJQUFJSyxLQUFLLENBQ0pFLE1BQU0sQ0FBQztZQUFFQyxPQUFPO1FBQUcsR0FDbkJDLElBQUksQ0FBQyxDQUFDSixRQUFVO1lBQ2JDLFNBQVNEO1lBQ1RLLFFBQVFDLEdBQUcsQ0FBQ047UUFDaEIsR0FDQ08sS0FBSyxDQUFDLENBQUNDLE1BQVE7WUFDWkgsUUFBUUksS0FBSyxDQUFDRDtRQUNsQjtJQUNSLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNWWCxNQUFNWSxNQUFNLGlCQUNULDhEQUFDQztZQUFHRixXQUFVO3NCQUNUWCxNQUFNYyxHQUFHLENBQUMsQ0FBQ0MsT0FBYztnQkFDdEIscUJBQ0ksOERBQUNDOztzQ0FDRyw4REFBQ0M7NEJBQUdOLFdBQVU7c0NBQ1YsNEVBQUN2QixrREFBSUE7Z0NBQUM4QixNQUFNSCxLQUFLbkIsR0FBRztnQ0FBRXVCLFFBQU87O2tEQUN6Qiw4REFBQ1Q7d0NBQUlDLFdBQVU7a0RBQ1gsNEVBQUN0QixtREFBS0E7NENBQ0ZzQixXQUFVOzRDQUNWUyxLQUFLTCxLQUFLTSxhQUFhOzRDQUN2QkMsS0FBS1AsS0FBS1EsS0FBSzs0Q0FDZkMsT0FBTzs0Q0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7a0RBSWhCLDhEQUFDUjt3Q0FBR04sV0FBVTtrREFDVEksS0FBS1EsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3ZCLDhEQUFDRzs0QkFDR2YsV0FBVTs0QkFDVmdCLFVBQVVaLEtBQUthLFVBQVUsQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO3NDQUV0Q2QsS0FBS2EsVUFBVSxDQUNYQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDYkMsVUFBVSxDQUFDLEtBQUs7Ozs7Ozs7bUJBekJwQmYsS0FBS2dCLEVBQUU7Ozs7O1lBNkJ4Qjs7Ozs7aUNBR0osOERBQUNDO3NCQUFLOzs7OztnQkFDVDs7Ozs7O0FBR2IsQ0FBQztHQXpEdUJqQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2Jsb2dQb3N0cy50c3g/ZmVjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBHaG9zdENvbnRlbnRBUEkgZnJvbSBcIkB0cnlnaG9zdC9jb250ZW50LWFwaVwiO1xuaW1wb3J0IHsgZ2hvc3RBcGlLZXksIGdob3N0VXJsIH0gZnJvbSBcIkAvdXRpbHMvdmFyaWFibGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgYXBpID0gbmV3IEdob3N0Q29udGVudEFQSSh7XG4gICAgdXJsOiBnaG9zdFVybCxcbiAgICBrZXk6IGdob3N0QXBpS2V5LFxuICAgIHZlcnNpb246IFwidjUuMFwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dQb3N0cygpIHtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlPGFueT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXBpLnBvc3RzXG4gICAgICAgICAgICAuYnJvd3NlKHsgbGltaXQ6IDIxIH0pXG4gICAgICAgICAgICAudGhlbigocG9zdHMpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhwb3N0cyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocG9zdHMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdyb3cgaC1mdWxsXCI+XG4gICAgICAgICAgICB7cG9zdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJncm93IGdyaWQgZ3JpZC1jb2xzLTMgZ2FwLThcIj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LXNlbWlib2xkIHRydW5jYXRlIGhvdmVyOnRleHQtYmxhY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Bvc3QudXJsfSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHBiLVs2MCVdIHNoYWRvdy1sZyByb3VuZGVkIG1iLTQgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBvYmplY3QtY292ZXIgdy1mdWxsIGgtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZV9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs2ODB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM4MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi0xIHRleHQtMnhsIGZvbnQtbm9ybWFsIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWU9e3Bvc3QuY3JlYXRlZF9hdC5zcGxpdChcIlRcIilbMF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmNyZWF0ZWRfYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCJUXCIpWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2VBbGwoXCItXCIsIFwiLlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8c3Bhbj7stZzsi6Ag6riAIOu2iOufrOyYpOuKlCDspJEuLi48L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsIkdob3N0Q29udGVudEFQSSIsImdob3N0QXBpS2V5IiwiZ2hvc3RVcmwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsInVybCIsImtleSIsInZlcnNpb24iLCJCbG9nUG9zdHMiLCJwb3N0cyIsInNldFBvc3RzIiwiYnJvd3NlIiwibGltaXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJ1bCIsIm1hcCIsInBvc3QiLCJsaSIsImgzIiwiaHJlZiIsInRhcmdldCIsInNyYyIsImZlYXR1cmVfaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwidGltZSIsImRhdGVUaW1lIiwiY3JlYXRlZF9hdCIsInNwbGl0IiwicmVwbGFjZUFsbCIsImlkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/blogPosts.tsx\n"));

/***/ })

});