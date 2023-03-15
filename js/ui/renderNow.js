const temp = document.querySelector('.left__now-temperature');
const image = document.querySelector('.left__now-img');
const city = document.querySelector('.left__now-location');


export function renderNow(data) {
    try {
        if (data) {
            temp.textContent = data.temp;
            city.textContent = data.name;
            image.src = data.icon;
        }

    }
    catch (error) {
        console.log('Ошибка при рендере страницы "Now"');
        console.log(error);
    }
}
