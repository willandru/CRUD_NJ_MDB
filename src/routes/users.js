const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas



router.get('/users/signin', (req, res) => {
    res.send('Ingresando a la aplicacion ... ');
});

router.get('/users/signup', (req,res) =>{
    res.send('Formulario de authenticacion ... ');
});


module.exports = router;