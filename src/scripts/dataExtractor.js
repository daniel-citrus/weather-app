/**
 * @param {object} currentData - Weather API 'current' object
 */
function extractCurrent(currentData) {
    const {
        condition: { code, icon, text: description },
        feelslike_c,
        feelslike_f,
        humidity,
        is_day,
        temp_c,
        temp_f,
        uv,
        wind_degree,
        wind_kph,
        wind_mph,
    } = currentData;

    return {
        code,
        icon,
        description,
        feelslike_c: Math.round(feelslike_c),
        feelslike_f: Math.round(feelslike_f),
        humidity,
        is_day,
        temp_c: Math.round(temp_c),
        temp_f: Math.round(temp_f),
        uv,
        wind_degree,
        wind_kph,
        wind_mph,
    };
}

/**
 * @param {object} forecastData - Weather API 'forecast' object
 */
function extractForecast(forecastData) {
    return forecastData.forecastday.map((dayData) => {
        let { date, hour } = dayData;

        hour = hour.map((hourData) => {
            return { ...hourData };
        });

        const {
            avghumidity,
            avgtemp_c,
            avgtemp_f,
            condition: { code, icon, text: description },
            daily_chance_of_rain,
            daily_chance_of_snow,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
            maxwind_kph,
            maxwind_mph,
            uv,
        } = dayData.day;

        return {
            avghumidity,
            avgtemp_c: Math.round(avgtemp_c),
            avgtemp_f: Math.round(avgtemp_f),
            code,
            daily_chance_of_rain,
            daily_chance_of_snow,
            hour,
            date,
            description,
            icon,
            maxtemp_c: Math.round(maxtemp_c),
            maxtemp_f: Math.round(maxtemp_f),
            mintemp_c: Math.round(mintemp_c),
            mintemp_f: Math.round(mintemp_f),
            maxwind_kph,
            maxwind_mph,
            uv,
        };
    });
}

function extractLocation(locationData) {
    const {
        country,
        localtime,
        name, // City
        region, // State
    } = locationData;

    return {
        country,
        localtime,
        name,
        region,
    };
}

export function extractData(data) {
    const current = extractCurrent(data.current);
    const forecast = extractForecast(data.forecast);
    const location = extractLocation(data.location);

    return { current, forecast, location };
}
