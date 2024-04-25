import { getLocationWeather } from './index';
import { beaufortWindScale, uvIndexRisk } from './weather';
import { format, parseISO } from 'date-fns';
import * as icons from './icons';

const overview = document.querySelector('.overview');
const main = document.querySelector('.main');
const cards = document.querySelector('.board .cards');
const display = document.querySelector('.display');
const search = document.getElementById('search');
const searchButton = document.querySelector('.search button');
let measureSystem = 'imperial';

searchButton.addEventListener('click', () => {
    const location = search.value;

    if (!location) {
        // ERROR Message
        return;
    }

    getLocationWeather(location)
        .then((data) => {
            updateOverview(data.location, data.current);
            updateForecastCards(data.forecast);
            updateDisplay(data.forecast[0]);
        })
        .catch((e) => {
            updateOverview();
            updateForecastCards();
            updateDisplay();
            console.error(e);
        });
});

/**
 * Update current unit system
 * @param {string} unit
 * @returns
 */
export function updateUnit(unit) {
    if (unit === measureSystem) {
        return;
    }

    main.dataset.unit = unit;
    measureSystem = unit;
}

/**
 * Update contents of overview display
 * @param {*} location - location data from Weather API
 * @param {*} current - current day data from Weather API
 */
export function updateOverview(location = null, current = null) {
    let localtime = '--',
        city = '--',
        state = '--',
        country = '--',
        iconsrc = '',
        feelslike_f = '--',
        feelslike_c = '--',
        alt = '',
        description = '--',
        temp_f = '--',
        temp_c = '--',
        day = '--',
        date = '--',
        time = '--';

    if (location && current) {
        localtime = new Date(location.localtime);
        city = location.name;
        state = location.region;
        country = location.country;
        iconsrc = icons.getIcon(current.code, current.is_day);
        feelslike_f = current.feelslike_f;
        feelslike_c = current.feelslike_c;
        description = current.description;
        alt = description;
        temp_f = current.temp_f;
        temp_c = current.temp_c;
        day = format(localtime, 'EEEE');
        date = format(localtime, 'PPP');
        time = format(localtime, 'p');
    }

    overview.innerHTML = `
        <div class="title">
            Weather Today in
            <span class="city">${city}</span>, 
            <span class="state">${state}</span><br> 
            <span class="country">${country}</span>
        </div>
        <div class="content">
            <div class="icon">
                <img src="${iconsrc}"
                    alt="${alt}" title="${description}">
                <div class="description">${description}</div>
            </div>
            <div class="temperature">
                <div class="feelslike">
                    <div class="text">Feels Like</div>
                    <div class="temp">
                        <div class="avgTempToday">
                            <span class="imperial" title="Feels like">
                                ${feelslike_f}
                            </span>
                            <span class="metric" title="Feels like">
                                ${feelslike_c}
                            </span>
                        </div>
                        <form class="tempSwitch">
                            <input type="radio" name="measureSystem" value="imperial" id="imperial">
                            <label for="imperial">°F</label> | 
                            <input type="radio" name="measureSystem" value="metric" id="metric">
                            <label for="metric">°C</label>
                        </form>
                    </div>
                    </span>
                </div>
                <div class="actual">
                    Actual:
                    <span class="actualTemp">
                        <span class="imperial" title="Actual temperature">
                            ${temp_f}°
                        </span>
                        <span class="metric" title="Actual temperature">
                            ${temp_c}°
                        </span>
                    </span>
                </div>
            </div>
            <div>
                <div class="date-time">
                    <div class="day" title="Day">${day}</div>
                    <div class="date" title="Date">${date}</div>
                    <div class="time" title="Local Time">${time}</div>
                </div>
            </div>
        </div>
    `;

    const unitSwitches = document.querySelectorAll('form.tempSwitch input');

    unitSwitches.forEach((s) => {
        s.addEventListener('click', () => {
            updateUnit(s.id);
        });
    });

    document.querySelector(
        `form.tempSwitch input#${measureSystem}`
    ).checked = true;
}

/**
 * Replace forecast cards with new information
 * @param {object} data
 */
export function updateForecastCards(data) {
    clearCards();
    createCards(data);
}

function clearCards() {
    while (cards.hasChildNodes()) {
        cards.firstChild.remove();
    }
}

/**
 * Insert weather cards into the display
 * @param {object} data
 */
function createCards(data) {
    if (!data) {
        for (let i = 0; i < 3; i++) {
            cards.appendChild(createCard(i, null));
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            cards.appendChild(createCard(i, data[i]));
        }
    }
}

/**
 * Create a 'card' element to display daily weather data
 * @param {number} id
 * @param {object} data
 * @returns {element} card element
 */
function createCard(id = 0, data = null) {
    let card = buildElement('div', 'card'),
        day = '--',
        icon = '',
        alt = '--',
        description = '--',
        maxtemp_f = '--',
        maxtemp_c = '--',
        mintemp_f = '--',
        mintemp_c = '--';

    if (data) {
        day = format(new Date(parseISO(data.date)), 'EEEE');
        icon = icons.getIcon(data.code, true);
        alt = data.description;
        description = alt;
        maxtemp_f = data.maxtemp_f;
        maxtemp_c = data.maxtemp_c;
        mintemp_f = data.mintemp_f;
        mintemp_c = data.mintemp_c;
    }

    card.dataset.id = id;

    card.innerHTML = `
        <div class="temperature">
            <span class="hightemp">
                <span class="imperial" title="Max temp">${maxtemp_f}°</span>
                <span class="metric" title="Max temp">${maxtemp_c}°</span>
            </span>
            <span class="lowtemp">
                <span class="imperial" title="Min temp">${mintemp_f}°</span>
                <span class="metric" title="Min temp">${mintemp_c}°</span>
            </span>
        </div>
        <img class="icon" src="${icon}" title="${description}">
        <div class="day">${day}</div>
    `;

    card.addEventListener('click', () => {
        updateDisplay(data);
    });

    return card;
}

