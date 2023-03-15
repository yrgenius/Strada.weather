import { store } from "./store.js";


function getLocalStorage() {
    console.log('getLocalStorage'); //del

    let state = {};
    try {
        if (localStorage.length)
            for (let key in Object.keys(localStorage)) {
                if (key) store.setState(localStorage.getItem(key));
            }
    }
    catch (error) {
        console.log('При чтении из localStorage возникла ошибка');
        console.error(error);
    }

    console.log(state); //del

    showLocalStorage();
}

function setLocalStorage() {
    console.log('settLocalStorage'); //del

    let state = store.getState();

    try {
        if (Object.keys().length) {
            for (const key in Object.keys(state)) {
                console.log(key); //del
                localStorage.setItem(key, state[key]);
            }
        }
    }
    catch (error) {
        console.log('При записи в localStorage возникла ошибка');
        console.error(error);
    }

    showLocalStorage();
}

function removeElemLocalStorage(key) {
    localStorage.removeItem(key);
    showLocalStorage
}

function showLocalStorage() {
    console.log("LOCAL_STORAGE"); //del
    for (let key in Object.keys(localStorage)) {
        console.log(localStorage.getItem(key)); //del
    }
}

export { getLocalStorage, setLocalStorage, removeElemLocalStorage }