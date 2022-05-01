const { request } = require("express");
const { genSaltSync, hashSync } = require("bcryptjs");
const { User } = require("../../../database");
const { returnTypes } = require("../../__global__/helpers");

const checkIfUserAlreadyExists = async (req = request, { respond }, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email })
        if (user)
            return respond( returnTypes.userAlreadyExists );
    } catch (err) {
        console.log(err);
        return respond( returnTypes.internalServerError );
    }

    next();
}

const createNewUser = async (req = request, { respond }, next) => {
    const salt = genSaltSync();    
    
    try {
        let user = new User( req.body );
        user.password = hashSync( user.password, salt );

        await user.save();

        req.user = user.info();
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }

    next();
}

const loadUserFromNewUser = [checkIfUserAlreadyExists, createNewUser];

module.exports = loadUserFromNewUser;