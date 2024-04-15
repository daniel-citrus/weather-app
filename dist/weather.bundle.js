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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserCoords: () => (/* binding */ getUserCoords),\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n// Will learn to hide the API Key soon :)\r\nconst API_KEY = 'dfe9055663544783911164832240904';\r\n\r\n/**\r\n * Get weather data object from the Weather API\r\n * @param {string} location\r\n * @param {string} coords (ex. 132.123,-32.234)\r\n * @returns {object} Weather API data object\r\n */\r\nasync function getWeather(location, coords = null) {\r\n    let request = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3`;\r\n\r\n    if (coords) {\r\n        request += `&q=${coords}`;\r\n    } else {\r\n        request += `&q=${location}`;\r\n    }\r\n\r\n    try {\r\n        return await fetch(request);\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\r\n\r\n/**\r\n * Get user coordinates using geolocation prompt\r\n * @returns {string} user coordinates 'ex: 132.123,-32.234'\r\n */\r\nasync function getUserCoords() {\r\n    const promise = new Promise((resolve, reject) => {\r\n        navigator.geolocation.getCurrentPosition(resolve, reject);\r\n    });\r\n\r\n    try {\r\n        const data = await promise;\r\n        return `${data.coords.latitude},${data.coords.longitude}`;\r\n    } catch (e) {\r\n        throw new Error(e.message);\r\n    }\r\n}\r\n\r\nconst icons = {\r\n    1000: {\r\n        day: 'clear-day',\r\n        night: 'clear-night',\r\n    },\r\n    1003: {\r\n        day: 'partly-cloudy-day',\r\n        night: 'partly-cloudy-night',\r\n    },\r\n    1006: {\r\n        day: 'cloudy',\r\n        night: 'cloudy',\r\n    },\r\n    1009: {\r\n        day: 'overcast-day',\r\n        night: 'overcast-night',\r\n    },\r\n    1030: {\r\n        day: 'mist',\r\n        night: 'mist',\r\n    },\r\n    1063: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: 'partly-cloudy-night-rain',\r\n    },\r\n    1066: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1069: {\r\n        day: 'partly-cloudy-day-sleet',\r\n        night: 'partly-cloudy-night-sleet',\r\n    },\r\n    1072: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1087: {\r\n        day: 'thunderstorms-day',\r\n        night: 'thunderstorms-night',\r\n    },\r\n    1114: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1117: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1135: {\r\n        day: 'fog-day',\r\n        night: 'fog-night',\r\n    },\r\n    1147: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1150: {\r\n        day: 'drizzle',\r\n        night: 'drizzle',\r\n    },\r\n    1153: {\r\n        day: 'drizzle',\r\n        night: 'drizzle',\r\n    },\r\n    1168: {\r\n        day: 'drizzle',\r\n        night: 'drizzle',\r\n    },\r\n    1171: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1180: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: '\tpartly-cloudy-night-rain',\r\n    },\r\n    1183: {\r\n        day: 'rain',\r\n        night: 'rain',\r\n    },\r\n    1186: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: 'partly-cloudy-night-rain',\r\n    },\r\n    1189: {\r\n        day: 'rain',\r\n        night: 'rain',\r\n    },\r\n    1192: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: 'partly-cloudy-day-rain',\r\n    },\r\n    1195: {\r\n        day: 'rain',\r\n        night: 'rain',\r\n    },\r\n    1198: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1201: {\r\n        day: null,\r\n        night: null,\r\n    },\r\n    1204: {\r\n        day: 'sleet',\r\n        night: 'sleet',\r\n    },\r\n    1207: {\r\n        day: 'sleet',\r\n        night: 'sleet',\r\n    },\r\n    1210: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1213: {\r\n        day: 'snow',\r\n        night: 'snow',\r\n    },\r\n    1216: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1219: {\r\n        day: 'snow',\r\n        night: 'snow',\r\n    },\r\n    1222: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1225: {\r\n        day: 'snow',\r\n        night: 'snow',\r\n    },\r\n    1237: {\r\n        day: 'hail',\r\n        night: 'hail',\r\n    },\r\n    1240: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: 'partly-cloudy-night-rain',\r\n    },\r\n    1243: {\r\n        day: 'partly-cloudy-day-rain',\r\n        night: 'partly-cloudy-night-rain',\r\n    },\r\n    1246: {\r\n        day: 'rain',\r\n        night: 'rain',\r\n    },\r\n    1249: {\r\n        day: 'partly-cloudy-day-sleet',\r\n        night: 'partly-cloudy-night-sleet',\r\n    },\r\n    1252: {\r\n        day: 'partly-cloudy-day-sleet',\r\n        night: 'partly-cloudy-night-sleet',\r\n    },\r\n    1255: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1258: {\r\n        day: 'partly-cloudy-day-snow',\r\n        night: 'partly-cloudy-night-snow',\r\n    },\r\n    1261: {\r\n        day: 'partly-cloudy-day-hail',\r\n        night: 'partly-cloudy-night-hail',\r\n    },\r\n    1264: {\r\n        day: 'partly-cloudy-day-hail',\r\n        night: 'partly-cloudy-night-hail',\r\n    },\r\n    1273: {\r\n        day: 'thunderstorms-day-rain',\r\n        night: 'thunderstorms-night-rain',\r\n    },\r\n    1276: {\r\n        day: 'thunderstorms-rain',\r\n        night: 'thunderstorms-rain',\r\n    },\r\n    1279: {\r\n        day: 'thunderstorms-day-snow',\r\n        night: 'thunderstorms-night-snow',\r\n    },\r\n    1282: {\r\n        day: 'thunderstorms-snow',\r\n        night: 'thunderstorms-snow',\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/weather.js?");

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