import '../style.scss';
import { extractor } from './barrel';
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
    startUp()
        .then((data) => {
            currentData = extractor.extractCurrent(data.current);
            forecastData = extractor.extractForecast(data.forecast);
            locationData = extractor.extractLocation(data.location);
            console.log(`Current:`);
            console.log(currentData);
        })
        .catch(() => {});
});
