const { returnTypes } = require("../_eventsHelpers");

const checkEventOwner = ( { eventToModify }, { respond }, next) => {
    if ( eventToModify.user.toString() !== req.uid )
        return respond( returnTypes.youHaveNoRightBitch );

    next();
}

module.exports = checkEventOwner;