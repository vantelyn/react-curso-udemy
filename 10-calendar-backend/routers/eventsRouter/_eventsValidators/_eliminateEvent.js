const { request, response } = require("express");
const { Event } = require("../../../database/_dbModels");
const {  returnTypes } = require("../_eventsHelpers");
/* 
    Must go after eventsfindEventByProvidedId

*/
const eliminateEvent = async (req = request, { respond }) => {
    const eventId = req.params.id;

    try {
        await Event.findByIdAndDelete( eventId );
        return respond( returnTypes.eventDeleted );
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    }
}

module.exports = eliminateEvent;