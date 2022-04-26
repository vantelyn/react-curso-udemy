const returnTypes = {
    foundErrors: (errors) => ({
        status: 400,
        payload: {
            ok: false,
            msg: 'Bad Request',
            errors
        }
    }),
    userLogin: (token) => ({
        status: 202,
        payload: {
            ok: true,
            msg: 'Session started',
            token
        }
    }),
    userCreated: (token) => ({
        status: 201,
        payload: {
            ok: true,
            msg: 'User created',
            token
        }
    }),
    badToken: {
        status: 401,
        payload: {
            ok: false,
            msg: 'Bad Token'
        }
    },
    userAlreadyExists: {
        status: 400,
        payload: {
            ok: false,
            msg: 'User already exists'
        }
    },
    internalServerError: {
        status: 500,
        payload: {
            ok: false,
            msg: 'Internal Server error'
        }
    },
    badUserCredentials: {
        status: 401,
        payload: {
            ok: false,
            msg: 'Bad user credentials'
        }
    },
}

module.exports = returnTypes;