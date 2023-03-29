import { store } from "../store.js";
import { renderNow } from "./renderNow.js";
import { renderDetails } from "./renderDetails.js";
import { renderFavoriteCityList } from "./renderFavoriteCityList.js";

export function render(city) {
    console.log('*****  Рендерим  *****'); //del
    let data = {};

    if (city) {
        data = store.getStateElement(city);
    }
    else {
        data = {
            "kursk": {
                "name": "Kursk",
                "id": 538560,
                "temp": 5.61,
                "clouds": "Drizzle",
                "feels": 5.61,
                "sunrise": 1678938501,
                "sunset": 1678981186,
                "icon": "https://openweathermap.org/img/wn/09d@2x.png",
                "favorite": true,
            }
        }
    }

    if (data) {
        renderNow(data);
        renderDetails(data);
        renderFavoriteCityList(data);
    }

    testRender(city, data);
}

function testRender(city, data) {
    console.log(`test(render(city,data) ) : city функции строка => ${typeof city === 'string'}`);
    console.log(`test(render(city,data) ) : data функции не undefined => ${data !== undefined}`);
}