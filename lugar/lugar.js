const axios = require('axios');

const getLugarLatLng = async(latitud, longitud, rango) => {

    const encodeUlr = encodeURI(latitud);
    const encodeUlr1 = encodeURI(longitud);
    const encodeUlr2 = encodeURI(rango);

    const instance = axios.create({
        baseURL: `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${encodeUlr} &longitude=${encodeUlr1}&range=${encodeUlr2}`,
        headers: { 'x-rapidapi-key': '7cb496c4admsh704fc02ac084f77p12d496jsn9309d4cb6da7' }
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultado para ${latitud} y ${longitud}`);
    }

    const dato = resp.data[0];
    const direccion = dato.City;
    const lat = dato.Latitude;
    const lng = dato.Longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng,
}