const { request } = require("express");
const { returnTypes, authGenToken } = require("../_authHelpers");

const userLogin = async ( req = request, { respond }, next  ) => {
    const user = req.user;
    try {        
        req.token = await authGenToken( user.id, user.name );
        return respond( returnTypes.userLogin( req.token ) );      
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
}

module.exports = userLogin;