import { renderNow } from "./renderNow.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const cityName = 'boston';
const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

export function requestServer() {
    fetch(url)
        .then(data => data.json())
        .then(data => renderNow(data));
}

