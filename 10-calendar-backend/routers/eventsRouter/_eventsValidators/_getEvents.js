const { request, response } = require("express");
const { Event } = require("../../../database/_dbModels");
const { returnTypes } = require("../_eventsHelpers");

const getEvents = async (req = request, { respond }) => {

    try {
        const eventsFound = await Event.find().populate('user', 'name password');
        return respond( returnTypes.getEvents( eventsFound ) );
    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.internalServerError );
    }
        
}

module.exports = getEvents;