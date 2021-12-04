const express= require('express');

//INITIALIZATIONS

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);   //Si hay un puerto de la nube o sino utilize port:3000


//MIDDLEWARES: FUNCIONES ANTES DE QUE LLEGEN A LAS RUTAS/SERVIDOR



//GLOBAL VARIABLES

// ROUTES

//STAATIC FILES

//SERVER INIT
app.listen(app.get('port'), ()=> {  //Para saber si existio la conexion y porbarlo por la terminal
    console.log('Server on port', app.get('port'));
});