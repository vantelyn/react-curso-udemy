const { Schema, model } = require("mongoose");

const usuarioSchema = Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

const Usuario = model( 'Usuario', usuarioSchema );

module.exports = {
    Usuario
};