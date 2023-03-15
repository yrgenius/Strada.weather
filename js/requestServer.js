import { renderNow } from "./ui/renderNow.js";
import { store } from "./store.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '1c2268a6091c1e4e06be679a2e76568e';
const defaultCity = 'kursk';


export function requestServer(city) {
    let cityName = city.toLowerCase() || defaultCity;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(data => data.json())
        .then(data => store.setState(data))
        .then(data => renderNow(store.getState(cityName)));
}



// json ответа https://openweathermap.org/current#current_JSON
// картинки    https://openweathermap.org/weather-conditions