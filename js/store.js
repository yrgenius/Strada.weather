import { formatTemp } from "./services.js";

const store = {
    state: {
        // "kursk": {
        //     "name": "Kursk",
        //     "id": 538560,
        //     "temp": 5.61,
        //     "clouds": "Drizzle",
        //     "feels": 5.61,
        //     "sunrise": 1678938501,
        //     "sunset": 1678981186,
        //     "icon": "https://openweathermap.org/img/wn/09d@2x.png",
        //     "favorite": true,
        // }
    },

    setState(data) {
        if (data.name) {
            let key = data.name.toLowerCase();

            this.state[key] = {
                name: data.name,
                id: data.id,
                temp: data.main.temp,
                clouds: data.weather[0].main,
                feels: data.main.feels_like,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                favorite: false,
            }
        }

        this.showState();
    },

    setStateFromLocalStorage(city, data) {
        testSetStateFromLocalStorage(city, data);

        if (data.name) {
            this.state[city] = {
                name: data.name,
                id: data.id,
                temp: data.temp,
                clouds: data.clouds,
                feels: data.feels,
                sunrise: data.sunrise,
                sunset: data.sunset,
                icon: data.icon,
                favorite: data.favorite,
            }
        }

        // this.showState();
    },

    getStateElement(key) {
        return this.state[key];
    },

    getState() {
        return this.state;
    },

    changeStateElement(key, element, value) {
        key = key.toLowerCase();
        try {
            if (this.checkEmptyState()) this.state[key][element] = value;
        }
        catch (error) {
            console.log('Ошибка при изменении элемента в state');
            console.dir(error);
        }
        // this.showState();
    },

    checkEmptyState() {
        return Object.keys(this.state).length;
    },

    showState() {
        console.log("STATE START >>>"); //del
        console.table(JSON.stringify(this.state, null, 4));
        console.log("<<< STATE END"); //del
    },

    removeStateCity(city) {
        city = city.toLowerCase();
        delete (this.state[city]);
    },
}

function testSetStateFromLocalStorage(city, data) {
    console.log(`test( setStateFromLocalStorage(city,data) ) : city функции строка => ${typeof city === 'string'}`);
    console.log(`test( setStateFromLocalStorage(city,data) ) : data функции объект => ${typeof data === 'object'}`);
}

export { store }




// {
//     "coord": {
//         "lon": -71.0598,
//         "lat": 42.3584
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 1.89,
//         "feels_like": 1.89,
//         "temp_min": -0.35,
//         "temp_max": 3.47,
//         "pressure": 1017,
//         "humidity": 82
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 0.45,
//         "deg": 4,
//         "gust": 0.45
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1678691989,
//     "sys": {
//         "type": 2,
//         "id": 2013408,
//         "country": "US",
//         "sunrise": 1678705212,
//         "sunset": 1678747651
//     },
//     "timezone": -14400,
//     "id": 4930956,
//     "name": "Boston",
//     "cod": 200
// }