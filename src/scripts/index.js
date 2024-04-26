import '../style/style.scss';
import { extractData as extractor } from './dataExtractor';
import * as weather from './weather';
import * as display from './display';

/**
 * Ask user for location data to make Weather API call
 * @returns {object} Weather API data object
 */
async function startUp() {
    display.updateOverview();
    display.updateForecastCards();
    display.updateDisplay();
    const coords = await weather.getUserCoords();
    const weatherData = await getLocationWeather(null, coords);
    return weatherData;
}

/**
 * Get weather data using
 */
export async function getLocationWeather(location = null, coords = null) {
    const weatherData = await weather.getWeather(location, coords);
    const data = await weatherData.json();
    return extractor(data);
}

document.addEventListener('DOMContentLoaded', () => {
    startUp()
        .then((data) => {
            let { current, forecast, location } = data;
            display.updateOverview(location, current);
            display.updateForecastCards(forecast);
            display.updateDisplay(forecast[0]); // Display today's data
        })
        .catch((e) => {
            console.error(e);
        });
});
