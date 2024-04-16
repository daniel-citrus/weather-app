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

/***/ "./src/scripts/weather.js":
/*!********************************!*\
  !*** ./src/scripts/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserCoords: () => (/* binding */ getUserCoords),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n// Will learn to hide the API Key soon :)\r\nconst API_KEY = 'dfe9055663544783911164832240904';\r\n\r\n/**\r\n * Get weather data object from the Weather API\r\n * @param {string} location\r\n * @param {string} coords (ex. 132.123,-32.234)\r\n * @returns {object} Weather API data object\r\n */\r\nasync function getWeather(location, coords = null) {\r\n    let request = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3`;\r\n\r\n    if (coords) {\r\n        request += `&q=${coords}`;\r\n    } else {\r\n        request += `&q=${location}`;\r\n    }\r\n\r\n    try {\r\n        return await fetch(request);\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\r\n\r\n/**\r\n * Get user coordinates using geolocation prompt\r\n * @returns {string} user coordinates 'ex: 132.123,-32.234'\r\n */\r\nasync function getUserCoords() {\r\n    const promise = new Promise((resolve, reject) => {\r\n        navigator.geolocation.getCurrentPosition(resolve, reject);\r\n    });\r\n\r\n    try {\r\n        const data = await promise;\r\n        return `${data.coords.latitude},${data.coords.longitude}`;\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/scripts/weather.js?");

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
/******/ 	__webpack_modules__["./src/scripts/weather.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;