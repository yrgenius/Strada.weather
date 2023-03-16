import { searchHandler } from "./searchHandler.js";
import { getLocalStorage } from "./localStorage.js";
import { renderFavoriteCityList } from "./ui/renderFavoriteCityList.js";
import { favoriteButtonHandler } from './favoriteButtonHandler.js';

getLocalStorage();
renderFavoriteCityList();
searchHandler();

