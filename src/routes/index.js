const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas




router.get('/', (req, res) =>{
    res.send('Index');
});

router.get('/about', (req, res) => {
    res.send('About');
});

module.exports = router;