const { response, request } = require("express");
const jwt = require("jsonwebtoken");


const validarJWT = ( req = request, res = response, next ) => {

    const token = req.header('x-token');
    const secretKey = process.env.SECRET_JWT_SEED;

    if ( !token ) {
        return res.status( 401 ).json({
            ok: false,
            msg: 'No hay token en la petición'
        })
    }

    try {
        
        const { uid, name } = jwt.verify( token, secretKey );

        req.uid = uid;
        req.name = name;

    } catch ( err ) {
        return res.status( 401 ).json({
            ok: false,
            msg: 'Token no válido'
        })
    }

    next();

}

module.exports = {
    validarJWT
};