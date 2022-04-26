const { response } = require("express");

const injectResponder = ( req, res = response, next ) => {
    res.respond = ( responseType ) => {
        res.status( responseType.status ).json( responseType.payload );
    }
    next();
}

module.exports = injectResponder;