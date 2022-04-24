const { check } = require('express-validator');
const { controlLogin, controlNewUser, controlRenewToken } = require('./_authControllers');

const validateLogin = [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener al menos 6 caracteres').isLength({ min: 6 }),
    checkForErrors,
    controlLogin
];

const validateNewUser = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña tener más de 6 caracteres').isLength({ min: 6 }),
    checkForErrors,
    controlNewUser
];

const validateToken = [controlRenewToken];

module.exports = {
    validateLogin,
    validateNewUser,
    validateToken
}