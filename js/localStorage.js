import { store } from "./store.js";


function getLocalStorage() {
    console.log('getLocalStorage'); //del

    try {
        if (localStorage.length) {
            let data = undefined;
            for (let key of Object.keys(localStorage)) {
                data = localStorage.getItem(key);
                if (key) store.setStateFromLocalStorage(JSON.parse(data));
            }
        }
    }
    catch (error) {
        console.log('При чтении из localStorage возникла ошибка');
        console.error(error);
    }

    showLocalStorage();
}

function setLocalStorage() {
    console.log('settLocalStorage'); //del

    let state = store.getState();
    let keys = Object.keys(state);

    try {
        if (keys.length) {
            for (let i = 0; i < keys.length; i++) {
                console.log('add to localStorage ' + state[keys[i]].name); //del
                localStorage.setItem(state[keys[i]].name.toLowerCase(), JSON.stringify(state[keys[i]]));
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
    console.log("LOCAL_STORAGE START>>>"); //del
    for (let key of Object.keys(localStorage)) {
        console.log(localStorage.getItem(key)); //del
    }
    console.log(" <<< LOCAL_STORAGE END"); //del
}

export { getLocalStorage, setLocalStorage, removeElemLocalStorage }