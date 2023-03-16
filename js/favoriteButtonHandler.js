import { store } from "./store.js";
import { setLocalStorage } from "./localStorage.js";
import { render } from "./ui/render.js";


const favoriteButton = document.querySelector('.left__now-button');
const location = document.querySelector('.left__now-location');


favoriteButton.addEventListener('click', favoriteButtonHandler);

function favoriteButtonHandler(event) {
    let city = location.textContent.toLowerCase();

    changeButtonColor(event.target);
    store.changeStateElement(city, 'favorite', checkActiveClass(event.target));
    setLocalStorage();
    render(city);
}

function changeButtonColor(element) {
    element.classList.toggle('left__now-favorites-active');
}

function checkActiveClass(element) {
    return element.classList.contains('left__now-favorites-active');
}

export { favoriteButtonHandler, checkActiveClass }

