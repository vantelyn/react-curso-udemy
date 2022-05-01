const returnTypes = {
    getAllEvents: ( events ) => ({
        status: 200,
        payload: {
            ok: true,
            msg: 'Events returned',
            events
        }
    }),
    eventCreated: ( event ) => ({
        status: 200,
        payload: {
            ok: true,
            msg: 'Event created',
            event
        }
    }),
    eventUpdated: ( event ) => ({
        status: 200,
        payload: {
            ok: true,
            msg: 'Event updated',
            event
        }
    }),
    foundErrors: ( errors ) => ({
        status: 400,
        payload: {
            ok: false,
            msg: 'The system found some errors',
            errors
        }
    }),
    eventDeleted: {
        status: 200,
        payload: {
            ok: true,
            msg: 'Event deleted'
        }
    },    
    invalidToken: {
        status: 401,
        payload: {
            ok: false,
            msg: 'Invalid token'
        }        
    },
    internalServerError: {
        status: 500,
        payload: {
            ok: false,
            msg: 'Internal Server error'
        }        
    },
    eventNotFound:{
        status: 404,
        payload: {
            ok: false,
            msg: 'Event not found'
        }
    },
    youHaveNoRightBitch:{
        status: 401,
        payload: {
            ok: false,
            msg: 'Events can only be modified by owner'
        }
    }
}

module.exports = returnTypes;