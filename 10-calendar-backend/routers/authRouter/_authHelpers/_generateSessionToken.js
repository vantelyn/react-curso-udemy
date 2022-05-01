const { sign } = require("jsonwebtoken");

const generateSessionToken = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        const payload = { id };
        const privateKey = process.env.SECRET_JWT_SEED;
        const options = {
            expiresIn: '2h'
        };

        try {
            token = sign(payload, privateKey, options);
            resolve( token );
        } catch (err) {
            reject( err );
        }
    })
}

module.exports = generateSessionToken;