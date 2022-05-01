const { request } = require("express");
const { returnTypes } = require("../../__global__/helpers");
const { generateSessionToken } = require("../_authHelpers");

const checkIfUserIsBanned = ( req = request, { respond }, next ) => {
    const user = req.user;
    if( user.banned )
        return respond( returnTypes.userBanned );
    next();
}

const userLogin = async ( req = request, { respond } ) => {
    const { id } = req.user;
    try {        
        const token = await generateSessionToken( id );
        return respond( returnTypes.userLogin( token, req.user ) );      
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
}

module.exports = [ checkIfUserIsBanned, userLogin ];