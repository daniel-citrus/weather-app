import { data as dataStorage } from './barrel';
import { weather } from './barrel';

document.addEventListener('DOMContentLoaded', () => {
    weather.startUp().then((data) => {
        const fore = new dataStorage.forecast(data.forecast);
        console.log(fore);
    });
});
