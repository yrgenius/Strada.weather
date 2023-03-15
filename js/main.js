import { tabChanger } from "./tabChanger.js";
import { searchHandler } from "./searchHandler.js";
import { favoriteHandler } from "./favoriteHandler.js";
import { getLocalStorage } from "./localStorage.js";

getLocalStorage();
tabChanger();
searchHandler();
favoriteHandler();



