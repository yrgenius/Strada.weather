import { formatTime, formatTemp } from "../services.js";

const city = document.querySelector('.left__details-location');
const list = document.querySelectorAll('.left__details-item');


export function renderDetails(data) {
    const weather = [
        `temperature: ${formatTemp(data.temp)}`,
        `feels like: ${formatTemp(data.feels)}`,
        `weather: ${data.clouds}`,
        `sunrise: ${formatTime(data.sunrise)}`,
        `sunset: ${formatTime(data.sunset)}`];

    try {
        if (data) {
            city.textContent = data.name;
            list.forEach((element, index) => element.textContent = weather[index]);
        }

    }
    catch (error) {
        console.log('Ошибка при рендере страницы "Details"');
        console.log(error);
    }
}
