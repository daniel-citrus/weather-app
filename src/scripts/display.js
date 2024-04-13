const city = document.querySelector('.overview .city');
const state = document.querySelector('.overview .state');
const icon = document.querySelector('.overview .icon');
const feelslike = document.querySelector('.feelslike .tempVal');
const tempswitch = document.querySelectorAll('.feelslike input[type="radio"]');
const actualTemp = document.querySelector('.overview .actualTemp');
const tempUnit = document.querySelectorAll('.temperature .unit');
const day = document.querySelector('.date-time .day');
const date = document.querySelector('.date-time .date');
const time = document.querySelector('.date-time .time');

let measureSystem = 'imperial';

tempswitch.forEach((s) => {
    s.addEventListener('click', () => {
        if (s.id === measureSystem) {
            return;
        }

        measureSystem = s.id;
    });
});

/**
 * Update contents of today's weather display
 * @param {*} location - location data from Weather API
 * @param {*} current - current day data from Weather API
 */
export function updateWeatherToday(location, current) {
    city.textContent = location.name;
    state.textContent = location.region;

    // Icon stuff
}

function updateTemperatures(data) {
    if (measureSystem === 'imperial') {
        feelslike.textContent = data.feelslike_f;
    } else if (measureSystem === 'metric') {
        feelslike.textContent = data.feelslike_c;
    }
}
