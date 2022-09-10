/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./styles/Users.module.scss":
/*!**********************************!*\
  !*** ./styles/Users.module.scss ***!
  \**********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"user\": \"Users_user__4YUNf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvVXNlcnMubW9kdWxlLnNjc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVzdC8uL3N0eWxlcy9Vc2Vycy5tb2R1bGUuc2Nzcz9lMGY2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJcIjogXCJVc2Vyc191c2VyX180WVVOZlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Users.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Users_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Users.module.scss */ \"./styles/Users.module.scss\");\n/* harmony import */ var _styles_Users_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Users_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction User({ user  }) {\n    // const { query } = useRouter() here we got id from query\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: (_styles_Users_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n            children: [\n                \"User with id\",\n                user.id,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \"User name: \",\n                        user.name\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Ilya\\\\Desktop\\\\prog go it\\\\NextJS_Test\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Ilya\\\\Desktop\\\\prog go it\\\\NextJS_Test\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Ilya\\\\Desktop\\\\prog go it\\\\NextJS_Test\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\nasync function getServerSideProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUM7QUFDVztBQUNuQyxTQUFTRSxJQUFJLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDbkMsMERBQTBEO0lBQzFELHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxJQUFFO1lBQUNDLFNBQVMsRUFBRUwsdUVBQVU7O2dCQUFFLGNBQ1g7Z0JBQUNFLElBQUksQ0FBQ0ksRUFBRTs4QkFDcEIsOERBQUNILEtBQUc7O3dCQUFDLGFBQVc7d0JBQUNELElBQUksQ0FBQ0ssSUFBSTs7Ozs7O3dCQUFPOzs7Ozs7Z0JBQ2hDOzs7OztZQUNILENBQUM7QUFDZixDQUFDO0FBQ00sZUFBZUMsa0JBQWtCLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7SUFDakQsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLDJDQUEyQyxFQUFFRixNQUFNLENBQUNILEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdkYsTUFBTUosSUFBSSxHQUFHLE1BQU1RLFFBQVEsQ0FBQ0UsSUFBSSxFQUFFO0lBRWxDLE9BQU87UUFDSEMsS0FBSyxFQUFFO1lBQUVYLElBQUk7U0FBRTtLQUNsQjtBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anNfdGVzdC8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vLi4vc3R5bGVzL1VzZXJzLm1vZHVsZS5zY3NzJ1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciB9KSB7XHJcbiAgICAvLyBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKSBoZXJlIHdlIGdvdCBpZCBmcm9tIHF1ZXJ5XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgVXNlciB3aXRoIGlke3VzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlVzZXIgbmFtZToge3VzZXIubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICA8L2Rpdj4pXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHtwYXJhbXMuaWR9YClcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IHVzZXIgfSxcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZSIsIlVzZXIiLCJ1c2VyIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJpZCIsIm5hbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();