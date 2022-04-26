const { request, response } = require("express");
const { Event } = require("../../../database/_dbModels");
const { eventsMsgTypes } = require("../_eventsHelpers");
/* 
    Must go after eventsfindEventByProvidedId
*/
const updateEvent = async (req = request, { respond }) => {
    const eventId = req.params.id;
    let modifiedEvent = {
        ...req.eventToModify?.toJSON(),
        ...req.body
    }

    try {
        modifiedEvent = await Event.findByIdAndUpdate( eventId, modifiedEvent );
        return respond( eventsMsgTypes.eventUpdated( modifiedEvent ) ) ;
    } catch ( err ) {
        console.log( err );
        return respond( eventsMsgTypes.internalServerError );
    } 
}

module.exports = updateEvent;