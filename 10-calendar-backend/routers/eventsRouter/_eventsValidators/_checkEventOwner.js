const { returnTypes } = require("../_eventsHelpers");

const checkEventOwner = ( { eventToModify, uid }, { respond }, next) => {
    if ( eventToModify?.user.toString() !== uid )
        return respond( returnTypes.youHaveNoRightBitch );
    next();
}

module.exports = checkEventOwner;