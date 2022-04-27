const { request } = require("express");
const { genSaltSync, hashSync } = require( "bcryptjs" );
const { Usuario } = require("../../../database/_dbModels");
const { returnTypes, authGenToken } = require("../_authHelpers");

const createNewUser = async ( req = request, { respond } ) => {
    const user = new Usuario( req.body ); 

    const salt = genSaltSync();
    user.password = hashSync( user.password, salt );

    try {        
        await user.save();
        const token = await authGenToken( user.id, user.name );
        return respond( returnTypes.userCreated( token ) );
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
}

module.exports = createNewUser;