const authReturnTypes = require("./_authReturnTypes");
const eventsReturnTypes = require("./_eventsReturnTypes");
const generalReturnTypes = require("./_generalReturnTypes");

module.exports = {
    ...authReturnTypes,
    ...eventsReturnTypes,
    ...generalReturnTypes
};