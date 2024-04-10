import './style.scss';

const API_KEY = 'dfe9055663544783911164832240904';

/**
 * Get object from the Weather API containing weather data
 * @param {string} location
 * @param {string} coords (ex. 132.123,-32.234)
 * @returns
 */
async function getWeather(location, coords = null) {
    let request = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3`;

    if (coords) {
        request += `&q=${coords}`;
    } else {
        request += `&q=${location}`;
    }

    try {
        return await fetch(request);
    } catch (e) {
        console.error(e);
    }
}

async function getUserCoords() {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    try {
        const data = await promise;
        return `${data.coords.latitude},${data.coords.longitude}`;
    } catch (e) {
        throw new Error(e);
    }
}

async function startUp() {
    try {
        const coords = await getUserCoords();
        const weatherData = await getWeather(null, coords);
        const data = await weatherData.json();
        return data;
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    startUp().then((data) => {
        console.log(data);
    });
});
