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
    password: {
        type: String,
        required: true
    }
});

const eventSchema = Schema({
    title:{
        type: String,
        required: true
    },
    notes:{
        type: String
    },
    start:{
        type: Date,
        required: true
    },
    end:{
        type: Date,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

eventSchema.method('toJSON', function(){
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
})

const Usuario = model( 'Usuario', userSchema );
const Event = model( 'Event', eventSchema );

module.exports = {
    Usuario,
    Event
};