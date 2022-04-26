const { request } = require("express");
const { decode } = require("jsonwebtoken");
const { returnTypes, isValidToken } = require("../_authHelpers");

const checkTokenAndSaveUser = (req = request, { respond }, next) => {
    const token = req.header('x-token');
    console.log('hola')
    if ( isValidToken( token ) ) {
        console.log( token )
        req.user = decode( token );       
    } else {
        return respond( returnTypes.badToken );
    }
    
    next();
}

module.exports = checkTokenAndSaveUser;
