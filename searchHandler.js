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

    notify() {
        this.observers.forEach(observer => observer());
    }
}

function searchCity() {
    observable = new Observer();
    observable.subscribe(requestServer);
}

function inputHandler() {
    if (event.key === 'Enter') {
        observable.notify();
    }
}

function buttonHandler() {
    observable.notify();
}

export { searchCity }
