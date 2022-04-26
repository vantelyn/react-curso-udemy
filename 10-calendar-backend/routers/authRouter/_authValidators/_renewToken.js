const { request } = require("express");
const { authGenToken, returnTypes } = require("../_authHelpers");

const renewToken = async (req = request, { respond }) => {

    const user = req.user;

    try {        
        const token = await authGenToken( user.uid, user.name );
        return respond( returnTypes.userLogin( token ) );
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }

}

module.exports = renewToken;