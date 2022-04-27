const { request } = require("express");
const { Event } = require("../../../database/_dbModels");
const { returnTypes } = require("../_eventsHelpers");

const checkEventByProvidedId = async ( req = request, { respond }, next ) => {
    const eventId = req.params.id;

    try {
        req.eventToModify = await Event.findById( eventId );
        
        if( !req.eventToModify )
            return respond( returnTypes.eventNotFound );

    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.internalServerError );
    }
    
    next();
}

module.exports = checkEventByProvidedId;