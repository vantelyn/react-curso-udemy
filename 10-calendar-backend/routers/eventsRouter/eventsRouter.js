const { Router } = require('express');

const {
    controlGetEvents,
    controlCreateNewEvent,
    controlUpdateEvent,
    controlEliminateEvent
} = require('./_eventsControllers');

const eventsRouter = Router();
/* 
    Routes
    /api/events
*/

eventsRouter.get( '/', controlGetEvents )
eventsRouter.post( '/', controlCreateNewEvent )
eventsRouter.put( '/:id', controlUpdateEvent )
eventsRouter.delete( '/:id', controlEliminateEvent )


module.exports = eventsRouter;