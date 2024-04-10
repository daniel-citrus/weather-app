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

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   current: () => (/* binding */ current),\n/* harmony export */   forecast: () => (/* binding */ forecast),\n/* harmony export */   location: () => (/* binding */ location)\n/* harmony export */ });\nclass current {\r\n    /**\r\n     * @param {object} data - Weather API 'current' object\r\n     */\r\n    constructor(data) {\r\n        this.humidity = data.humidity;\r\n        this.is_day = data.is_day;\r\n        this.last_updated = data.last_updated;\r\n        this.temp_c = data.temp_c;\r\n        this.temp_f = data.temp_f;\r\n        this.wind_kph = data.wind_kph;\r\n        this.wind_mph = data.wind_mph;\r\n    }\r\n}\r\n\r\nclass forecast {\r\n    /**\r\n     * @param {object} data - Weather API 'forecast' object\r\n     */\r\n    constructor(data) {\r\n        this.days = data.forecastday.map((dayData) => {\r\n            const {\r\n                avghumidity,\r\n                avgtemp_c,\r\n                avgtemp_f,\r\n                condition: { text: description, icon },\r\n                daily_chance_of_rain,\r\n                daily_chance_of_snow,\r\n                maxtemp_c,\r\n                maxtemp_f,\r\n                mintemp_c,\r\n                mintemp_f,\r\n                maxwind_kph,\r\n                maxwind_mph,\r\n            } = dayData.day;\r\n\r\n            return {\r\n                avghumidity,\r\n                avgtemp_c,\r\n                avgtemp_f,\r\n                description,\r\n                icon,\r\n                daily_chance_of_rain,\r\n                daily_chance_of_snow,\r\n                maxtemp_c,\r\n                maxtemp_f,\r\n                mintemp_c,\r\n                mintemp_f,\r\n                maxwind_kph,\r\n                maxwind_mph,\r\n            };\r\n        });\r\n    }\r\n}\r\n\r\nclass location {}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/data.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/data.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;