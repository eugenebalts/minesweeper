/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n.container {\\r\\n    position: relative;\\r\\n    padding: 10px;\\r\\n    margin: 0 auto;\\r\\n    width: fit-content;\\r\\n    border-radius: 20px;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    background-color: rgba(127, 127, 127, .2);\\r\\n    gap: 20px;\\r\\n}\\r\\n\\r\\n.container__blocker {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    background-color: rgba(0, 0, 0, .4);\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.blocker__content {\\r\\n    font-size: 20px;\\r\\n    font-weight: 700;\\r\\n}\\r\\n\\r\\n.blocker__button {\\r\\n    padding: 10px 20px;\\r\\n    background-color: rgba(0, 0, 0, .3);\\r\\n    font-size: 20px;\\r\\n    border-radius: 20px;\\r\\n    color: whitesmoke;\\r\\n    font-weight: 700;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.blocker__button:hover {\\r\\n    background-color: rgba(0, 0, 0, .6);\\r\\n}\\r\\n\\r\\n.container__field {\\r\\n    position: relative;\\r\\n    width: fit-content;\\r\\n    display: grid;\\r\\n    gap: 1px;\\r\\n}\\r\\n\\r\\n.container__help-panel {\\r\\n    width: 100%;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.panel__clicks {\\r\\n    display: block;\\r\\n    padding: 10px;\\r\\n    font-weight: 700;\\r\\n    text-align: center;\\r\\n    width: 10%;\\r\\n}\\r\\n\\r\\n.panel__duration {\\r\\n    display: block;\\r\\n    padding: 10px;\\r\\n    font-weight: 700;\\r\\n    text-align: center;\\r\\n    width: 50%;\\r\\n}\\r\\n\\r\\n.panel__marker {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    gap: 2px;\\r\\n}\\r\\n\\r\\n.panel__marker p{\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n.panel__marker img {\\r\\n    text-align: center;\\r\\n    padding: 10px;\\r\\n    width: 20px;\\r\\n    background-color: white;\\r\\n    border-radius: 10px;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.panel__marker img:hover {\\r\\n    opacity: .7;\\r\\n}\\r\\n\\r\\n\\r\\n.field__pregame {\\r\\n    box-sizing: border-box;\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    padding: 20px;\\r\\n    font-size: 30px;\\r\\n    font-weight: 700;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    background-color: rgba(2, 2, 0, .3);\\r\\n    color: whitesmoke;\\r\\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.container__button {\\r\\n    padding: 10px;\\r\\n    background-color: rgba(0, 0, 0, .3);\\r\\n    font-size: 20px;\\r\\n    border-radius: 5px;\\r\\n    cursor: pointer;\\r\\n    transition: all .1s linear;\\r\\n}\\r\\n\\r\\n.container__button:hover {\\r\\n    background-color: rgba(0, 0, 0, .6);\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n.field__cell {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    box-sizing: border-box;\\r\\n    background-color: cadetblue;\\r\\n    border: 1px solid rgba(1, 1, 1, 0.1);\\r\\n    border-radius: 10%;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.field__cell:hover {\\r\\n    opacity: .8;\\r\\n}\\r\\n\\r\\n.field__cell img {\\r\\n    width: 80%;\\r\\n}\\r\\n\\r\\n@media (max-width: 500px) {\\r\\n    .container__field {\\r\\n        grid-template-columns: repeat(10, 20px);\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://minesweeper/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/bomb.png":
/*!*****************************!*\
  !*** ./src/assets/bomb.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/bomb.png\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/bomb.png?");

/***/ }),

/***/ "./src/assets/marker.png":
/*!*******************************!*\
  !*** ./src/assets/marker.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/marker.png\");\n\n//# sourceURL=webpack://minesweeper/./src/assets/marker.png?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://minesweeper/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://minesweeper/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _assets_bomb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/bomb.png */ \"./src/assets/bomb.png\");\n/* harmony import */ var _assets_marker_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/marker.png */ \"./src/assets/marker.png\");\n\r\n\r\n\r\n// import createField from \"./modules/filed\";\r\n// import fillBombs from './modules/fillBombs';\r\n\r\ndocument.querySelector('body').append('Привет, друг! Во имя всей человеческой доброты, пожалуйста, дайте мне один денечек, я буду безмерно благодарен, выдалась очень тяжелая неделька и я думаю, мне только денечек и я доделаю эту замечательную игрульку. Свято верю и заранее благодарю ♥')\r\n\r\nasync function initGame() {\r\n\r\n    async function checkContainer() {\r\n        if (document.querySelector('.container') == null) {\r\n        } else {\r\n            document.querySelector('.container').remove()\r\n        }\r\n    }\r\n\r\n    const difficulty = {\r\n        'easy': [10, 10 , 10],\r\n        'medium': [15, 15, 40],\r\n        'hard': [25, 25, 99]\r\n    }\r\n    \r\n    let cells;\r\n    let field;\r\n    let container;\r\n    let startGameBtn;\r\n    let selection;\r\n    let selectionLabel;\r\n    let pregame;\r\n    let clicksCounter;\r\n    let duration;\r\n    let markerIco;\r\n    let empty;\r\n\r\n    async function variables() {\r\n        cells = document.querySelectorAll('.field__cell');\r\n        field = document.querySelector('.container__field');\r\n        container = document.querySelector('.container');\r\n        selection = document.querySelector('.container__selection')\r\n        startGameBtn = document.querySelector('.container__button');\r\n        pregame = document.querySelector('.field__pregame');\r\n        clicksCounter = document.querySelector('.panel__clicks');\r\n        duration = document.querySelector('.panel__duration')\r\n        markerIco = document.querySelector('.panel__marker img');\r\n        empty = document.querySelector('.container__empty');\r\n        selectionLabel = document.querySelector('.container__label-selection')\r\n    }\r\n\r\n    let bombsArray = [];\r\n    let matrix = [];\r\n    let obj = {};\r\n    let index = 0;\r\n    let clicks = 0;\r\n    let dur = 0;\r\n    let gameStarted = false;\r\n    let isMarker = false;\r\n    let markCounter = 1;\r\n\r\n    let leftSide = [];\r\n    let rightSide = [];\r\n    let topSide = [];\r\n    let downSide = [];\r\n    let diagonals = [];\r\n\r\n    function startProps() {\r\n        bombsArray = [];\r\n        matrix = [];\r\n        obj = {};\r\n        index = 0;\r\n        clicks = 0;\r\n        dur = 0;\r\n        gameStarted = false;\r\n\r\n        leftSide = [];\r\n        rightSide = [];\r\n        topSide = [];\r\n        downSide = [];\r\n        diagonals = [];\r\n        isMarker = false;\r\n        markCounter = 1;\r\n    }\r\n    \r\n    async function createMatrix(cols, rows) {\r\n        for(let i = 0; i < rows; i++){\r\n            matrix[i] = [];\r\n            for(let j = 0; j < cols; j++){\r\n                matrix[i][j] = ((i * rows) + j);\r\n                obj[((i * rows) + j)] = 0;\r\n            }\r\n        }\r\n    }\r\n    \r\n    async function createField(cols, rows) {\r\n        const container = document.createElement('div');\r\n        container.classList.add('container');\r\n    \r\n        const selection = document.createElement('select');\r\n        selection.classList.add('container__selection');\r\n    \r\n        const option1 = document.createElement('option');\r\n        option1.text = 'Easy - field 10x10 with 10 mines';\r\n        option1.value = 'Option 1'\r\n        const option2 = document.createElement('option');\r\n        option2.text = 'Medium - field 15x15 with 40 mines';\r\n        option2.value = 'Option 2'\r\n        const option3 = document.createElement('option');\r\n        option3.text = 'Hard - Field 25x25 with 99 mines';\r\n        option3.value = 'Option 3'\r\n    \r\n        selection.append(option1)\r\n        selection.append(option2)\r\n        selection.append(option3)\r\n\r\n    \r\n        const label = document.createElement('label');\r\n        label.innerHTML = 'Choose difficulty level: '\r\n        label.append(selection)\r\n        label.style.textAlign = 'center';\r\n        label.classList.add('container__label-selection')\r\n    \r\n    \r\n        const startGameBtn = document.createElement('div');\r\n        startGameBtn.classList.add('container__button');\r\n        startGameBtn.innerHTML = 'Start Game';\r\n\r\n        const empty = document.createElement('div');\r\n        empty.style.minWidth = '300px';\r\n        empty.style.minHeight = '300px';\r\n        empty.style.position = 'relative'\r\n        empty.classList.add('container__empty')\r\n    \r\n        const pregame = document.createElement('div')\r\n        pregame.classList.add('field__pregame');\r\n        const paragraph = document.createElement('p')\r\n        paragraph.innerHTML = 'Please, choose options and start a the game'\r\n        pregame.append(paragraph)\r\n\r\n        const helpPanel = document.createElement('div');\r\n        helpPanel.classList.add('container__help-panel');\r\n\r\n        const clicksCounter = document.createElement('input');\r\n        clicksCounter.classList.add('panel__clicks');\r\n        clicksCounter.value = clicks;\r\n        clicksCounter.disabled = true;\r\n        const clicksLabel = document.createElement('label');\r\n        clicksLabel.innerHTML = 'Clicks: '\r\n        clicksLabel.append(clicksCounter)\r\n\r\n        const duration = document.createElement('input');\r\n        duration.classList.add('panel__duration');\r\n        duration.value = dur;\r\n        duration.disabled = true;\r\n        const durationLabel = document.createElement('label');\r\n        durationLabel.innerHTML = 'Game duration, sec: '\r\n        durationLabel.append(duration)\r\n\r\n        const marker = document.createElement('div');\r\n        marker.classList.add('panel__marker');\r\n        const markerTitle = document.createElement('p');\r\n        markerTitle.innerHTML = 'Mark cells';\r\n        const markerIco = document.createElement('img');\r\n        markerIco.src = _assets_marker_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n        marker.append(markerTitle);\r\n        marker.append(markerIco)\r\n\r\n        \r\n        helpPanel.append(clicksLabel);\r\n        helpPanel.append(durationLabel);\r\n        helpPanel.append(marker);\r\n        container.append(helpPanel);\r\n    \r\n        empty.append(pregame)\r\n        container.append(empty)\r\n\r\n        container.append(label)\r\n        container.append(startGameBtn)\r\n\r\n        document.querySelector('body').append(container);\r\n    }\r\n\r\n    async function createCells(cols, rows, bombs) {\r\n        const field = document.createElement('div');\r\n        field.classList.add('container__field');\r\n        let cellSize;\r\n        function size() {\r\n            if (window.innerWidth <= 500) {\r\n                if (cols == 10) {\r\n                    cellSize = '30px';\r\n                } else if (cols == 15) {\r\n                    cellSize = '20px';\r\n                } else if (cols == 25) {\r\n                    cellSize = '15px';\r\n                }\r\n            } else {\r\n                if (cols == 10) {\r\n                    cellSize = '40px';\r\n                } else if (cols == 15) {\r\n                    cellSize = '30px';\r\n                } else if (cols == 25) {\r\n                    cellSize = '15px';\r\n                }\r\n            }\r\n            field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;\r\n        }\r\n        size()\r\n        window.addEventListener('resize', size);\r\n        \r\n        for (let i = 0; i < (cols * rows); i++) {\r\n            const cell = document.createElement('div');\r\n            cell.classList.add('field__cell');\r\n            cell.style.height = cellSize;\r\n            cell.style.width = cellSize;\r\n            cell.style.fontWeight = '600'\r\n            cell.setAttribute('number', i)\r\n            cell.setAttribute('opened', false)\r\n            cell.setAttribute('marked', false)\r\n            field.append(cell);\r\n        }\r\n        container.insertBefore(field, selectionLabel)\r\n        await variables()\r\n\r\n        function sizes() {\r\n            cells.forEach(cell => {\r\n                if (window.innerWidth <= 500) {\r\n                    if (cols == 10) {\r\n                        cell.style.width = '30px'\r\n                        cell.style.height = '30px'\r\n                        cellSize = '30px';\r\n                    } else if (cols == 15) {\r\n                        cell.style.width = '20px'\r\n                        cell.style.height = '20px'\r\n                        cellSize = '20px';\r\n                    } else if (cols == 25) {\r\n                        cell.style.width = '15px'\r\n                        cell.style.height = '15px'\r\n                        cellSize = '15px';\r\n                    }\r\n                    field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;\r\n                } else {\r\n                    if (cols == 10) {\r\n                        cell.style.width = '40px'\r\n                        cell.style.height = '40px'\r\n                        cellSize = '40px';\r\n                    } else if (cols == 15) {\r\n                        cell.style.width = '30px'\r\n                        cell.style.height = '30px'\r\n                        cellSize = '30px';\r\n                    } else if (cols == 25) {\r\n                        cell.style.width = '20px'\r\n                        cell.style.height = '20px'\r\n                        cellSize = '20px';\r\n                    }\r\n                    field.style.gridTemplateColumns = `repeat(${cols}, ${cellSize})`;\r\n                }\r\n            })\r\n        }\r\n        sizes()\r\n        window.addEventListener('resize', sizes);\r\n    }\r\n\r\n    async function minesweeper(cols, rows, bombs) {\r\n        if (empty) {\r\n            container.removeChild(empty)\r\n        }\r\n        if (field) {\r\n            field.remove()\r\n        }\r\n        await createCells(cols, rows, bombs);\r\n        await createMatrix(cols, rows, bombs)\r\n        await fillBombs(cols, rows, bombs);\r\n        markCell()\r\n    }\r\n\r\n    async function nextStart(cols, rows, bombs) {\r\n        await createMatrix(cols, rows, bombs)\r\n        await fillBombs(cols, rows, bombs);\r\n    }\r\n\r\n    function markListener() {\r\n        markCounter += 1;\r\n        if (markCounter % 2 == 0) {\r\n            isMarker = true;\r\n            markerIco.style.opacity = '.5'\r\n        } else {\r\n            isMarker = false;\r\n            markerIco.style.opacity = '1'\r\n        }\r\n    }\r\n\r\n    async function markCell() {\r\n        markerIco.style.opacity = 1;\r\n        markerIco.addEventListener('click', markListener);\r\n    }\r\n\r\n    async function fillBombs (cols, rows, bombs) {\r\n        async function randomize () {\r\n            let randomNum = Math.floor(Math.random() * cells.length);\r\n            for (let i =  bombsArray.length; i < bombs; i++) {\r\n                if (randomNum * 1 ===  index * 1) {\r\n                    randomize();\r\n                } else if (!bombsArray.includes(randomNum)) {  \r\n                    bombsArray.push(randomNum);\r\n                } else {\r\n                    randomize();\r\n                }\r\n            }\r\n        }\r\n\r\n        async function listener (event) {\r\n            if (!isMarker && !event.target.classList.contains('field__cell') && !event.target.classList.contains('container__field')) {\r\n                event.target.closest('.field__cell').setAttribute('marked', false)\r\n                event.target.closest('.field__cell').removeChild(event.target.closest('.field__cell').firstChild);\r\n            } else {\r\n                if (event.target.classList.contains('field__cell') && !isMarker) {\r\n                    index = parseInt(event.target.getAttribute('number'));\r\n                    await randomize()\r\n                    if (event.target.getAttribute('opened') == 'false') {\r\n                        clicks++\r\n                        clicksCounter.value = clicks;\r\n                        event.target.setAttribute('opened', true)\r\n                        console.log(clicks)\r\n                    }\r\n                    if (clicks == 1) {\r\n                        await fillCells(cols, rows, bombs)\r\n                        clicks++\r\n                    }\r\n                    openCells(cols, rows, bombs, index)\r\n                }\r\n            }\r\n\r\n            if (event.target.classList.contains('field__cell') && isMarker) {\r\n                if (event.target.getAttribute('opened') == 'false') {\r\n                    event.target.innerHTML = `<img class=\"cell__marker\" src=\"${_assets_marker_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" alt=\"marker\" style=\"width: 100%; height: 100%\">`\r\n                    isMarker = false;\r\n                    markCounter -= 1;\r\n                    markerIco.style.opacity = '1';\r\n                    event.target.setAttribute('marked', true)\r\n                }\r\n            }\r\n        }\r\n        field.addEventListener('click', listener);\r\n    }\r\n\r\n    async function fillCells(cols, rows) {\r\n        for (let i = 0; i < bombsArray.length; i++) {\r\n            let bombsLineLeft = (bombsArray[i] + 1) % (cols) !== 0;\r\n            let bombsLineRight = bombsArray[i] !== 0 && bombsArray[i] % cols !== 0;\r\n            let bombsLineTop = bombsArray[i] <= (cols * rows) - cols;\r\n            let bombsLineDown = bombsArray[i] >= cols;\r\n\r\n            let diagTopLeft = bombsArray[i] - (cols) - 1,\r\n                diagTopRight = bombsArray[i] - (cols) + 1,\r\n                diagDownLeft = bombsArray[i] + (cols) - 1,\r\n                diagDownRight = bombsArray[i] + (cols) + 1;\r\n            \r\n            if (bombsLineLeft) obj[bombsArray[i] + 1] += 1;\r\n            if (bombsLineRight) obj[bombsArray[i] - 1] += 1;\r\n            if (bombsLineTop) obj[bombsArray[i] + cols] += 1;\r\n            if (bombsLineDown) obj[bombsArray[i] - cols] += 1;\r\n\r\n\r\n            if (bombsLineLeft || bombsLineRight || bombsLineTop || bombsLineDown) {\r\n                // DIAGONALS - bombsInCenter \r\n                if (bombsLineLeft && bombsLineRight && bombsLineTop && bombsLineDown) {\r\n                    obj[diagTopLeft] += 1;\r\n                    obj[diagTopRight] += 1;\r\n                    obj[diagDownLeft] += 1;\r\n                    obj[diagDownRight] += 1;\r\n\r\n                }  else\r\n                // DIAGONALS - bombsLineTop\r\n                if (bombsArray[i] < cols) { \r\n                    if (bombsArray[i] !== cols - 1)  obj[diagDownRight] += 1;\r\n                    if (bombsArray[i] !== 0)  obj[diagDownLeft] += 1;\r\n                } else\r\n\r\n                if (bombsArray[i] >= (cols * rows) - cols) {\r\n                    if (bombsArray[i] !== (cols * rows) - cols) obj[diagTopLeft] += 1;\r\n                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagTopRight] += 1;\r\n                } else \r\n                \r\n                // DIAGONALS - bombsLineLeft\r\n                if (bombsArray[i] % cols == 0 ) {\r\n                    if (bombsArray[i]  !== 0) obj[diagTopRight] += 1;\r\n                    if (bombsArray[i] !== ((cols * rows) - cols)) obj[diagDownRight] += 1;\r\n                    \r\n                } else \r\n                \r\n                //DIAGONALS - bombsLineRight\r\n                if ((bombsArray[i] + 1) % cols == 0) {\r\n                    if (bombsArray[i] !== cols - 1) obj[diagTopLeft] += 1;\r\n                    if (bombsArray[i] !== (cols * rows) - 1) obj[diagDownLeft] += 1;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    async function openCells(cols, rows, bombs, index) {\r\n        if (obj[index] == 0) {\r\n            cells[index].innerHTML = ' ';\r\n        } else cells[index].innerHTML = obj[index];\r\n        cells[index].style.backgroundColor = 'rgba(100, 100, 100, 0.3)'\r\n\r\n        if (bombsArray.includes(index)) {\r\n            cells[index].innerHTML = `<img src=\"${_assets_bomb_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Bomb\">`\r\n            cells[index].style.backgroundColor = 'rgba(255, 0, 0, 0.5)'\r\n            gameOver()\r\n        } else {\r\n            let winNumber = (cols * rows) - bombs + 1\r\n            if (clicks == winNumber) congratulations()\r\n        }\r\n\r\n        checkInner(cols, rows, bombs, index)\r\n    }\r\n\r\n    async function checkInner(cols, rows, bombs, index) {\r\n        if (cells[index].innerHTML == 1) cells[index].style.color = 'blue';\r\n        if (cells[index].innerHTML == 2) cells[index].style.color = 'green';\r\n        if (cells[index].innerHTML == 3) cells[index].style.color = 'purple';\r\n        if (cells[index].innerHTML == 4) cells[index].style.color = 'Crimson';\r\n        if (cells[index].innerHTML == 5) cells[index].style.color = 'Red';\r\n        if (cells[index].innerHTML == 6) cells[index].style.color = 'FireBrick';\r\n        if (cells[index].innerHTML == 7) cells[index].style.color = 'DarkRed';\r\n        if (cells[index].innerHTML == 8) cells[index].style.color = 'brown';\r\n    }\r\n\r\n    async function gameOver() {\r\n        const background = document.createElement('div');\r\n        background.classList.add('container__blocker');\r\n        const paragraph = document.createElement('p')\r\n        paragraph.classList.add('blocker__content');\r\n        paragraph.innerHTML = 'YOU LOSE! GAME OVER!'\r\n        paragraph.style.color = '#ff2400'\r\n        background.append(paragraph)\r\n\r\n        const button = document.createElement('div');\r\n        button.classList.add('blocker__button');\r\n        button.innerHTML = 'Try again'\r\n        background.append(button)\r\n        container.append(background);\r\n        clearInterval(interval)\r\n        //TODO LOCAL STORAGE DURATION\r\n\r\n        button.addEventListener('click', () => {\r\n            initGame()\r\n        })\r\n\r\n    }\r\n\r\n    async function congratulations() {\r\n        const background = document.createElement('div');\r\n        background.classList.add('container__blocker');\r\n        const paragraph = document.createElement('p')\r\n        paragraph.classList.add('blocker__content');\r\n        paragraph.innerHTML = 'YOU WIN! CONGRATULATIONS!'\r\n        paragraph.style.color = '#99ff99'\r\n        background.append(paragraph)\r\n\r\n        const button = document.createElement('div');\r\n        button.classList.add('blocker__button');\r\n        button.innerHTML = 'Play again'\r\n        background.append(button)\r\n        container.append(background);\r\n        openBombs()\r\n        clearInterval(interval)\r\n\r\n        //TODO LOCAL STORAGE DURATION\r\n\r\n        button.addEventListener('click', () => {\r\n            initGame()\r\n        })\r\n    }\r\n\r\n    async function openBombs() {\r\n        bombsArray.forEach(number => {\r\n            cells[number].innerHTML = `<img src=\"${_assets_bomb_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Bomb\">`\r\n            cells[number].style.backgroundColor = '#99ff99';\r\n        })\r\n    }\r\n\r\n    let interval;\r\n\r\n    async function startGame() {\r\n        startGameBtn.addEventListener('click', () => {\r\n            if (interval) {\r\n                clearInterval(interval)\r\n            }\r\n            startProps()\r\n            duration.value = dur;\r\n            clicksCounter.value = clicks\r\n            if (empty) {\r\n                if (empty.contains(pregame)) empty.removeChild(pregame);\r\n            }\r\n\r\n            let selectionValue = selection.options[selection.selectedIndex].value;\r\n            if (selectionValue == 'Option 1') minesweeper(...difficulty['easy'])\r\n            if (selectionValue == 'Option 2') minesweeper(...difficulty['medium'])\r\n            if (selectionValue == 'Option 3') minesweeper(...difficulty['hard']);\r\n            gameStarted = true;\r\n            interval = setInterval(() => {\r\n                dur += 1\r\n                duration.value = dur;\r\n            }, 1000)\r\n        })\r\n    }\r\n\r\n    await checkContainer()\r\n    await createField(...difficulty['easy']);\r\n    await variables()\r\n    await startGame()\r\n}\r\n\r\ninitGame()\r\n\r\n\n\n//# sourceURL=webpack://minesweeper/./src/index.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;