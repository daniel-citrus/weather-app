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

/***/ "./src/scripts/dataExtractor.js":
/*!**************************************!*\
  !*** ./src/scripts/dataExtractor.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractCurrent: () => (/* binding */ extractCurrent),\n/* harmony export */   extractForecast: () => (/* binding */ extractForecast),\n/* harmony export */   extractLocation: () => (/* binding */ extractLocation)\n/* harmony export */ });\n/**\r\n * @param {object} currentData - Weather API 'current' object\r\n */\r\nfunction extractCurrent(currentData) {\r\n    const {\r\n        humidity,\r\n        is_day,\r\n        last_updated,\r\n        temp_c,\r\n        temp_f,\r\n        wind_kph,\r\n        wind_mph,\r\n    } = currentData;\r\n\r\n    return {\r\n        humidity,\r\n        is_day,\r\n        last_updated,\r\n        temp_c,\r\n        temp_f,\r\n        wind_kph,\r\n        wind_mph,\r\n    };\r\n}\r\n\r\n/**\r\n * @param {object} forecaseData - Weather API 'forecast' object\r\n */\r\nfunction extractForecast(forecaseData) {\r\n    return forecaseData.forecastday.map((dayData) => {\r\n        let { date, hour } = dayData;\r\n\r\n        hour = hour.map((hourData) => {\r\n            const {\r\n                condition: { icon, text: description },\r\n                daily_chance_of_rain,\r\n                daily_chance_of_snow,\r\n                feelslike_c,\r\n                feelslike_f,\r\n                temp_c,\r\n                temp_f,\r\n                time,\r\n                wind_kph,\r\n                wind_mph,\r\n                is_day,\r\n                humidity,\r\n            } = hourData;\r\n\r\n            return {\r\n                icon,\r\n                description,\r\n                daily_chance_of_rain,\r\n                daily_chance_of_snow,\r\n                feelslike_c,\r\n                feelslike_f,\r\n                temp_c,\r\n                temp_f,\r\n                time,\r\n                wind_kph,\r\n                wind_mph,\r\n                is_day,\r\n                humidity,\r\n            };\r\n        });\r\n\r\n        const {\r\n            avghumidity,\r\n            avgtemp_c,\r\n            avgtemp_f,\r\n            condition: { text: description, icon },\r\n            daily_chance_of_rain,\r\n            daily_chance_of_snow,\r\n            maxtemp_c,\r\n            maxtemp_f,\r\n            mintemp_c,\r\n            mintemp_f,\r\n            maxwind_kph,\r\n            maxwind_mph,\r\n        } = dayData.day;\r\n\r\n        return {\r\n            avghumidity,\r\n            avgtemp_c,\r\n            avgtemp_f,\r\n            daily_chance_of_rain,\r\n            daily_chance_of_snow,\r\n            hour,\r\n            date,\r\n            description,\r\n            icon,\r\n            maxtemp_c,\r\n            maxtemp_f,\r\n            mintemp_c,\r\n            mintemp_f,\r\n            maxwind_kph,\r\n            maxwind_mph,\r\n        };\r\n    });\r\n}\r\n\r\nfunction extractLocation(locationData) {\r\n    const {\r\n        country,\r\n        localtime,\r\n        name, // City\r\n        region, // State\r\n    } = locationData;\r\n\r\n    return {\r\n        country,\r\n        localtime,\r\n        name,\r\n        region,\r\n    };\r\n}\r\n\n\n//# sourceURL=webpack://weather-app/./src/scripts/dataExtractor.js?");

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
/******/ 	__webpack_modules__["./src/scripts/dataExtractor.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;