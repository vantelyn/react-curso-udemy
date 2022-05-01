const { check } = require("express-validator");
const { isValidDate } = require("./_eventsHelpers");
const { checkFormErrors, loadUserFromSessionToken } = require("../__global__/validators");
const {
    eventCreateNew,
    eventUpdate,
    eventDelete,
    eventGetAll
} = require("./_eventsValidators");


const controlGetEvents = [
    loadUserFromSessionToken,
    eventGetAll,
];

const controlCreateNewEvent = [
    loadUserFromSessionToken,
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "No es una fecha válida").custom( isValidDate ),
    check("end", "No es una fecha válida").custom( isValidDate ),
    checkFormErrors,
    eventCreateNew,
];

const controlUpdateEvent = [
    loadUserFromSessionToken,
    check('id','Id is not valid').isMongoId(),
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "No es una fecha válida").custom( isValidDate ),
    check("end", "No es una fecha válida").custom( isValidDate ),
    checkFormErrors,
    eventUpdate,
];

const controlEliminateEvent = [
    loadUserFromSessionToken,
    check('id','Id is not valid').isMongoId(),
    checkFormErrors,
    eventDelete,
];

module.exports = {
    controlGetEvents,
    controlCreateNewEvent,
    controlUpdateEvent,
    controlEliminateEvent
};