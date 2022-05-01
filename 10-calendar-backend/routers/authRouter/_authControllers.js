const { check } = require('express-validator');

const { checkFormErrors, loadUserFromSessionToken } = require('../__global__/validators');
const {
    userLogin,
    loadUserFromNewUser,
    loadUserFromEmailAndPassword,
    loadUserFromGoogleToken 
} = require('./_authValidators');

const controlLoginWithNewUser = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es débil').isLength({ min: 6 }),
    checkFormErrors,
    loadUserFromNewUser,
    userLogin
];

const controlLoginWithEmailAndPassword = [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de tener al menos 6 caracteres').isLength({ min: 6 }),
    checkFormErrors,
    loadUserFromEmailAndPassword,
    userLogin
];

const controlLoginWithGoogleToken = [ 
    check('g-token', 'Token de google es necesario').not().isEmpty(),
    checkFormErrors,
    loadUserFromGoogleToken,
    userLogin
];

const controlLoginWithSessionToken = [
    check('s-token', 'Token necesario').not().isEmpty(),
    checkFormErrors,
    loadUserFromSessionToken,
    userLogin 
];


module.exports = {
    controlLoginWithNewUser,
    controlLoginWithEmailAndPassword,
    controlLoginWithGoogleToken,
    controlLoginWithSessionToken
}