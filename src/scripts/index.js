import '../style/style.scss';
import { extractData as extractor } from './dataExtractor';
import * as weather from './weather';
import * as display from './display';

/**
 * Ask user for location data to make Weather API call
 * @returns {object} Weather API data object
 */
async function startUp() {
    display.displayData(); // Display blanks
    display.startLoading();
    const coords = await weather.getUserCoords();
    const weatherData = await getLocationWeather(null, coords);
    return weatherData;
}

/**
 * Get weather data using 
 */
export async function getLocationWeather(location = null, coords = null) {
    try {
        const weatherData = await weather.getWeather(location, coords);
        const data = await weatherData.json();
        return extractor(data);
    } catch {}
}

document.addEventListener('DOMContentLoaded', () => {
    startUp()
        .then((data) => {
            display.displayData(data);
            display.stopLoading();
        })
        .catch((e) => {
            console.error(e);
            display.stopLoading();
        });
});
