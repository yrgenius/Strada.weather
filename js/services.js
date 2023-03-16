function responseError(response) {
    console.log('Ошибка при запросе на сервер');
    console.dir(response);
    alert(`Ошибка при запросе на сервер`);
}

function formatTemp(temp) {
    return (temp < 10) ? `\u2009\u2009${Math.round(temp)}\u00B0` : `${Math.round(temp)}\u00B0`
}

function formatTime(timestamp) {
    const time = new Date(timestamp);
    return `${time.getHours()}:${time.getMinutes()}`;
}

export { responseError, formatTemp, formatTime }