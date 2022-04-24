const authErrorTypes = {
    noEmail:{
        status:400,
        msg:'El email es obligatorio'
    },
    errors:{
        status:400,
        msg:'Se han encontrado errores'
    },
    noName:{
        status:400,
        msg:'El nombre es obligatorio'
    },
    shortPw:{
        status:400,
        msg:'La contraseña tener más de 6 caracteres'
    },
    noToken:{
        status:401,
        msg:'No hay token en la petición'
    },
    badToken:{
        status:401,
        msg:'Token no válido'
    },
    badLogin:{
        status:400,
        msg:'Los datos son incorrectos'
    },
    userAlreadyExists:{
        status:400,
        msg: 'El usuario ya existe'
    },
    badPass:{
        status:400,
        msg:'Contraseña incorrecta'
    },
    internalServerError:{
        status:500,
        msg:'Hubo un error en el servidor'
    }
}

module.exports = authErrorTypes;