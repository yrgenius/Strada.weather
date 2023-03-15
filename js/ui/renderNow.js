import { store } from "../store.js";

const temp = document.querySelector('.left__now-temperature');
const image = document.querySelector('.left__now-img');
const city = document.querySelector('.left__now-location');
const images = {
    '': '',
}

export function renderNow(data) {
    temp.textContent = formatTemp(data.main.temp);
    city.textContent = data.name;
    image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function formatTemp(temp) {
    return (temp < 10) ? `\u2009\u2009${Math.round(temp)}\u00B0` : `${Math.round(temp)}\u00B0`
}

function showImages() {
    for (const img in Object.keys(images)) {
        console.log(); //del
    }
}