import '../style.scss';
import { extractData as extractor } from './dataExtractor';
import { getWeather, getUserCoords } from './weather';
import * as display from './display';

/**
 * Ask user for location data to make Weather API call
 * @returns {object} Weather API data object
 */
async function startUp() {
    const coords = await getUserCoords();
    const weatherData = await getLocationWeather(null, coords);
    return weatherData;
}

/**
 * Get weather data using
 */
export async function getLocationWeather(location = null, coords = null) {
    const weatherData = await getWeather(location, coords);
    const data = await weatherData.json();
    return extractor(data);
}

document.addEventListener('DOMContentLoaded', () => {
    startUp()
        .then((data) => {
            let { current, forecast, location } = data;

            console.log(data);
            console.log(`Current:`);
            console.log(current);
            console.log(`Forecast:`);
            console.log(forecast);
            console.log(`Location:`);
            console.log(location);

            display.updateWeatherToday(location, current);
        })
        .catch((e) => {
            console.error(e);
        });
});
