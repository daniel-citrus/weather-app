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

/**
 *
 * @param {*} windspeed in mph
 * @returns {object} { bfn - Beaufort force number , description - description of wind }
 */
export function beaufortWindScale(windspeed) {
    let bfn, description;

    switch (windspeed) {
    }
    if (windspeed < 1) {
        bfn = 0;
        description = 'Calm';
    } else if (windspeed >= 1 && windspeed < 4) {
        bfn = 1;
        description = 'Light Air';
    } else if (windspeed >= 4 && windspeed < 8) {
        bfn = 2;
        description = 'Light Breeze';
    } else if (windspeed >= 8 && windspeed < 13) {
        bfn = 3;
        description = 'Gentle Breeze';
    } else if (windspeed >= 13 && windspeed < 19) {
        bfn = 4;
        description = 'Moderate Breeze';
    } else if (windspeed >= 19 && windspeed < 25) {
        bfn = 5;
        description = 'Fresh Breeze';
    } else if (windspeed >= 25 && windspeed < 32) {
        bfn = 6;
        description = 'Strong Breeze';
    } else if (windspeed >= 32 && windspeed < 39) {
        bfn = 7;
        description = 'Near Gale';
    } else if (windspeed >= 39 && windspeed < 47) {
        bfn = 8;
        description = 'Gale';
    } else if (windspeed >= 47 && windspeed < 55) {
        bfn = 9;
        description = 'Severe Gale';
    } else if (windspeed >= 55 && windspeed < 64) {
        bfn = 10;
        description = 'Storm';
    } else if (windspeed >= 64 && windspeed < 72) {
        bfn = 11;
        description = 'Violent Storm';
    } else if (windspeed >= 72) {
        bfn = 12;
        description = 'Hurricane';
    }

    return {
        bfn,
        description,
    };
}

export function uvIndexRisk(uvIndex) {
    if (uvIndex <= 2) {
        return 'Low';
    } else if (uvIndex >= 3 && uvIndex <= 5) {
        return 'Moderate';
    } else if (uvIndex >= 6 && uvIndex <= 7) {
        return 'High';
    } else if (uvIndex >= 8 && uvIndex <= 10) {
        return 'Very High';
    } else if (uvIndex >= 8 && uvIndex <= 10) {
        return 'Extreme';
    }
    return '--';
}
