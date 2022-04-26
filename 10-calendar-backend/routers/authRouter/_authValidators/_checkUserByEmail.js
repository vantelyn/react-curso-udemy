const { request } = require("express");
const { Usuario } = require("../../../database/_dbModels");
const { returnTypes } = require("../_authHelpers");

const checkUserByEmail = async ( req = request, { respond }, next  ) => {

    const { email } = req.body;
    
    try {
        req.user = await Usuario.findOne({ email })
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
    
    next();
}

module.exports = checkUserByEmail;