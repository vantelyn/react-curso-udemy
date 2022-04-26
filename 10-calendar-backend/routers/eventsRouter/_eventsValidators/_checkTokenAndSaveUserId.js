const { request } = require("express");
const { decode } = require("jsonwebtoken");
const { isValidToken, returnTypes } = require("../_eventsHelpers");

const checkTokenAndSaveUserId = (req = request, { respond }, next) => {
    const token = req.header('x-token');

    if ( isValidToken( token ) ) {
        const payload = decode( token );
        req.uid = payload.uid;        
    } else {
        return respond( returnTypes.badToken );
    }
    
    next();
}

module.exports = checkTokenAndSaveUserId;
