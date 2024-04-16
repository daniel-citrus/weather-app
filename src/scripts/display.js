import { getLocationWeather } from './index';
import { format } from 'date-fns';
import * as icons from './icons';

const city = document.querySelector('.overview .city');
const state = document.querySelector('.overview .state');
const country = document.querySelector('.overview .country');
const icon = document.querySelector('.overview .icon img');
const feelslike = document.querySelector('.feelslike .tempVal');
const tempswitch = document.querySelectorAll('.feelslike input[type="radio"]');
const actualTemp = document.querySelector('.overview .actualTemp');
const tempUnit = document.querySelectorAll('.temperature .unit');
const day = document.querySelector('.date-time .day');
const date = document.querySelector('.date-time .date');
const time = document.querySelector('.date-time .time');

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
