// Desestructuración
// Asignación desestructurante

const persona = {
    nombre:'Tony',
    edad:35,
    clave:'Ironman',
};

// const {nombre:nombrePersona, edad:edadPersona, clave:clavePersona} = persona;

// console.log(nombrePersona);
// console.log(edadPersona);
// console.log(clavePersona);

const retornaPersona = (usuario)=>{
    const {nombre:nombrePersona, edad:edadPersona, clave:clavePersona} = usuario;
    console.log(nombrePersona, edadPersona, clavePersona);
}

const retornaPersona2 = ({nombre, edad, rango='Capitán'})=>{
    console.log(nombre, edad, rango);
}

const usarContexto = ({clave, edad})=>{
    return{
        nombreClave:clave,
        anios: edad,
        latlng:{
            lat: 14.1225,
            lng: -12.5444
        }
    }
}

retornaPersona(persona);
retornaPersona2(persona);

const {nombreClave, anios, latlng:{lat,lng}} = usarContexto(persona);

console.log(nombreClave, anios);
console.log(lat, lng);