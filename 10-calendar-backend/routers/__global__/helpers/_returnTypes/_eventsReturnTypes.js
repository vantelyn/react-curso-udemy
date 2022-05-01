const eventsReturnTypes = {
    eventGetAll: ( events ) => ({
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
    eventDeleted: {
        status: 200,
        payload: {
            ok: true,
            msg: 'Event deleted'
        }
    },    
    eventNotFound:{
        status: 404,
        payload: {
            ok: false,
            msg: 'Event not found'
        }
    },
    eventNotOwned:{
        status: 401,
        payload: {
            ok: false,
            msg: 'Events can only be modified by owner'
        }
    },
};

module.exports = eventsReturnTypes;