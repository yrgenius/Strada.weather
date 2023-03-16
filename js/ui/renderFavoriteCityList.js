import { store } from "../store.js";
import { removeElemLocalStorage } from '../localStorage.js';
import { render } from "./render.js";

const favoriteWrapper = document.querySelector('.right__list');

favoriteWrapper.addEventListener('click', updatePages);


export function renderFavoriteCityList() {
    clearFavoriteList();

    if (store.checkEmptyState()) {
        let state = store.getState();
        state = sampleFavoriteCity(state);
        fillFavoriteCityList(state);
    }

}

function fillFavoriteCityList(state) {
    if (!state) return;

    console.log(state); //del
    for (let city of Object.keys(state)) {
        createElement(state[city].name);
    }
}

function createElement(city) {
    let item = document.createElement('li');
    let deleteButton = document.createElement('button');

    item.classList.add('right__item');
    deleteButton.classList.add('right__item-button');

    item.textContent = city;

    deleteButton.addEventListener('click', removeElement);

    item.append(deleteButton);
    favoriteWrapper.append(item);

    console.log('Создали элемент ' + city); //del
}

function clearFavoriteList() {
    console.log('clear'); //del
    let list = document.querySelectorAll('.right__item');
    console.log(list); //del
    Array.from(list).forEach(el => el.remove());
}

function removeElement(event) {
    event.target.parentElement.remove();
    store.removeStateCity(event.target.parentElement.textContent);
    removeElemLocalStorage(event.target.parentElement.textContent);
}

function updatePages() {
    let target = event.target;

    if (target.tagName === 'BUTTON') return;
    render(target.textContent.toLowerCase())
}

function sampleFavoriteCity(state) {
    let favoriteList = {};

    for (let key of Object.keys(state)) {
        if (state[key].favorite) {
            favoriteList[key] = state[key];
        }
    }

    return favoriteList;
}