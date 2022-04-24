const express = require('express');
const cors = require('cors')
require('dotenv').config();
const { dbConnect } = require('./database');
const { authRouter } = require('./routers');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnect();

// CORS
app.use(cors())

// Directorio Público
app.use( express.static('./public') );

// Lectura y parseo del body
app.use( express.json() );

// Rutas
app.use( '/api/auth', authRouter );
// !TODO: CRUD: Eventos  



// Escuchar peticiones
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})