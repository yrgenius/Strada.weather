import { store } from "./store.js";
import { searchHandler } from "./searchHandler.js";
import { getLocalStorage } from "./localStorage.js";
import { renderFavoriteCityList } from "./ui/renderFavoriteCityList.js";
import { favoriteButtonHandler } from './favoriteButtonHandler.js';
import { requestServer } from "./requestServer.js";
import { render } from "./ui/render.js";

init();
renderFavoriteCityList();
searchHandler();

function init() {
    let localStorageData = getLocalStorage();

    if (Object.keys(localStorageData).length) {
        for (const [city, data] of Object.entries(localStorageData)) {
            store.setStateFromLocalStorage(city, JSON.parse(data));
        }
        render(Object.keys(localStorageData)[0]);
    }
    else {
        requestServer();
    }
}