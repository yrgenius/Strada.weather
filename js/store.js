const store = {
    state: {},

    setState(data) {
        let key = data.name.toLowerCase();
        // this.state.push({
        //     [key]: {
        //         name: data.name,
        //         id: data.id,
        //         temp: data.main.temp,
        //         clouds: data.clouds.all,
        //         feels: data.main.feels_like,
        //         sunrise: data.sys.sunrise,
        //         sunset: data.sys.sunset,
        //         icon: `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`,
        //         favorite: false,
        //     }
        // });
        this.state[key] = {
            name: data.name,
            id: data.id,
            temp: data.main.temp,
            clouds: data.clouds.all,
            feels: data.main.feels_like,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            icon: `https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`,
            favorite: false,
        }
        this.showState();
    },


    getState() {
        return this.state;
    },

    showState() {
        console.table(JSON.stringify(this.state, null, 4));
    }
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