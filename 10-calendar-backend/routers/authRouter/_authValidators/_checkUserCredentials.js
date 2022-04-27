const { compareSync } = require("bcryptjs");
const { returnTypes } = require("../_authHelpers");

const checkUserCredentials = async (req = request, { respond }, next) => {
    const user = req.user;
    const { password } = req.body;

    if ( !user || !compareSync( password, user?.password ) )
        return respond( returnTypes.badUserCredentials );

    next();
}

module.exports = checkUserCredentials;