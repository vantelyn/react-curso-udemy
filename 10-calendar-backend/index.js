const express = require('express');
const cors = require('cors')
require('dotenv').config();
const database = require('./database');
const { authRouter, eventsRouter } = require('./routers');
const { injectResponder, catchBodyParseErrors } = require('./middlewares');

// Crear el servidor de express
const app = express();

// Base de datos
database.Connect();

// CORS
app.use( cors() );

// Habilita respuestas llamando objetos JSON
app.use( injectResponder );

// Directorio Público
app.use( express.static('./public') );

// Lectura y parseo del body
app.use( express.json( ) );
app.use( catchBodyParseErrors );

// Rutas
app.use( '/api/auth', authRouter );
app.use( '/api/events', eventsRouter );



// Escuchar peticiones
app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`)
})