/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _styles_tailwind_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/tailwind.scss */ "./src/styles/tailwind.scss");



var Popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null);
var popupElement = document.createElement('div');
document.body.appendChild(popupElement);
if (!popupElement) {
  throw new Error('Can not find popupElement');
}
var popupRoot = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(popupElement);
popupRoot.render(Popup);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/tailwind.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/tailwind.scss ***!
  \*************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, ::before, ::after {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  \n}\n::backdrop {\n    --tw-border-spacing-x: 0;\n    --tw-border-spacing-y: 0;\n    --tw-translate-x: 0;\n    --tw-translate-y: 0;\n    --tw-rotate: 0;\n    --tw-skew-x: 0;\n    --tw-skew-y: 0;\n    --tw-scale-x: 1;\n    --tw-scale-y: 1;\n    --tw-pan-x:  ;\n    --tw-pan-y:  ;\n    --tw-pinch-zoom:  ;\n    --tw-scroll-snap-strictness: proximity;\n    --tw-ordinal:  ;\n    --tw-slashed-zero:  ;\n    --tw-numeric-figure:  ;\n    --tw-numeric-spacing:  ;\n    --tw-numeric-fraction:  ;\n    --tw-ring-inset:  ;\n    --tw-ring-offset-width: 0px;\n    --tw-ring-offset-color: #fff;\n    --tw-ring-color: rgb(59 130 246 / 0.5);\n    --tw-ring-offset-shadow: 0 0 #0000;\n    --tw-ring-shadow: 0 0 #0000;\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    --tw-blur:  ;\n    --tw-brightness:  ;\n    --tw-contrast:  ;\n    --tw-grayscale:  ;\n    --tw-hue-rotate:  ;\n    --tw-invert:  ;\n    --tw-saturate:  ;\n    --tw-sepia:  ;\n    --tw-drop-shadow:  ;\n    --tw-backdrop-blur:  ;\n    --tw-backdrop-brightness:  ;\n    --tw-backdrop-contrast:  ;\n    --tw-backdrop-grayscale:  ;\n    --tw-backdrop-hue-rotate:  ;\n    --tw-backdrop-invert:  ;\n    --tw-backdrop-opacity:  ;\n    --tw-backdrop-saturate:  ;\n    --tw-backdrop-sepia:  \n}\n.container {\n    width: 100%\n}\n@media (min-width: 640px) {\n    .container {\n        max-width: 640px\n    }\n}\n@media (min-width: 768px) {\n    .container {\n        max-width: 768px\n    }\n}\n@media (min-width: 1024px) {\n    .container {\n        max-width: 1024px\n    }\n}\n@media (min-width: 1280px) {\n    .container {\n        max-width: 1280px\n    }\n}\n@media (min-width: 1536px) {\n    .container {\n        max-width: 1536px\n    }\n}\n.absolute {\n    position: absolute\n}\n.relative {\n    position: relative\n}\n.bottom-0 {\n    bottom: 0px\n}\n.left-0 {\n    left: 0px\n}\n.mx-auto {\n    margin-left: auto;\n    margin-right: auto\n}\n.mb-8 {\n    margin-bottom: 2rem\n}\n.mb-2 {\n    margin-bottom: 0.5rem\n}\n.mt-2 {\n    margin-top: 0.5rem\n}\n.mt-4 {\n    margin-top: 1rem\n}\n.mb-4 {\n    margin-bottom: 1rem\n}\n.box-border {\n    box-sizing: border-box\n}\n.flex {\n    display: flex\n}\n.h-full {\n    height: 100%\n}\n.h-10 {\n    height: 2.5rem\n}\n.min-h-screen {\n    min-height: 100vh\n}\n.w-full {\n    width: 100%\n}\n.max-w-screen-lg {\n    max-width: 1024px\n}\n.items-center {\n    align-items: center\n}\n.justify-center {\n    justify-content: center\n}\n.overflow-hidden {\n    overflow: hidden\n}\n.whitespace-pre-wrap {\n    white-space: pre-wrap\n}\n.rounded-xl {\n    border-radius: 0.75rem\n}\n.rounded-md {\n    border-radius: 0.375rem\n}\n.border {\n    border-width: 1px\n}\n.border-solid {\n    border-style: solid\n}\n.border-slate-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(71 85 105 / var(--tw-border-opacity))\n}\n.border-slate-400\\/20 {\n    border-color: rgb(148 163 184 / 0.2)\n}\n.border-amber-400\\/20 {\n    border-color: rgb(251 191 36 / 0.2)\n}\n.border-yellow-400\\/20 {\n    border-color: rgb(250 204 21 / 0.2)\n}\n.bg-neutral-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(38 38 38 / var(--tw-bg-opacity))\n}\n.bg-slate-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(15 23 42 / var(--tw-bg-opacity))\n}\n.bg-slate-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity))\n}\n.p-6 {\n    padding: 1.5rem\n}\n.p-2 {\n    padding: 0.5rem\n}\n.p-5 {\n    padding: 1.25rem\n}\n.py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem\n}\n.px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem\n}\n.py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem\n}\n.text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem\n}\n.text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem\n}\n.text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem\n}\n.text-slate-100 {\n    --tw-text-opacity: 1;\n    color: rgb(241 245 249 / var(--tw-text-opacity))\n}\n.text-green-500 {\n    --tw-text-opacity: 1;\n    color: rgb(34 197 94 / var(--tw-text-opacity))\n}\n.text-slate-200 {\n    --tw-text-opacity: 1;\n    color: rgb(226 232 240 / var(--tw-text-opacity))\n}\n.text-slate-300 {\n    --tw-text-opacity: 1;\n    color: rgb(203 213 225 / var(--tw-text-opacity))\n}\n.text-neutral-100 {\n    --tw-text-opacity: 1;\n    color: rgb(245 245 245 / var(--tw-text-opacity))\n}\n.text-neutral-400 {\n    --tw-text-opacity: 1;\n    color: rgb(163 163 163 / var(--tw-text-opacity))\n}\n.text-neutral-300 {\n    --tw-text-opacity: 1;\n    color: rgb(212 212 212 / var(--tw-text-opacity))\n}", "",{"version":3,"sources":["webpack://./src/styles/tailwind.scss"],"names":[],"mappings":"AAAA;IAAA,wBAAA;IAAA,wBAAA;IAAA,mBAAA;IAAA,mBAAA;IAAA,cAAA;IAAA,cAAA;IAAA,cAAA;IAAA,eAAA;IAAA,eAAA;IAAA,aAAA;IAAA,aAAA;IAAA,kBAAA;IAAA,sCAAA;IAAA,eAAA;IAAA,oBAAA;IAAA,sBAAA;IAAA,uBAAA;IAAA,wBAAA;IAAA,kBAAA;IAAA,2BAAA;IAAA,4BAAA;IAAA,sCAAA;IAAA,kCAAA;IAAA,2BAAA;IAAA,sBAAA;IAAA,8BAAA;IAAA,YAAA;IAAA,kBAAA;IAAA,gBAAA;IAAA,iBAAA;IAAA,kBAAA;IAAA,cAAA;IAAA,gBAAA;IAAA,aAAA;IAAA,mBAAA;IAAA,qBAAA;IAAA,2BAAA;IAAA,yBAAA;IAAA,0BAAA;IAAA,2BAAA;IAAA,uBAAA;IAAA,wBAAA;IAAA,yBAAA;IAAA;AAAA;AAAA;IAAA,wBAAA;IAAA,wBAAA;IAAA,mBAAA;IAAA,mBAAA;IAAA,cAAA;IAAA,cAAA;IAAA,cAAA;IAAA,eAAA;IAAA,eAAA;IAAA,aAAA;IAAA,aAAA;IAAA,kBAAA;IAAA,sCAAA;IAAA,eAAA;IAAA,oBAAA;IAAA,sBAAA;IAAA,uBAAA;IAAA,wBAAA;IAAA,kBAAA;IAAA,2BAAA;IAAA,4BAAA;IAAA,sCAAA;IAAA,kCAAA;IAAA,2BAAA;IAAA,sBAAA;IAAA,8BAAA;IAAA,YAAA;IAAA,kBAAA;IAAA,gBAAA;IAAA,iBAAA;IAAA,kBAAA;IAAA,cAAA;IAAA,gBAAA;IAAA,aAAA;IAAA,mBAAA;IAAA,qBAAA;IAAA,2BAAA;IAAA,yBAAA;IAAA,0BAAA;IAAA,2BAAA;IAAA,uBAAA;IAAA,wBAAA;IAAA,yBAAA;IAAA;AAAA;AACA;IAAA;AAAA;AAAA;IAAA;QAAA;IAAA;AAAA;AAAA;IAAA;QAAA;IAAA;AAAA;AAAA;IAAA;QAAA;IAAA;AAAA;AAAA;IAAA;QAAA;IAAA;AAAA;AAAA;IAAA;QAAA;IAAA;AAAA;AACA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA,iBAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA,sBAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA,kBAAA;IAAA;AAAA;AAAA;IAAA,kBAAA;IAAA;AAAA;AAAA;IAAA,kBAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA;AAAA;AAAA;IAAA,iBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,iBAAA;IAAA;AAAA;AAAA;IAAA,iBAAA;IAAA;AAAA;AAAA;IAAA,kBAAA;IAAA;AAAA;AAAA;IAAA,mBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA;AAAA;IAAA,oBAAA;IAAA;AAAA","sourcesContent":["@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/tailwind.scss":
/*!**********************************!*\
  !*** ./src/styles/tailwind.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./tailwind.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/tailwind.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_tailwind_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSearch_Assistant"] = self["webpackChunkSearch_Assistant"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map