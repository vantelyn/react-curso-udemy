const { request } = require("express");
const { returnTypes } = require("../_authHelpers");

const checkIfUserAlreadyExists = async ( req = request, { respond }, next  ) => {

    if( req.user )
        return respond( returnTypes.userAlreadyExists );
        
    next();
}

module.exports = checkIfUserAlreadyExists;