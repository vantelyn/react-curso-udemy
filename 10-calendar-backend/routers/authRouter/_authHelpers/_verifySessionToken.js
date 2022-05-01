const { verify } = require("jsonwebtoken");

const verifySessionToken = ( token ) => {    
    const secretKey = process.env.SECRET_JWT_SEED;    
    return verify( token, secretKey );    
}

module.exports = verifySessionToken;