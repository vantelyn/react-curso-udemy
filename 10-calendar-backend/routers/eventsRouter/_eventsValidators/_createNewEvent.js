const { request, response } = require("express");
const { Event } = require("../../../database/_dbModels");
const { returnTypes } = require("../_eventsHelpers");

const createNewEvent = async (req = request, { respond }) => {
    let newEvent = new Event({
        ...req.body,
        user: req.uid
    });

    try {
        newEvent = await newEvent.save();
        return respond( returnTypes.eventCreated( newEvent ) );
    } catch ( err ) {
        console.log( err );
        return res.respond( returnTypes.internalServerError );
    }  
}

module.exports = createNewEvent;