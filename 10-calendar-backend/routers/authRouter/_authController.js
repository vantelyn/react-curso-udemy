const { check } = require('express-validator');

const { 
    checkFormErrors, 
    checkUserByEmail, 
    checkUserCredentials, 
    checkIfUserAlreadyExists, 
    userLogin, 
    createNewUSer,
    checkTokenAndSaveUser,
    renewToken,
} = require('./_authValidators');

const validateLogin = [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener al menos 6 caracteres').isLength({ min: 6 }),
    checkFormErrors,
    checkUserByEmail,
    checkUserCredentials,
    userLogin
];

const validateNewUser = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña tener más de 6 caracteres').isLength({ min: 6 }),
    checkFormErrors,
    checkUserByEmail,
    checkIfUserAlreadyExists,
    createNewUSer
];

const validateToken = [ 
    checkTokenAndSaveUser,
    renewToken 
];

module.exports = {
    validateLogin,
    validateNewUser,
    validateToken
}