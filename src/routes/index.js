const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas




router.get('/', (req, res) =>{
    res.send('Index');
});



module.exports = router;