import { getLocationWeather } from './index';
import { format, parseISO } from 'date-fns';
import * as icons from './icons';

const overview = document.querySelector('.overview');
const main = document.querySelector('.main');
const unitSwitch = document.querySelector('form.tempSwitch');
const cards = document.querySelector('.board .cards');
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
            console.error(e);
        });
});

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
export function updateOverview(location, current) {
    const localtime = new Date(location.localtime);
    let feelslike_temp;
    let actual_temp;

    if (measureSystem === 'imperial') {
        feelslike_temp = current.feelslike_f;
        actual_temp = current.temp_f;
    } else {
        feelslike_temp = current.feelslike_c;
        actual_temp = current.temp_c;
    }

    overview.innerHTML = `
            <div class="overview">
                <div class="title">
                    Weather Today in
                    <span class="city">${location.name}</span>, 
                    <span class="state">${location.region}</span>, 
                    <span class="country">${location.country}</span>
                </div>
                <div class="content">
                    <div class="icon">
                        <img src="${icons.getIcon(
                            current.code,
                            current.is_day
                        )}" alt="${current.description}" title="${
        current.description
    }">
                        <div class="description">${current.description}</div>
                    </div>
                    <div class="temperature">
                        <div class="feelslike">
                            <div class="title">Feels Like</div>
                            <span class="temperature">
                                <span class="imperial" title="Feels like">
                                    ${current.feelslike_f}
                                </span>
                                <span class="metric" title="Feels like">
                                    ${current.feelslike_c}
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
                                    ${current.temp_f}°
                                </span>
                                <span class="metric" title="Actual temperature">
                                    ${current.temp_c}°
                                </span>
                            </span>
                        </div>
                    </div>
                    <div>
                        <div class="date-time">
                            <div class="day" title="Day">${format(
                                localtime,
                                'EEEE'
                            )}</div>
                            <div class="date" title="Date">${format(
                                localtime,
                                'PPP'
                            )}</div>
                            <div class="time" title="Local Time">${format(
                                localtime,
                                'p'
                            )}</div>
                        </div>
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

function updateForecastCards(data) {
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
    for (let i = 0; i < data.length; i++) {
        cards.appendChild(createCard(i, data[i]));
    }
}

/**
 * Create a 'card' element to display daily weather data
 * @param {number} id
 * @param {object} data
 * @returns {element} card element
 */
function createCard(id, data) {
    const card = buildElement('div', 'card');
    const day = format(new Date(parseISO(data.date)), 'EEEE');
    const icon = icons.getIcon(data.code, true);
    card.dataset.id = id;

    card.innerHTML = `
    <div class="day">${day}</div>
    <img class="icon" src="${icon}" title="${data.description}">
    <div class="temperature">
        <span class="hightemp">
            <span class="imperial">${data.maxtemp_f}°</span>
            <span class="metric">${data.maxtemp_c}°</span>
        </span> /
        <span class="lowtemp">
            <span class="imperial">${data.mintemp_f}°</span>
            <span class="metric">${data.mintemp_c}°</span>
        </span>
    </div>
    `;

    card.addEventListener('click', () => {
        console.log('Display information');
    });

    return card;
}

function updateDisplay(data) {}

function buildElement(elementType, ...classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}
