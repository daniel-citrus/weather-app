import { parser } from './barrel';
import { getWeather, getUserCoords } from './barrel';

/**
 * On page load, ask user for location data to make Weather API call
 * @returns {object} Weather API data object
 */
async function startUp() {
    try {
        const coords = await getUserCoords();
        const weatherData = await getWeather(null, coords);
        return await weatherData.json();
    } catch (e) {
        console.error(e);
    }
}

let currentData, forecastData, locationData;
document.addEventListener('DOMContentLoaded', () => {
    startUp().then((data) => {
        currentData = parser.parseCurrent(data.current);
        forecastData = parser.parseForecast(data.forecast);
        console.log(forecastData);
    });
});
