import { getLocationWeather } from './index';
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
        })
        .catch((e) => {
            updateOverview();
            updateForecastCards();
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
        iconsrc = '--',
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
            <span class="state">${state}</span>, 
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
                    <div class="title">Feels Like</div>
                    <span class="temperature">
                        <span class="imperial" title="Feels like">
                            ${feelslike_f}
                        </span>
                        <span class="metric" title="Feels like">
                            ${feelslike_c}
                        </span>
                    </span>
                    <form class="tempSwitch">
                        <input type="radio" name="measureSystem" value="imperial" id="imperial">
                        <label for="imperial">°F</label> | 
                        <input type="radio" name="measureSystem" value="metric" id="metric">
                        <label for="metric">°C</label>
                    </form>
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
        icon = '--',
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
        <div class="day">${day}</div>
        <img class="icon" src="${icon}" title="${description}">
        <div class="temperature">
            <span class="hightemp">
                <span class="imperial">${maxtemp_f}°</span>
                <span class="metric">${maxtemp_c}°</span>
            </span> /
            <span class="lowtemp">
                <span class="imperial">${mintemp_f}°</span>
                <span class="metric">${mintemp_c}°</span>
            </span>
        </div>
    `;

    card.addEventListener('click', () => {
        console.log('Display information');
    });

    return card;
}

/**
 * Update display window with selected day information
 * @param {object} data
 */
function updateDisplay(data) {
    let description = '--',
        icon = '--',
        maxtemp_f = '--',
        maxtemp_c = '--';

    display.innerHTML = `
        <div class="details">
            <div class="line">
                <div class="description">Sunny</div>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">High / Low</div>
                <div class="info">
                    <span class="temperature">
                        <span class="hightemp">--</span>°
                        <span class="lowtemp">--</span>°
                    </span>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">Average</div>
                <div class="info">
                    <span class="temperature">
                        <span class="avgtemp">--</span>°
                    </span>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">Chance of Rain</div>
                <div class="info">
                    <span class="rainChance">
                        <span class="value">--</span>%
                    </span>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">Chance of Snow</div>
                <div class="info">
                    <span class="snowChance">
                        <span class="value">--</span>%
                    </span>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">Humidity</div>
                <div class="info">
                    <div class="humidity">
                        <span class="value">--</span>%
                    </div>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">Wind</div>
                <div class="info">
                    <span class="direction" title="Wind Direction"></span>
                    <span class="windSpeed">
                        <span class="value">--</span>
                        <span class="speedunit">mph</span>
                    </span>
                </div>
            </div>
            <div class="line">
                <div class="icon">Icon</div>
                <div class="text">UV Index</div>
                <div class="info">
                <span class="uvIndex">
                    <span class="value">--</span> of 11
                </span>
            </div>
        </div>
    `;
}

function buildElement(elementType, ...classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}
