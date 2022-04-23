const bcryptjs = require('bcryptjs');
const { response } = require('express');
const { generarJWT } = require('../helpers/jwt');
const { Usuario } = require('../models');

const loginUsuario = async ( req, res = response ) => {

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email })

        if (!usuario) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El usuario no existe'
            })
        }

        const passwordMatch = bcryptjs.compareSync( password, usuario.password )

        if ( !passwordMatch ) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
        }

        //  Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );

        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch ( err ) {
        console.log( err )
        res.status( 500 ).json({
            ok: false,
            msg: 'Hubo un errolll'
        })
    }

    
}

const crearUsuario = async ( req, res = response ) => {

    // const { name, email, password } = req.body;
    const { email, password } = req.body;

    try {
        // Verificar si ya existe
        let usuario = await Usuario.findOne({ email })

        if (usuario) {
            return res.status( 400 ).json({
                ok: false,
                msg: 'El usuario ya existe'
            })
        }

        // Crear nuevo usuario
        usuario = new Usuario(req.body);
        
        // Encriptar contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync( password, salt );

        //  Generar JWT
        const token = await generarJWT( usuario.id, usuario.name );

        // Guardar usuario
        await usuario.save();

        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hubo un errolll'
        })
    }
}

const revalidarToken = async (req, res = response) => {

    const { uid, name } = req;

    //  Generar JWT
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
};

module.exports = {
    loginUsuario,
    crearUsuario,
    revalidarToken
}