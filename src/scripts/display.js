import { getLocationWeather } from './index';
import { format, parseISO } from 'date-fns';
import * as icons from './icons';

const city = document.querySelector('.overview .city');
const state = document.querySelector('.overview .state');
const country = document.querySelector('.overview .country');
const icon = document.querySelector('.overview .icon img');
const description = document.querySelector('.overview .description');
const feelslike = document.querySelector('.feelslike .tempVal');
const tempswitch = document.querySelectorAll('.feelslike input[type="radio"]');
const actualTemp = document.querySelector('.overview .actualTemp');
const tempUnit = document.querySelectorAll('.temperature .unit');
const day = document.querySelector('.date-time .day');
const date = document.querySelector('.date-time .date');
const time = document.querySelector('.date-time .time');

const cards = document.querySelector('.board .cards');

const search = document.getElementById('search');
const searchButton = document.querySelector('.search button');
let measureSystem = 'imperial';

tempswitch.forEach((s) => {
    s.addEventListener('click', () => {
        if (s.id === measureSystem) {
            return;
        }

        measureSystem = s.id;
    });
});

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

/**
 * Update contents of overview display
 * @param {*} location - location data from Weather API
 * @param {*} current - current day data from Weather API
 */
export function updateOverview(location, current) {
    const localtime = new Date(location.localtime);

    city.textContent = location.name;
    state.textContent = location.region;
    country.textContent = location.country;

    // Icon stuff
    icon.src = icons.getIcon(current.code, current.is_day);

    description.textContent = current.description;

    if (measureSystem === 'imperial') {
        feelslike.textContent = current.feelslike_f;
        actualTemp.textContent = current.temp_f;
    } else {
        feelslike.textContent = current.feelslike_c;
        actualTemp.textContent = current.temp_c;
    }

    day.textContent = format(localtime, 'EEEE');
    date.textContent = format(localtime, 'PPP');
    time.textContent = format(localtime, 'p');
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
 * Create weather cards to display forecast.
 */
function createCards(data) {
    for (let i = 0; i < data.length; i++) {
        cards.appendChild(createCard(i, data[i]));
    }
}

function createCard(id, data) {
    const card = buildElement('div', 'card');
    const day = format(new Date(parseISO(data.date)), 'EEEE');
    const icon = icons.getIcon(data.code, true);
    card.dataset.id = id;

    card.innerHTML = `
    <div class="day">${day}</div>
    <img class="icon" src="${icon}">
    <div class="temperature">
        <span class="hightemp">
            <span class="imperial">${data.maxtemp_f}</span>
            <span class="metric">${data.maxtemp_c}</span>°
        </span> /
        <span class="lowtemp">
            <span class="imperial">${data.mintemp_f}</span>
            <span class="metric">${data.mintemp_c}</span>°
        </span>
    </div>
    `;

    return card;
}

function buildElement(elementType, ...classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}
