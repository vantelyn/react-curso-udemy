/* 
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { loginUsuario, crearUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validarCampos');
const { validarJWT } = require('../middlewares/validarJWT');

router.post( 
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de tener al menos 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    loginUsuario 
);

router.post(
    '/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({min:6}),
        validarCampos
    ],
    crearUsuario
);

router.get( '/renew', validarJWT, revalidarToken );

module.exports = router;