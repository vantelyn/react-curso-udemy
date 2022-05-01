const { Router } = require('express');

const { 
    controlLoginWithNewUser, 
    controlLoginWithEmailAndPassword,
    controlLoginWithGoogleToken,
    controlLoginWithSessionToken,
} = require('./_authControllers');

const authRouter = Router();
/* 
    Routes
    /api/auth
*/
authRouter.post( '/', controlLoginWithEmailAndPassword );
authRouter.post( '/new', controlLoginWithNewUser );
authRouter.get( '/renew', controlLoginWithSessionToken );
authRouter.get( '/google', controlLoginWithGoogleToken );

module.exports = authRouter;