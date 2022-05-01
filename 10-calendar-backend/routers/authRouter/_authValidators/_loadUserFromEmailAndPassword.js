const { compareSync } = require("bcryptjs");
const { request } = require("express");
const { User } = require("../../../database");
const { returnTypes } = require("../../__global__/helpers");

const loadUserFromEmailAndPassword = async (req = request, { respond }, next) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user || !compareSync(password, user?.password))
            return respond(returnTypes.userBadCredentials);

        req.user = user.info();        
    } catch (err) {
        console.log(err);
        return respond(returnTypes.internalServerError);
    }

    next();
}

module.exports = loadUserFromEmailAndPassword;