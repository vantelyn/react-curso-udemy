const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad: 45,
    direccion: {
        ciudad:'New York',
        zip:12560,
        lat:15.54565,
        lng:25.98856,
    }
};

//copiar por valor
const persona2 = {...persona};

//console.table({persona});
persona2.nombre='Mario';
console.log({persona});
console.log({persona2});