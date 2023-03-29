import { store } from "../store.js";
import { removeElemLocalStorage } from '../localStorage.js';
import { render } from "./render.js";
import { checkActiveClass } from "../favoriteButtonHandler.js";

const favoriteWrapper = document.querySelector('.right__list');

favoriteWrapper.addEventListener('click', updatePages);


export function renderFavoriteCityList() {
    console.log('***  render FAVORITE  ***'); //del
    clearFavoriteList();

    if (store.checkEmptyState()) {
        fillFavoriteCityList(sampleFavoriteCity());
    }
    testRenderFavoriteCityList();
}

function fillFavoriteCityList(state) {
    if (!state) return;

    // console.log(state); //del
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

    // console.log('Создали элемент ' + city); //del
}

function clearFavoriteList() {
    let list = document.querySelectorAll('.right__item');
    Array.from(list).forEach(el => el.remove());
}

function removeElement(event) {
    event.target.parentElement.remove();
    store.changeStateElement(event.target.parentElement.textContent, 'favorite', checkActiveClass(event.target));
    removeElemLocalStorage(event.target.parentElement.textContent);
}

function updatePages() {
    let target = event.target;

    if (target.tagName === 'BUTTON') return;
    render(target.textContent.toLowerCase())
}

function sampleFavoriteCity() {
    let state = store.getState();
    let favoriteList = {};

    for (let key of Object.keys(state)) {
        if (state[key].favorite) {
            favoriteList[key] = state[key];
        }
    }

    return favoriteList;
}

function testRenderFavoriteCityList() {
    let equal = (localStorage.length === document.querySelectorAll('.right__item').length);
    console.log(`test(renderFavoriteCityList() ) : \n\t\t\tразмер отображаемого списка совпадает с размером localStorage => ${equal}`);
}