const { request } = require("express");
const { validationResult } = require("express-validator");
const { returnTypes } = require("../_authHelpers");

const checkFormErrors = ( req = request, { respond }, next ) => {
    const errors = validationResult( req );

    if (!errors.isEmpty())
        return respond( returnTypes.foundErrors( errors.errors ) );
    
    next();
}

module.exports = checkFormErrors;