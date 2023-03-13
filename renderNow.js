const temp = document.querySelector('.left__now-temperature');
const image = document.querySelector('.left__now-img');
const images = {
    '': '',
}

export function renderNow(data) {
    temp.textContent = formatTemp(data.main.temp);
}

function converterTemp(kelvin) {
    return Math.round(kelvin - 273);
}

function formatTemp(value) {
    let temp = converterTemp(value);
    return (temp < 10) ? `\u2009\u2009${temp}\u00B0` : `${temp}\u00B0`
}

function showImages() {
    for (const img in Object.keys(images)) {
        console.log(); //del
    }
}