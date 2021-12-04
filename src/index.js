const express= require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methoOverride= require('method-override');
const session = require('express-session');



//INITIALIZATIONS

const app = express();




// SETTINGS
app.set('port', process.env.PORT || 3000);   //Si hay un puerto de la nube o sino utilize port:3000

app.set('views', path.join(__dirname, 'views')); //Para decirle a node donde esta la carpeta viwes para los HTML
app.engine('.hbs',exphbs.engine({
    defaultLayout:'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),       //Para manejar as vistas HTML que enviaremos al navegador
    extname: '.hbs',
}));  // Para indicarle que el tipo de archivo es handebars (no HTLM)
app.set('view engine', '.hbs');





//MIDDLEWARES: FUNCIONES ANTES DE QUE LLEGEN A LAS RUTAS/SERVIDOR

app.use(express.urlencoded({extended:false})); //Para que cuando uformulario quiera enviarme cierto dadto, yo pueda entenderlo
app.use(methoOverride('_method'));  // Nos sirve para que los formularios puedan enviar  o solo GET y POST sino tambien PUT DELETE 
app.use(session({
    secret: 'mysecretapp',
    resave: true,                       // Configuraciones para poder autenticar al usuario y poder guardar sus datos
    saveUninitialized: true
}));




//GLOBAL VARIABLES






// ROUTES

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));





//STAATIC FILES







//SERVER INIT
app.listen(app.get('port'), ()=> {  //Para saber si existio la conexion y porbarlo por la terminal
    console.log('Server on port', app.get('port'));
});