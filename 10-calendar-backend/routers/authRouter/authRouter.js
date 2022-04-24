/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { authReturn } = require('./_authHelpers');

const { validateLogin, validateNewUser, validateToken } = require('./_authValidators');

const authRouter = Router();

authRouter.post( '/', validateLogin, authReturn );
authRouter.post( '/new', validateNewUser, authReturn );
authRouter.get( '/renew', validateToken , authReturn );

module.exports = authRouter;