const generalReturnTypes = {
    invalidToken: {
        status: 401,
        payload: {
            ok: false,
            msg: 'Invalid Token'
        }
    },
    formErrors: (errors) => ({
        status: 400,
        payload: {
            ok: false,
            msg: 'Bad Request',
            errors
        }
    }),
    internalServerError: {
        status: 500,
        payload: {
            ok: false,
            msg: 'Internal Server error'
        }
    }
};

module.exports = generalReturnTypes;