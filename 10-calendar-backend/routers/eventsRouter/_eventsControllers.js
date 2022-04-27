const { check } = require("express-validator");
const { isValidDate } = require("./_eventsHelpers");
const {
    checkFormErrors,
    checkEventByProvidedId,
    checkEventOwner,
    createNewEvent,
    updateEvent,
    getEvents,
    eliminateEvent
} = require("./_eventsValidators");


const controlGetEvents = [
    getEvents,
];

const controlCreateNewEvent = [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "No es una fecha válida").custom( isValidDate ),
    check("end", "No es una fecha válida").custom( isValidDate ),
    checkFormErrors,
    createNewEvent,
];

const controlUpdateEvent = [
    check('id','Id is not valid').isMongoId(),
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "No es una fecha válida").custom( isValidDate ),
    check("end", "No es una fecha válida").custom( isValidDate ),
    checkFormErrors,
    checkEventByProvidedId,
    checkEventOwner,
    updateEvent,
];

const controlEliminateEvent = [
    check('id','Id is not valid').isMongoId(),
    checkFormErrors,
    checkEventByProvidedId,
    checkEventOwner,
    eliminateEvent,
];

module.exports = {
    controlGetEvents,
    controlCreateNewEvent,
    controlUpdateEvent,
    controlEliminateEvent
};