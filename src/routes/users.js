const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas



router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req,res) =>{
    res.render('users/signup');
});


module.exports = router;