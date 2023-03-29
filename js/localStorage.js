import { store } from "./store.js";


function getLocalStorage() {
    let localStorageData = {};
    try {
        if (localStorage.length) {
            for (let city of Object.keys(localStorage)) {
                localStorageData[city] = localStorage.getItem(city);
            }
        }
    }
    catch (error) {
        console.log('При чтении из localStorage возникла ошибка');
        console.error(error);
    }

    return localStorageData;
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

    // showLocalStorage();
}

function removeElemLocalStorage(key) {
    key = key.toLowerCase();
    localStorage.removeItem(key);
    // showLocalStorage();
}

function clearLocalStorage() {
    for (const key of Object.keys(localStorage)) {
        localStorage.removeItem(key);
    }
}

function showLocalStorage() {
    console.log("LOCAL_STORAGE START>>>"); //del
    for (let key of Object.keys(localStorage)) {
        console.log(localStorage.getItem(key)); //del
    }
    console.log(" <<< LOCAL_STORAGE END"); //del
}

(function testGetLocalStorage() {
    let localS = getLocalStorage();
    let isObject = (typeof localS === "object");
    let isEmpty = (Object.keys(localS).length !== 0);
    console.log(`test(getLocalStorage) : Вернулся ли из localStorage объект => ${isObject}`);
    console.log(`test(getLocalStorage) : localStorage не пустой => ${isEmpty}`);
})();


export { getLocalStorage, setLocalStorage, removeElemLocalStorage }