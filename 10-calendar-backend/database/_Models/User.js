const { Schema, model } = require("mongoose");

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    email_verified:{
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        default: process.env.GOOGLE_USER_PASSWORD
    },
    picture: {
        type: String,
        required: false
    }
});

userSchema.method('info', function(){
    const { __v, _id, password, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const User = model( 'User', userSchema );

module.exports = User;