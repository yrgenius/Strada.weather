import { store } from "./store.js";


function getLocalStorage() {
    console.log('*****  Читаем из localStorage  *****'); //del
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
    console.log('*****  Сохраняем в localStorage  *****'); //del

    let favorite = selectFavoriteFromStore();
    let keys = Object.keys(favorite);

    try {
        if (keys.length) {
            for (let i = 0; i < keys.length; i++) {
                console.log('add to localStorage ' + favorite[keys[i]].name); //del
                localStorage.setItem(favorite[keys[i]].name.toLowerCase(), JSON.stringify(favorite[keys[i]]));
            }
        }
    }
    catch (error) {
        console.log('При записи в localStorage возникла ошибка');
        console.error(error);
    }

    // showLocalStorage();
}

function selectFavoriteFromStore() {
    let state = store.getState();
    let favorite = {};

    for (let el of Object.keys(state)) {
        if (state[el].favorite) favorite[state[el].name.toLowerCase()] = state[el];
    }

    return favorite;
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