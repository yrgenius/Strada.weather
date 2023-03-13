import { renderNow } from "./renderNow.js";
import { store } from "./store.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';


export function requestServer(city) {
    let cityName = city.toLowerCase() || 'boston';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(data => data.json())
        .then(data => renderNow(data));
}

