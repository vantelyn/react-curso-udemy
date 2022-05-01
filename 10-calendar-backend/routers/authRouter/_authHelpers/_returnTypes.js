const returnTypes = {
    foundErrors: (errors) => ({
        status: 400,
        payload: {
            ok: false,
            msg: 'Bad Request',
            errors
        }
    }),
    userLogin: ( token, user ) => ({
        status: 202,
        payload: {
            ok: true,
            msg: 'Session started',
            token,
            user
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
    invalidToken: {
        status: 401,
        payload: {
            ok: false,
            msg: 'Invalid Token'
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
    userBanned: {
        status: 401,
        payload: {
            ok: false,
            msg: 'User Banned'
        }
    },
}

module.exports = returnTypes;