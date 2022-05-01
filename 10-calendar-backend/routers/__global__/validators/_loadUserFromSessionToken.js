const { request } = require("express");
const { User } = require("../../../database");
const { verifySessionToken, returnTypes } = require("../helpers");

const checkSessionTokenAndExtractUserId = (req = request, { respond }, next) => {
    const sessionToken = req.header('s-token');

    try {
        const { id } = verifySessionToken( sessionToken );
        req.userId = id;
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.invalidToken );
    }
    
    next();
}

const findUserById = async (req = request, { respond }, next) => {
    const id = req.userId;
    try {
        const user = await User.findById( id );
        req.user = user.info();
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
    
    next();
}

const checkIfUserIsBanned = ( req = request, { respond }, next ) => {
    const user = req.user;
    if( user.banned )
        return respond( returnTypes.userBanned );
    next();
}

module.exports = [ checkSessionTokenAndExtractUserId, findUserById, checkIfUserIsBanned ];