/**
 * Update display window with selected day information
 * @param {object} data
 */
export function updateDisplay(data) {
    let icon = '--',
        description = '--',
        maxtemp_f = '--',
        maxtemp_c = '--',
        mintemp_f = '--',
        mintemp_c = '--',
        averageicon_f = icons.getAnimatedIcon('thermometer-fahrenheit'),
        averageicon_c = icons.getAnimatedIcon('thermometer-celsius'),
        avgtemp_f = '--',
        avgtemp_c = '--',
        rainicon = icons.getAnimatedIcon('raindrop'),
        rainchance = '--',
        snowicon = icons.getAnimatedIcon('snowflake'),
        snowchance = '--',
        humidityicon = icons.getAnimatedIcon('humidity'),
        humidity = '--',
        windicon = icons.getAnimatedIcon('wind'),
        beaufortForce,
        windDescription = '',
        maxwind_kph = '--',
        maxwind_mph = '--',
        uvindexicon = icons.getAnimatedIcon('uv-index'),
        uvindex = '--';

    if (data) {
        icon = icons.getIcon(data.code, true);
        description = data.description;
        maxtemp_f = data.maxtemp_f;
        maxtemp_c = data.maxtemp_c;
        mintemp_f = data.mintemp_f;
        mintemp_c = data.mintemp_c;
        avgtemp_f = data.avgtemp_f;
        avgtemp_c = data.avgtemp_c;
        rainchance = data.daily_chance_of_rain;
        snowchance = data.daily_chance_of_snow;
        humidity = data.avghumidity;

        maxwind_kph = data.maxwind_kph;
        maxwind_mph = data.maxwind_mph;
        ({ bfn: beaufortForce, description: windDescription } =
            beaufortWindScale(maxwind_mph));

        windicon = icons.getAnimatedIcon(`wind-beaufort-${beaufortForce}`);

        uvindex = data.uv;
        uvindexicon = icons.getAnimatedIcon(`uv-index-${data.uv}`);
    }

    display.innerHTML = `
        <div class="details">
                <img class="icon" src="${icon}" alt="${description}" title="${description}" />
                <div class="description">${description}</div>
            </div>
            <div class="line temperature">
                <img
                    class="icon imperial"
                    src="${averageicon_f}"
                    alt="Farenheit Thermometer"
                    title="High and Low in Farenheight"
                    />
                    <img
                    class="icon metric"
                    src="${averageicon_c}"
                    alt="Celsius Thermometer"
                    title="High and Low in Celcius"
                    />
                    <div class="text">High / Low</div>
                <div class="info">
                    <span class="temperature">
                        <span class="hightemp">
                            <span class="imperial">${maxtemp_f}°</span>
                            <span class="metric">${maxtemp_c}°</span>
                        </span>
                        <span class="lowtemp">
                            <span class="imperial">${mintemp_f}°</span>
                            <span class="metric">${mintemp_c}°</span>
                        </span>
                    </span>
                </div>
            </div>
            <div class="line averageTemp">
                <div class="icons">
                    <img
                        class="icon imperial"
                        src="${averageicon_f}"
                        alt="Farenheit Thermometer"
                        title="Average in Farenheit"
                        />
                        <img
                        class="icon metric"
                        src="${averageicon_c}"
                        alt="Celsius Thermometer"
                        title="Average in Celcius"
                    />
                </div>
                <div class="text">Average</div>
                <div class="info">
                    <span class="temperature">
                        <span class="avgtemp">
                            <span class="imperial">${avgtemp_f}°</span>
                            <span class="metric">${avgtemp_c}°</span>
                        </span>
                    </span>
                </div>
            </div>
            <div class="line rain" title="Chance of rain">
                <img class="icon" src="${rainicon}" alt="raindrop" />
                <div class="text">Chance of Rain</div>
                <div class="info">
                    <span class="rainChance">${rainchance}%</span>
                </div>
            </div>
            <div class="line snow" title="Chance of snow">
                <img class="icon" src="${snowicon}" alt="snowflake" />
                <div class="text">Chance of Snow</div>
                <div class="info">
                    <span class="snowChance">${snowchance}%</span>
                </div>
            </div>
            <div class="line humidity" title="Humidity">
                <img
                    class="icon"
                    src="${humidityicon}"
                    alt="raindrop with percent synbol"
                />
                <div class="text">Humidity</div>
                <div class="info">
                    <div class="humidity">
                        <span class="value">${humidity}%</span>
                    </div>
                </div>
            </div>
            <div class="line wind" title="${windDescription}">
                <img class="icon" src="${windicon}" alt="wind" title="Wind speed" />
                <div class="text">Wind</div>
                <div class="info">
                    <span class="direction" title="Wind Direction"></span>
                    <span class="windSpeed">
                        <span class="imperial">${maxwind_mph} mph</span>
                        <span class="metric">${maxwind_kph} kph</span>
                    </span>
                </div>
            </div>
            <div class="line uvIndex" title="UV Index">
                <img class="icon" src="${uvindexicon}" alt="UV Index" />
                <div class="text">UV Index</div>
                <div class="info">
                    <span class="uvIndex">
                        <span class="value">${uvindex} of 11</span>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function buildElement(elementType, ...classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}
