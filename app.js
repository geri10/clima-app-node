const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    latitud: {
        alias: 'la',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true

    },
    longitud: {
        alias: 'lo',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    },
    rango: {
        alias: 'r',
        desc: 'direccion de la ciudad para obtener el clima',
        default: 0
    }
}).argv;

//lugar.getLugarLatLng(argv.latitud, argv.longitud, argv.rango)
//    .then(console.log);

//clima.getClima(-17.78629, -63.18117)
//    .then(console.log)
//    .catch(console.log);

const getInfo = async(latitud, longitud, rango) => {

    try {
        const coords = await lugar.getLugarLatLng(latitud, longitud, rango);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `el clima de ${coords.direccion} es de ${temp} .`;
    } catch (e) {
        return `no de pudo determinar el clima`;
    }




}

getInfo(argv.latitud, argv.longitud, argv.rango)
    .then(console.log)
    .catch(console.log);