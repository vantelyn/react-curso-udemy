const { request } = require("express");
const { Event } = require("../../../database");
const { returnTypes } = require("../../__global__/helpers");

const eventCreateNew = async (req = request, { respond } ) => {
    let newEvent = new Event({
        ...req.body,
        user: req.user.id
    });

    try {
        newEvent = await newEvent.save();
        return respond( returnTypes.eventCreated( newEvent ) );
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }  
}

module.exports = eventCreateNew;