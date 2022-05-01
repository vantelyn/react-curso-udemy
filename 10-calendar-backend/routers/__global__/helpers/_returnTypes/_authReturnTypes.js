const authReturnTypes = {

    userLogin: (token, user) => ({
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
    userAlreadyExists: {
        status: 400,
        payload: {
            ok: false,
            msg: 'User already exists'
        }
    },
    userBadCredentials: {
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
};

module.exports = authReturnTypes;