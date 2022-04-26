const { Router } = require('express');

const { 
    validateLogin,
    validateNewUser,
    validateToken 
} = require('./_authController');

const authRouter = Router();
/* 
    Routes
    /api/auth
*/
authRouter.post( '/', validateLogin );
authRouter.post( '/new', validateNewUser );
authRouter.get( '/renew', validateToken );

module.exports = authRouter;