import { store } from "../store.js";
import { renderNow } from "./renderNow.js";
import { renderDetails } from "./renderDetails.js";
import { renderFavoriteCityList } from "./renderFavoriteCityList.js";

export function render(cityName) {
    let data = store.getStateElement(cityName);

    renderNow(data);
    renderDetails(data);
    renderFavoriteCityList(data);
}