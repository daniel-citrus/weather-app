import '../style.scss';

const API_KEY = 'dfe9055663544783911164832240904';

/**
 * Get weather data object from the Weather API
 * @param {string} location
 * @param {string} coords (ex. 132.123,-32.234)
 * @returns {object} Weather API data object
 */
export async function getWeather(location, coords = null) {
    let request = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3`;

    if (coords) {
        request += `&q=${coords}`;
    } else {
        request += `&q=${location}`;
    }

    try {
        return await fetch(request);
    } catch (e) {
        throw new Error(e.message);
    }
}

/**
 * Get user coordinates using geolocation prompt
 * @returns {string} user coordinates 'ex: 132.123,-32.234'
 */
export async function getUserCoords() {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    try {
        const data = await promise;
        return `${data.coords.latitude},${data.coords.longitude}`;
    } catch (e) {
        throw new Error(e.message);
    }
}
