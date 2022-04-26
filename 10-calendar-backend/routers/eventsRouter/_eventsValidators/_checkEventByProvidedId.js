const { request } = require("express");
const { Event } = require("../../../database/_dbModels");
const { returnTypes } = require("../_eventsHelpers");

const checkEventByProvidedId = async ( req = request, { respond }, next ) => {
    const eventId = req.params.id;

    try {
        req.eventToModify = await Event.findById(eventId);        
    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.eventNotFound );
    }
    
    next();
}

module.exports = checkEventByProvidedId;