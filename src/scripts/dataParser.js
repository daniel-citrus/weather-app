/**
 * @param {object} currentData - Weather API 'current' object
 */
export function parseCurrent(currentData) {
    const {
        humidity,
        is_day,
        last_updated,
        temp_c,
        temp_f,
        wind_kph,
        wind_mph,
    } = currentData;

    return {
        humidity,
        is_day,
        last_updated,
        temp_c,
        temp_f,
        wind_kph,
        wind_mph,
    };
}

/**
 * @param {object} forecaseData - Weather API 'forecast' object
 */
export function parseForecast(forecaseData) {
    return forecaseData.forecastday.map((dayData) => {
        let { date, hour } = dayData;

        hour = hour.map((hourData) => {
            const {
                condition: { icon, text: description },
                daily_chance_of_rain,
                daily_chance_of_snow,
                feelslike_c,
                feelslike_f,
                temp_c,
                temp_f,
                time,
                wind_kph,
                wind_mph,
                is_day,
                humidity,
            } = hourData;

            return {
                icon,
                description,
                daily_chance_of_rain,
                daily_chance_of_snow,
                feelslike_c,
                feelslike_f,
                temp_c,
                temp_f,
                time,
                wind_kph,
                wind_mph,
                is_day,
                humidity,
            };
        });

        const {
            avghumidity,
            avgtemp_c,
            avgtemp_f,
            condition: { text: description, icon },
            daily_chance_of_rain,
            daily_chance_of_snow,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
            maxwind_kph,
            maxwind_mph,
        } = dayData.day;

        return {
            avghumidity,
            avgtemp_c,
            avgtemp_f,
            daily_chance_of_rain,
            daily_chance_of_snow,
            hour,
            date,
            description,
            icon,
            maxtemp_c,
            maxtemp_f,
            mintemp_c,
            mintemp_f,
            maxwind_kph,
            maxwind_mph,
        };
    });
}

export function parseLocation(locationData) {}
