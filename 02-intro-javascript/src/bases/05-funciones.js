// Funciones en JS

function saludar(nombre){
    return `Hola, ${nombre}`;
}

const saludar1 = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => `Hola Mundo`;

const getUser = () =>({
    uid:'ABC123',
    user:'El_Papi_Chulo',
})


console.log(saludar('Paco'));
console.log(saludar1('Paco'));
console.log(saludar2('Paco'));
console.log(saludar3('Paco'));
console.log(saludar4());
console.log(getUser());

// TAREA
// 1. Transformar en función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Hacer pruebas
function getUsuarioActivo(nombre){
    return{
        uid:'ABC123',
        user:nombre,
    }
}

const getUsuarioActivo2 = (nombre) =>({
    uid:'ABC123',
    user:nombre,
})

const usuarioActivo = getUsuarioActivo2('Alonso');
const usuarioActivo2 = getUsuarioActivo('Saracena');
console.log(usuarioActivo);
console.log(usuarioActivo2);