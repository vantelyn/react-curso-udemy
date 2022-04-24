const mongoose = require('mongoose');

const dbConnect = async() => {
    
    try{
        await mongoose.connect( process.env.DB_CNN );    
        console.log( 'DB Online' );
        
    } catch( err ) {
        console.log( err );
        throw new Error( 'Error al inicializar la base de datos' );
    }
}

module.exports = dbConnect;