import { store } from "../store.js";

const favoriteList = document.querySelectorAll('.right__item');

export function renderFavoriteCityList() {
    clearFavoriteList();
    if (!store.checkEmptyState) fillFavoriteCityList(store.getState());

}

function fillFavoriteCityList(state) {
    if (!state) return;

    for (let element of state) {
        console.log(element); //del
    }
}

function createElement() {
    let item = document.createElement('li');
    let deleteButton = document.createElement('button');

    item.classList.add('right__item');
    deleteButton.classList('right__item-button');
    item.append(deleteButton);
}

function clearFavoriteList() {
    if (Object.keys(favoriteList)) {
        favoriteList.forEach(element => element.remove());
    }
}