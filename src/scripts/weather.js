// Will learn to hide the API Key soon :)
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

const icons = {
    1000: {
        day: 'clear-day',
        night: 'clear-night',
    },
    1003: {
        day: 'partly-cloudy-day',
        night: 'partly-cloudy-night',
    },
    1006: {
        day: 'cloudy',
        night: 'cloudy',
    },
    1009: {
        day: 'overcast-day',
        night: 'overcast-night',
    },
    1030: {
        day: 'mist',
        night: 'mist',
    },
    1063: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
    },
    1066: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1069: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
    },
    1072: {
        day: null,
        night: null,
    },
    1087: {
        day: 'thunderstorms-day',
        night: 'thunderstorms-night',
    },
    1114: {
        day: null,
        night: null,
    },
    1117: {
        day: null,
        night: null,
    },
    1135: {
        day: 'fog-day',
        night: 'fog-night',
    },
    1147: {
        day: null,
        night: null,
    },
    1150: {
        day: 'drizzle',
        night: 'drizzle',
    },
    1153: {
        day: 'drizzle',
        night: 'drizzle',
    },
    1168: {
        day: 'drizzle',
        night: 'drizzle',
    },
    1171: {
        day: null,
        night: null,
    },
    1180: {
        day: 'partly-cloudy-day-rain',
        night: '	partly-cloudy-night-rain',
    },
    1183: {
        day: 'rain',
        night: 'rain',
    },
    1186: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
    },
    1189: {
        day: 'rain',
        night: 'rain',
    },
    1192: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-day-rain',
    },
    1195: {
        day: 'rain',
        night: 'rain',
    },
    1198: {
        day: null,
        night: null,
    },
    1201: {
        day: null,
        night: null,
    },
    1204: {
        day: 'sleet',
        night: 'sleet',
    },
    1207: {
        day: 'sleet',
        night: 'sleet',
    },
    1210: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1213: {
        day: 'snow',
        night: 'snow',
    },
    1216: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1219: {
        day: 'snow',
        night: 'snow',
    },
    1222: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1225: {
        day: 'snow',
        night: 'snow',
    },
    1237: {
        day: 'hail',
        night: 'hail',
    },
    1240: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
    },
    1243: {
        day: 'partly-cloudy-day-rain',
        night: 'partly-cloudy-night-rain',
    },
    1246: {
        day: 'rain',
        night: 'rain',
    },
    1249: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
    },
    1252: {
        day: 'partly-cloudy-day-sleet',
        night: 'partly-cloudy-night-sleet',
    },
    1255: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1258: {
        day: 'partly-cloudy-day-snow',
        night: 'partly-cloudy-night-snow',
    },
    1261: {
        day: 'partly-cloudy-day-hail',
        night: 'partly-cloudy-night-hail',
    },
    1264: {
        day: 'partly-cloudy-day-hail',
        night: 'partly-cloudy-night-hail',
    },
    1273: {
        day: 'thunderstorms-day-rain',
        night: 'thunderstorms-night-rain',
    },
    1276: {
        day: 'thunderstorms-rain',
        night: 'thunderstorms-rain',
    },
    1279: {
        day: 'thunderstorms-day-snow',
        night: 'thunderstorms-night-snow',
    },
    1282: {
        day: 'thunderstorms-snow',
        night: 'thunderstorms-snow',
    },
};
