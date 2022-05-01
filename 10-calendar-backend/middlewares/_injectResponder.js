const { response } = require("express");

const injectResponder = ( req, res = response, next ) => {
    res.respond = ( returnType ) => {
        res.status( returnType.status ).json( returnType.payload );
    }
    next();
}

module.exports = injectResponder;