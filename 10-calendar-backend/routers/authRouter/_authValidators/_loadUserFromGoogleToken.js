const { request } = require("express");
const { User } = require("../../../database");
const { returnTypes } = require("../../__global__/helpers");
const { verifyGoogleToken } = require("../_authHelpers");

const checkGoogleToken = async ( req = request, { respond }, next ) => {
    const googleToken = req.header('g-token');
    try {
        req.googleUser = await verifyGoogleToken( googleToken );
    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.invalidToken );
    }
    next();

}

const findAndUpdateLocalUserOrCreateNew = async ( req = request, { respond }, next ) => {
    const { email } = req.googleUser;

    try {        
        let user = await User.findOne({ email });

        if(user){
            user = await User.findByIdAndUpdate( user.id, req.googleUser, { new:true } );
        } else {
            user = await new User( req.googleUser ).save();
        }

        req.user = user.info();
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }

    next();
}

const loadUserFromGoogleToken = [checkGoogleToken, findAndUpdateLocalUserOrCreateNew];

module.exports = loadUserFromGoogleToken;