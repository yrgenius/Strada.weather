import { requestServer } from "./requestServer.js";

const INPUT_TEXT = document.querySelector('.search__input');
const SEARCH_BUTTON = document.querySelector('.search__image');
let observable = undefined;

INPUT_TEXT.addEventListener('keypress', inputHandler);
SEARCH_BUTTON.addEventListener('click', buttonHandler);

class Observer {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(subs => subs !== observer);
    }

    notify(city) {
        this.observers.forEach(observer => observer(city));
    }
}

function inputHandler() {
    let city = INPUT_TEXT.value;
    if (event.key === 'Enter') {
        observable.notify(city);
    }
}

function buttonHandler() {
    let city = INPUT_TEXT.value;
    observable.notify(city);
}

export function searchHandler() {
    observable = new Observer();
    observable.subscribe(requestServer);
}
