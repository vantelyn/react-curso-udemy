const { request } = require("express");
const { validationResult } = require("express-validator");
const { returnTypes } = require("../_eventsHelpers");

const checkFormErrors = ( req = request, { respond }, next ) => {
    const errors = validationResult( req );

    if (!errors.isEmpty())
        return respond( returnTypes.formErrors( errors.errors ) );
    
    next();
}

module.exports = checkFormErrors;