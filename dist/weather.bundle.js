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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   beaufortWindScale: () => (/* binding */ beaufortWindScale),\n/* harmony export */   getUserCoords: () => (/* binding */ getUserCoords),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   uvIndexRisk: () => (/* binding */ uvIndexRisk)\n/* harmony export */ });\n// Will learn to hide the API Key soon :)\r\nconst API_KEY = 'dfe9055663544783911164832240904';\r\n\r\n/**\r\n * Get weather data object from the Weather API\r\n * @param {string} location\r\n * @param {string} coords (ex. 132.123,-32.234)\r\n * @returns {object} Weather API data object\r\n */\r\nasync function getWeather(location, coords = null) {\r\n    let request = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3`;\r\n\r\n    if (coords) {\r\n        request += `&q=${coords}`;\r\n    } else {\r\n        request += `&q=${location}`;\r\n    }\r\n\r\n    try {\r\n        return await fetch(request);\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\r\n\r\n/**\r\n * Get user coordinates using geolocation prompt\r\n * @returns {string} user coordinates 'ex: 132.123,-32.234'\r\n */\r\nasync function getUserCoords() {\r\n    const promise = new Promise((resolve, reject) => {\r\n        navigator.geolocation.getCurrentPosition(resolve, reject);\r\n    });\r\n\r\n    try {\r\n        const data = await promise;\r\n        return `${data.coords.latitude},${data.coords.longitude}`;\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\r\n\r\n/**\r\n *\r\n * @param {*} windspeed in mph\r\n * @returns {object} { bfn - Beaufort force number , description - description of wind }\r\n */\r\nfunction beaufortWindScale(windspeed) {\r\n    let bfn, description;\r\n\r\n    switch (windspeed) {\r\n    }\r\n    if (windspeed < 1) {\r\n        bfn = 0;\r\n        description = 'Calm';\r\n    } else if (windspeed >= 1 && windspeed < 4) {\r\n        bfn = 1;\r\n        description = 'Light Air';\r\n    } else if (windspeed >= 4 && windspeed < 8) {\r\n        bfn = 2;\r\n        description = 'Light Breeze';\r\n    } else if (windspeed >= 8 && windspeed < 13) {\r\n        bfn = 3;\r\n        description = 'Gentle Breeze';\r\n    } else if (windspeed >= 13 && windspeed < 19) {\r\n        bfn = 4;\r\n        description = 'Moderate Breeze';\r\n    } else if (windspeed >= 19 && windspeed < 25) {\r\n        bfn = 5;\r\n        description = 'Fresh Breeze';\r\n    } else if (windspeed >= 25 && windspeed < 32) {\r\n        bfn = 6;\r\n        description = 'Strong Breeze';\r\n    } else if (windspeed >= 32 && windspeed < 39) {\r\n        bfn = 7;\r\n        description = 'Near Gale';\r\n    } else if (windspeed >= 39 && windspeed < 47) {\r\n        bfn = 8;\r\n        description = 'Gale';\r\n    } else if (windspeed >= 47 && windspeed < 55) {\r\n        bfn = 9;\r\n        description = 'Severe Gale';\r\n    } else if (windspeed >= 55 && windspeed < 64) {\r\n        bfn = 10;\r\n        description = 'Storm';\r\n    } else if (windspeed >= 64 && windspeed < 72) {\r\n        bfn = 11;\r\n        description = 'Violent Storm';\r\n    } else if (windspeed >= 72) {\r\n        bfn = 12;\r\n        description = 'Hurricane';\r\n    }\r\n\r\n    return {\r\n        bfn,\r\n        description,\r\n    };\r\n}\r\n\r\nfunction uvIndexRisk(uvIndex) {\r\n    if (uvIndex <= 2) {\r\n        return 'Low';\r\n    } else if (uvIndex >= 3 && uvIndex <= 5) {\r\n        return 'Moderate';\r\n    } else if (uvIndex >= 6 && uvIndex <= 7) {\r\n        return 'High';\r\n    } else if (uvIndex >= 8 && uvIndex <= 10) {\r\n        return 'Very High';\r\n    } else if (uvIndex >= 8 && uvIndex <= 10) {\r\n        return 'Extreme';\r\n    }\r\n    return '--';\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/weather.js?");

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