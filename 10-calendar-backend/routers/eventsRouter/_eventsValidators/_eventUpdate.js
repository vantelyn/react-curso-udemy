const { request, response } = require("express");
const { Event } = require("../../../database");
const { returnTypes } = require("../_eventsHelpers");


const findEventById = async ( req = request, { respond }, next ) => {
    const eventId = req.params.id;
    try {
        const event = await Event.findById( eventId );        
        if( !event )
            return respond( returnTypes.eventNotFound );
        req.eventToModify = event;
    } catch ( err ) {
        console.log( err )
        return respond( returnTypes.internalServerError );
    }
    next();
}

const checkEventOwner = ( req = request, { respond }, next) => {
    const { user } = req.eventToModify;
    if ( !user.equals( req.user.id )  )
        return respond( returnTypes.youHaveNoRightBitch );
    next();
}

const eventUpdate = async (req = request, { respond }) => {
    const event = req.eventToModify;
    try {
        let modifiedEvent = {
            ...event.toJSON(),
            ...req.body
        }
        modifiedEvent = await Event.findByIdAndUpdate( event.id, modifiedEvent, {new:true} );
        return respond( returnTypes.eventUpdated( modifiedEvent ) ) ;
    } catch ( err ) {
        console.log( err );
        return respond( returnTypes.internalServerError );
    } 
}

module.exports = [findEventById, checkEventOwner, eventUpdate];