const { request } = require("express");
const { Event } = require("../../../database");
const { returnTypes } = require("../../__global__/helpers");

const eventGetAll = async (req = request, { respond }) => {

    try {
        const eventsFound = await Event.find().populate('user', 'name');
        return respond( returnTypes.eventGetAll( eventsFound ) );
    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.internalServerError );
    }
        
}

module.exports = eventGetAll;