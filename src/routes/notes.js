const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas


router.get('/notes', (req, res) => {
    res.send('Notas desde la BASE DE DATOS ... ');
});




module.exports = router;