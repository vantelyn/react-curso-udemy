const { request } = require("express");
const { returnTypes, generateSessionToken } = require("../_authHelpers");

const checkUserBanned = ( req = request, { respond }, next ) => {
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

module.exports = [ checkUserBanned, userLogin ];