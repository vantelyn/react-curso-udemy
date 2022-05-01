const { request } = require("express");
const { User } = require("../../../database");
const { returnTypes, verifySessionToken } = require("../_eventsHelpers");

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

module.exports = [checkSessionTokenAndExtractUserId, findUserById];
