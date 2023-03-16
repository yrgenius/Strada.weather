import { store } from "./store.js";
import { setLocalStorage } from "./localStorage.js";
import { renderFavoriteCityList } from './ui/renderFavoriteCityList.js';

const favoriteButton = document.querySelector('.left__now-button');
const location = document.querySelector('.left__now-location');


favoriteButton.addEventListener('click', favoriteButtonHandler);

function favoriteButtonHandler(event) {
    let city = location.textContent;

    changeButtonColor(event.target);
    store.changeStateElement(city, 'favorite', checkActiveClass(event.target));
    setLocalStorage();
    renderFavoriteCityList(store.getStateElement(city));
}

function changeButtonColor(element) {
    element.classList.toggle('left__now-favorites-active');
}

function checkActiveClass(element) {
    return element.classList.contains('left__now-favorites-active');
}

export { favoriteButtonHandler, checkActiveClass }

