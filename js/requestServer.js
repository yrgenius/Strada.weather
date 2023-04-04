import { store } from "./store.js";
import { render } from "./ui/render.js";
import { responseError } from "./services.js";
import { setLocalStorage } from "./localStorage.js";

const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '1c2268a6091c1e4e06be679a2e76568e';
const defaultCity = 'kursk';


export async function requestServer(city) {
    testRequestServer(city);

    let cityName = '';
    (city)
        ? cityName = city.toLowerCase()
        : cityName = defaultCity;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    console.log(`Делаем запрос на сервер: г.${cityName}`);

    try {
        let response = await fetch(url);
        let data = await response.json();
        store.setState(data);
        render(cityName);
    }
    catch {
        console.error(error);
    }


    return cityName;
}

function testRequestServer(city) {
    console.log(`test(requestServer(city) ) : city функции строка => ${typeof city === 'string'}`);
}



// json ответа https://openweathermap.org/current#current_JSON
// картинки    https://openweathermap.org/weather-conditions