const { verify } = require("jsonwebtoken");

const isValidToken = ( token ) => {    
    const secretKey = process.env.SECRET_JWT_SEED;
    try {
        verify( token, secretKey );
        return true;
    } catch ( error ) {
        return false;
    }
}

module.exports = isValidToken;