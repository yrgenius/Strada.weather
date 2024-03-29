import { checkActiveClass } from "../favoriteButtonHandler.js";
import { formatTemp } from "../services.js";

const temp = document.querySelector('.left__now-temperature');
const image = document.querySelector('.left__now-img');
const city = document.querySelector('.left__now-location');
const heart = document.querySelector('.left__now-favorites');


export function renderNow(data) {
    console.log('***  render NOW  ***'); //del
    try {
        if (data) {
            temp.textContent = `${formatTemp(data.temp)}`;
            city.textContent = data.name;
            image.src = data.icon;
            if (data.favorite & !checkActiveClass(heart)) heart.classList.add('left__now-favorites-active');
            else {
                heart.classList.remove('left__now-favorites-active');
            }
        }
        testRenderNow(true);
    }
    catch (error) {
        console.log('Ошибка при рендере страницы "Now"');
        console.log(error);
        testRenderNow(false);
    }
}

function testRenderNow(isOK) {
    (isOK)
        ? console.log("OK")
        : console.log("FAIL"); //del
}
