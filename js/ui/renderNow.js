const temp = document.querySelector('.left__now-temperature');
const image = document.querySelector('.left__now-img');
const city = document.querySelector('.left__now-location');


export function renderNow(data) {
    try {
        console.log(data); //del
        temp.textContent = formatTemp(data.temp);
        city.textContent = data.name;
        image.src = data.icon;
    }
    catch (error) {
        console.log(error);
    }

}

function formatTemp(temp) {
    return (temp < 10) ? `\u2009\u2009${Math.round(temp)}\u00B0` : `${Math.round(temp)}\u00B0`
}