import { store } from "./store.js";
import { render } from "./ui/render.js";
import { responseError } from "./services.js";
import { setLocalStorage } from "./localStorage.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '1c2268a6091c1e4e06be679a2e76568e';
const defaultCity = 'kursk';


export function requestServer(city) {
    let cityName = city.toLowerCase() || defaultCity;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(url)
        .catch((error) => Promise.reject(responseError(error)))
        .then(data => data.json())
        .then(data => store.setState(data))
        .then(() => render(cityName))
        .catch((error => console.error(error)))
}



// json ответа https://openweathermap.org/current#current_JSON
// картинки    https://openweathermap.org/weather-conditions