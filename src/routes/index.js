const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas




router.get('/', (req, res) =>{
    res.render('index');  //Como respuesta , renderiza el archivo index.hbs
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;