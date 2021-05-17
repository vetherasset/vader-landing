module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/defaults.js":
/*!****************************!*\
  !*** ./common/defaults.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst defaults = {};\ndefaults.url = {};\ndefaults.url.dapp = 'https://vetherasset.app/';\ndefaults.url.docs = 'https://docs.vetherasset.io/';\ndefaults.url.analytics = 'https://vetherasset.info/';\ndefaults.url.etherscan = 'https://etherscan.io/token/0x4Ba6dDd7b89ed838FEd25d208D4f644106E34279';\ndefaults.url.coingecko = 'https://www.coingecko.com/en/coins/vether';\ndefaults.url.uniswap = 'https://uniswap.exchange/swap/0x4ba6ddd7b89ed838fed25d208d4f644106e34279';\ndefaults.url.discord = 'https://discord.gg/vaderprotocol';\ndefaults.url.telegram = 'https://t.me/vaderprotocol';\ndefaults.url.github = 'https://github.com/vetherasset/';\n/* harmony default export */ __webpack_exports__[\"default\"] = (defaults);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vZGVmYXVsdHMuanM/ZDRjZSJdLCJuYW1lcyI6WyJkZWZhdWx0cyIsInVybCIsImRhcHAiLCJkb2NzIiwiYW5hbHl0aWNzIiwiZXRoZXJzY2FuIiwiY29pbmdlY2tvIiwidW5pc3dhcCIsImRpc2NvcmQiLCJ0ZWxlZ3JhbSIsImdpdGh1YiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUcsRUFBakI7QUFFQUEsUUFBUSxDQUFDQyxHQUFULEdBQWUsRUFBZjtBQUNBRCxRQUFRLENBQUNDLEdBQVQsQ0FBYUMsSUFBYixHQUFvQiwwQkFBcEI7QUFDQUYsUUFBUSxDQUFDQyxHQUFULENBQWFFLElBQWIsR0FBb0IsOEJBQXBCO0FBQ0FILFFBQVEsQ0FBQ0MsR0FBVCxDQUFhRyxTQUFiLEdBQXlCLDJCQUF6QjtBQUNBSixRQUFRLENBQUNDLEdBQVQsQ0FBYUksU0FBYixHQUF5Qix1RUFBekI7QUFDQUwsUUFBUSxDQUFDQyxHQUFULENBQWFLLFNBQWIsR0FBeUIsMkNBQXpCO0FBQ0FOLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhTSxPQUFiLEdBQXVCLDBFQUF2QjtBQUNBUCxRQUFRLENBQUNDLEdBQVQsQ0FBYU8sT0FBYixHQUF1QixrQ0FBdkI7QUFDQVIsUUFBUSxDQUFDQyxHQUFULENBQWFRLFFBQWIsR0FBd0IsNEJBQXhCO0FBQ0FULFFBQVEsQ0FBQ0MsR0FBVCxDQUFhUyxNQUFiLEdBQXNCLGlDQUF0QjtBQUVlVix1RUFBZiIsImZpbGUiOiIuL2NvbW1vbi9kZWZhdWx0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRzID0ge31cblxuZGVmYXVsdHMudXJsID0ge31cbmRlZmF1bHRzLnVybC5kYXBwID0gJ2h0dHBzOi8vdmV0aGVyYXNzZXQuYXBwLydcbmRlZmF1bHRzLnVybC5kb2NzID0gJ2h0dHBzOi8vZG9jcy52ZXRoZXJhc3NldC5pby8nXG5kZWZhdWx0cy51cmwuYW5hbHl0aWNzID0gJ2h0dHBzOi8vdmV0aGVyYXNzZXQuaW5mby8nXG5kZWZhdWx0cy51cmwuZXRoZXJzY2FuID0gJ2h0dHBzOi8vZXRoZXJzY2FuLmlvL3Rva2VuLzB4NEJhNmREZDdiODllZDgzOEZFZDI1ZDIwOEQ0ZjY0NDEwNkUzNDI3OSdcbmRlZmF1bHRzLnVybC5jb2luZ2Vja28gPSAnaHR0cHM6Ly93d3cuY29pbmdlY2tvLmNvbS9lbi9jb2lucy92ZXRoZXInXG5kZWZhdWx0cy51cmwudW5pc3dhcCA9ICdodHRwczovL3VuaXN3YXAuZXhjaGFuZ2Uvc3dhcC8weDRiYTZkZGQ3Yjg5ZWQ4MzhmZWQyNWQyMDhkNGY2NDQxMDZlMzQyNzknXG5kZWZhdWx0cy51cmwuZGlzY29yZCA9ICdodHRwczovL2Rpc2NvcmQuZ2cvdmFkZXJwcm90b2NvbCdcbmRlZmF1bHRzLnVybC50ZWxlZ3JhbSA9ICdodHRwczovL3QubWUvdmFkZXJwcm90b2NvbCdcbmRlZmF1bHRzLnVybC5naXRodWIgPSAnaHR0cHM6Ly9naXRodWIuY29tL3ZldGhlcmFzc2V0LydcblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdHNcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./common/defaults.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sections_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/Hero */ \"./sections/Hero.js\");\n\n\nvar _jsxFileName = \"/home/augustin/vader-landing/pages/index.js\";\n\n\n\n\n\nconst Home = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Vader - decentralized liquidity protocol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n      maxWidth: \"75rem\",\n      m: \"0 auto\",\n      p: {\n        base: '0 1.25rem',\n        md: '0 2.5rem'\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sections_Hero__WEBPACK_IMPORTED_MODULE_4__[\"Hero\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 5\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJiYXNlIiwibWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUVsQixzQkFDQztBQUFBLDRCQUNDLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBSUMscUVBQUMsb0RBQUQ7QUFBSyxjQUFRLEVBQUMsT0FBZDtBQUFzQixPQUFDLEVBQUMsUUFBeEI7QUFBaUMsT0FBQyxFQUFFO0FBQUVDLFlBQUksRUFBRSxXQUFSO0FBQXFCQyxVQUFFLEVBQUU7QUFBekIsT0FBcEM7QUFBQSw2QkFDQyxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRDtBQUFBLGtCQUREO0FBVUEsQ0FaRDs7QUFjZUYsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vc2VjdGlvbnMvSGVybydcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPlZhZGVyIC0gZGVjZW50cmFsaXplZCBsaXF1aWRpdHkgcHJvdG9jb2w8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PEJveCBtYXhXaWR0aD0nNzVyZW0nIG09JzAgYXV0bycgcD17eyBiYXNlOiAnMCAxLjI1cmVtJywgbWQ6ICcwIDIuNXJlbScgfX0+XG5cdFx0XHRcdDxIZXJvLz5cblx0XHRcdDwvQm94PlxuXHRcdDwvPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./sections/Hero.js":
/*!**************************!*\
  !*** ./sections/Hero.js ***!
  \**************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hero\", function() { return Hero; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _common_defaults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/defaults */ \"./common/defaults.js\");\n\nvar _jsxFileName = \"/home/augustin/vader-landing/sections/Hero.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nconst Hero = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const startDapp = e => {\n    e.preventDefault();\n    router.push(_common_defaults__WEBPACK_IMPORTED_MODULE_4__[\"default\"].url.dapp);\n  };\n\n  const style = {\n    w: {\n      base: '100%',\n      md: '50%'\n    },\n    minH: {\n      base: '360px',\n      md: '615px'\n    },\n    flexFlow: 'column',\n    justifyContent: 'center'\n  };\n  const align = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useBreakpointValue\"])({\n    base: 'center ',\n    md: 'flex-end'\n  });\n  const width = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"useBreakpointValue\"])({\n    base: '83%',\n    md: ''\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], _objectSpread(_objectSpread({}, props), {}, {\n    flexWrap: {\n      base: 'wrap-reverse',\n      md: 'nowrap'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], _objectSpread(_objectSpread({}, style), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Heading\"], {\n        as: \"h1\",\n        size: \"xl\",\n        children: \"Decenetralized liquidity protocol\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Box\"], {\n        as: \"h2\",\n        size: \"md\",\n        fontWeight: \"normal\",\n        textAlign: \"justify\",\n        children: \"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n        size: \"lg\",\n        maxWidth: \"156px\",\n        variant: \"outline\",\n        onClick: startDapp,\n        children: \"Acquire now\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 5\n      }, undefined)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__[\"Flex\"], _objectSpread({}, style), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 4\n    }, undefined)]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, undefined);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zZWN0aW9ucy9IZXJvLmpzP2E5YTIiXSwibmFtZXMiOlsiSGVybyIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic3RhcnREYXBwIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImRlZmF1bHRzIiwidXJsIiwiZGFwcCIsInN0eWxlIiwidyIsImJhc2UiLCJtZCIsIm1pbkgiLCJmbGV4RmxvdyIsImp1c3RpZnlDb250ZW50IiwiYWxpZ24iLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLElBQUksR0FBSUMsS0FBRCxJQUFXO0FBRTlCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTUMsU0FBUyxHQUFJQyxDQUFELElBQU87QUFDeEJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBSixVQUFNLENBQUNLLElBQVAsQ0FBWUMsd0RBQVEsQ0FBQ0MsR0FBVCxDQUFhQyxJQUF6QjtBQUNBLEdBSEQ7O0FBS0EsUUFBTUMsS0FBSyxHQUFHO0FBQ2JDLEtBQUMsRUFBRTtBQUFFQyxVQUFJLEVBQUUsTUFBUjtBQUFnQkMsUUFBRSxFQUFFO0FBQXBCLEtBRFU7QUFFYkMsUUFBSSxFQUFFO0FBQUVGLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxRQUFFLEVBQUU7QUFBckIsS0FGTztBQUdiRSxZQUFRLEVBQUUsUUFIRztBQUliQyxrQkFBYyxFQUFFO0FBSkgsR0FBZDtBQU9BLFFBQU1DLEtBQUssR0FBR0MsMkVBQWtCLENBQUM7QUFDaENOLFFBQUksRUFBRSxTQUQwQjtBQUVoQ0MsTUFBRSxFQUFFO0FBRjRCLEdBQUQsQ0FBaEM7QUFLQSxRQUFNTSxLQUFLLEdBQUdELDJFQUFrQixDQUFDO0FBQ2hDTixRQUFJLEVBQUUsS0FEMEI7QUFFaENDLE1BQUUsRUFBRTtBQUY0QixHQUFELENBQWhDO0FBS0Esc0JBQ0MscUVBQUMscURBQUQsa0NBQVViLEtBQVY7QUFBaUIsWUFBUSxFQUFFO0FBQUVZLFVBQUksRUFBRSxjQUFSO0FBQXdCQyxRQUFFLEVBQUU7QUFBNUIsS0FBM0I7QUFBQSw0QkFDQyxxRUFBQyxxREFBRCxrQ0FBVUgsS0FBVjtBQUFBLDhCQUNDLHFFQUFDLHdEQUFEO0FBQVMsVUFBRSxFQUFDLElBQVo7QUFBaUIsWUFBSSxFQUFDLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBSUMscUVBQUMsb0RBQUQ7QUFBSyxVQUFFLEVBQUMsSUFBUjtBQUFhLFlBQUksRUFBQyxJQUFsQjtBQUF1QixrQkFBVSxFQUFDLFFBQWxDO0FBQTJDLGlCQUFTLEVBQUMsU0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkQsZUFPQyxxRUFBQyx1REFBRDtBQUNDLFlBQUksRUFBQyxJQUROO0FBRUMsZ0JBQVEsRUFBQyxPQUZWO0FBR0MsZUFBTyxFQUFDLFNBSFQ7QUFJQyxlQUFPLEVBQUVQLFNBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBa0JDLHFFQUFDLHFEQUFELG9CQUFVTyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUREO0FBdUJBLENBakRNIiwiZmlsZSI6Ii4vc2VjdGlvbnMvSGVyby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZsZXgsIEhlYWRpbmcsIEJveCwgQnV0dG9uLCB1c2VCcmVha3BvaW50VmFsdWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgZGVmYXVsdHMgZnJvbSAnLi4vY29tbW9uL2RlZmF1bHRzJ1xuXG5leHBvcnQgY29uc3QgSGVybyA9IChwcm9wcykgPT4ge1xuXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cblx0Y29uc3Qgc3RhcnREYXBwID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRyb3V0ZXIucHVzaChkZWZhdWx0cy51cmwuZGFwcClcblx0fVxuXG5cdGNvbnN0IHN0eWxlID0ge1xuXHRcdHc6IHsgYmFzZTogJzEwMCUnLCBtZDogJzUwJScgfSxcblx0XHRtaW5IOiB7IGJhc2U6ICczNjBweCcsIG1kOiAnNjE1cHgnIH0sXG5cdFx0ZmxleEZsb3c6ICdjb2x1bW4nLFxuXHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcblx0fVxuXG5cdGNvbnN0IGFsaWduID0gdXNlQnJlYWtwb2ludFZhbHVlKHtcblx0XHRiYXNlOiAnY2VudGVyICcsXG5cdFx0bWQ6ICdmbGV4LWVuZCcsXG5cdH0pXG5cblx0Y29uc3Qgd2lkdGggPSB1c2VCcmVha3BvaW50VmFsdWUoe1xuXHRcdGJhc2U6ICc4MyUnLFxuXHRcdG1kOiAnJyxcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDxGbGV4IHsuLi5wcm9wc30gZmxleFdyYXA9e3sgYmFzZTogJ3dyYXAtcmV2ZXJzZScsIG1kOiAnbm93cmFwJyB9fT5cblx0XHRcdDxGbGV4IHsuLi5zdHlsZX0+XG5cdFx0XHRcdDxIZWFkaW5nIGFzPSdoMScgc2l6ZT0neGwnPlxuXHRcdFx0XHRcdERlY2VuZXRyYWxpemVkIGxpcXVpZGl0eSBwcm90b2NvbFxuXHRcdFx0XHQ8L0hlYWRpbmc+XG5cdFx0XHRcdDxCb3ggYXM9J2gyJyBzaXplPSdtZCcgZm9udFdlaWdodD0nbm9ybWFsJyB0ZXh0QWxpZ249J2p1c3RpZnknPlxuXHRcdFx0XHRcdE5lbW8gZW5pbSBpcHNhbSB2b2x1cHRhdGVtIHF1aWEgdm9sdXB0YXMgc2l0IGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3MgcXVpIHJhdGlvbmUgdm9sdXB0YXRlbSBzZXF1aSBuZXNjaXVudC4gTmVxdWUgcG9ycm8gcXVpc3F1YW0gZXN0LCBxdWkgZG9sb3JlbS5cblx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRzaXplPSdsZydcblx0XHRcdFx0XHRtYXhXaWR0aD0nMTU2cHgnXG5cdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZSdcblx0XHRcdFx0XHRvbkNsaWNrPXtzdGFydERhcHB9XG5cdFx0XHRcdD5cblx0XHRcdFx0XHRBY3F1aXJlIG5vd1xuXHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDwvRmxleD5cblxuXHRcdFx0PEZsZXggey4uLnN0eWxlfT5cblx0XHRcdDwvRmxleD5cblx0XHQ8L0ZsZXg+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/Hero.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });