const jwt = require("jsonwebtoken");

const generarJWT = ( uid, name ) => {
    return new Promise( ( resolve, reject ) => {

        const payload = { uid, name };
        const privateKey = process.env.SECRET_JWT_SEED;
        const options = {
            expiresIn: '2h'
        };
        const callBack = ( err, token ) => {

            if ( err ) {
                console.log( err )
                reject( 'No se pudo generar el token' )
            }

            resolve( token );
        }

        jwt.sign( payload, privateKey, options, callBack )

    } )
}


module.exports = {
    generarJWT
};