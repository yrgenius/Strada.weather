import { formatTime } from "../services.js";

const city = document.querySelector('.left__details-location');
const list = document.querySelectorAll('.left__details-item');


export function renderDetails(data) {
    const weather = [
        `temperature: ${data.temp}`,
        `feels like: ${data.feels}\u00B0`,
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
