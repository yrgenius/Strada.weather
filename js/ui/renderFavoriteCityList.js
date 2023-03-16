import { store } from "../store.js";

const favoriteWrapper = document.querySelector('.right__list');
const favoriteList = document.querySelectorAll('.right__item');

export function renderFavoriteCityList() {
    clearFavoriteList();
    if (!store.checkEmptyState) fillFavoriteCityList(store.getState());

}

function fillFavoriteCityList(state) {
    if (!state) return;

    for (let element of state) {
        console.log(element); //del
        createElement(state.name);
    }
}

function createElement(city) {
    let item = document.createElement('li');
    let deleteButton = document.createElement('button');

    item.classList.add('right__item');
    deleteButton.classList.add('right__item-button');

    item.textContent(city)

    item.addEventListener('click', () => console.log('надо отобразить этот город'));

    item.append(deleteButton);
    favoriteWrapper.append(item);
}

function clearFavoriteList() {
    if (Object.keys(favoriteList)) {
        favoriteList.forEach(element => element.remove());
    }
}