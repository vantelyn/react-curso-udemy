const { validationResult } = require("express-validator");

checkForErrors = (req = request, res = response, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
        req.errType = authErrorTypes.errors;
    next();
}

module.exports = checkForErrors;

