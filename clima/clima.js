const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=51827e85d436a5c49beb6f5492b42598&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}