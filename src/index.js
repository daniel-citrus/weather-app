import './style.scss';

const API_KEY = 'dfe9055663544783911164832240904';

async function getWeather(location, coords = null) {
    try {
        let requestString =
            'https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&';

        if (coords) {
            requestString += `q=${coords}&days=3`;
        } else {
            requestString += `q=${location}&days=3`;
        }

        const response = await fetch(requestString);

        return await response.json();
    } catch (e) {
        console.error(e);
    }
}

async function getUserCoords() {
    try {
        if (!('geolocation' in navigator)) {
            throw new Error('No Geolocation in Navigator');
        }

        return await navigator.geolocation.getCurrentPosition((data) => {
            return `${data.coords.longitude},${data.coords.latitude}`;
        });
    } catch (e) {
        console.error(e);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const coords = getUserCoords();

    if (!coords) {
        console.log('no');
    } else {
        console.log(coords);
    }
});
