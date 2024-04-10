export class current {
    /**
     * @param {object} data - Weather API 'current' object
     */
    constructor(data) {
        this.humidity = data.humidity;
        this.is_day = data.is_day;
        this.last_updated = data.last_updated;
        this.temp_c = data.temp_c;
        this.temp_f = data.temp_f;
        this.wind_kph = data.wind_kph;
        this.wind_mph = data.wind_mph;
    }
}

export class forecast {
    /**
     * @param {object} data - Weather API 'forecast' object
     */
    constructor(data) {
        this.days = data.forecastday.map((dayData) => {
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
                description,
                icon,
                daily_chance_of_rain,
                daily_chance_of_snow,
                maxtemp_c,
                maxtemp_f,
                mintemp_c,
                mintemp_f,
                maxwind_kph,
                maxwind_mph,
            };
        });
    }
}

export class location {}
