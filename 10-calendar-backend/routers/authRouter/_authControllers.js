const { compareSync, genSaltSync, hashSync } = require("bcryptjs");
const { request, response } = require("express");
const { verify } = require("jsonwebtoken");
const { dbModels } = require("../../database");
const { authErrorTypes } = require("./_authHelpers");
const { generarJWT } = require("./_authHelpers");

const controlLogin = async ( req = request, res = response, next  ) => {

    const { email, password } = req.body;
    
    try {
        const user = await dbModels.Usuario.findOne({ email })

        if ( user && compareSync( password, user.password ) ){
            req.token = await generarJWT( user.id, user.name );
        } else {
            ( !req.errType ) && ( req.errType = authErrorTypes.badLogin );
        } 

    } catch ( err ) {
        console.log( err );
        req.errType = authErrorTypes.internalServerError;
    }
    
    next();
}


const controlNewUser = async ( req = request, res = response, next ) => {

    // const { name, email, password } = req.body;
    const { email, password } = req.body;

    try {
        let user = await dbModels.Usuario.findOne({ email })
        
        if (user) {
            // Verificar si ya existe
            ( !req.errType ) && ( req.errType = authErrorTypes.userAlreadyExists );
        } else {             
            // Crear nuevo usuario
            user = new dbModels.Usuario(req.body);
            // Encriptar contraseña
            const salt = genSaltSync();
            user.password = hashSync( password, salt );
            // Guardar usuario
            await user.save();
            //  Adjuntar JWT al request
            req.token = await generarJWT( user.id, user.name );            
        }
    } catch ( err ) {
        console.log( err );
        req.errType = authErrorTypes.internalServerError;
    }

    next();
}

const controlRenewToken = async (req = request, res = response, next) => {

    const token = req.header('x-token');
    const secretKey = process.env.SECRET_JWT_SEED;

    try {
        const { uid, name } = verify(token, secretKey, {});
        req.token = await generarJWT( uid, name );
    } catch (error) {
        console.log(error);
        (!token)
            ? (req.errType = authErrorTypes.noToken)
            : (req.errType = authErrorTypes.badToken)
    }

    next();
}

module.exports = controlRenewToken;

module.exports = {
    controlNewUser,
    controlLogin,
    controlRenewToken
};