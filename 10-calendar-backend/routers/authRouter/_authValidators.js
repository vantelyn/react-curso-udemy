const { check } = require('express-validator');

const { controlLogin, controlNewUser, controlRenewToken } = require('./_authControllers');
const { authCheckErrors } = require('./_authHelpers');

const validateLogin = [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener al menos 6 caracteres').isLength({ min: 6 }),
    authCheckErrors,
    controlLogin
];

const validateNewUser = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña tener más de 6 caracteres').isLength({ min: 6 }),
    authCheckErrors,
    controlNewUser
];

const validateToken = [controlRenewToken];

module.exports = {
    validateLogin,
    validateNewUser,
    validateToken
}