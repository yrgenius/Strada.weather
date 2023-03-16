import { store } from "../store.js";
import { renderNow } from "./renderNow.js";
import { renderDetails } from "./renderDetails.js";
import { renderFavoriteCityList } from "./renderFavoriteCityList.js";

export function render(cityName) {
    renderNow(store.getStateElement(cityName));
    renderDetails(store.getStateElement(cityName));
}