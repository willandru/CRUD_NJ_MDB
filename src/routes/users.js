const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas



router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req,res) =>{
    res.render('users/signup');
});


router.post('/users/signup', (req,res) =>{
    /* console.log(req.body);
    res.send('ok')
 */
    const {name, email, password, confirm_password} = req.body;

    const errors=[];

    if(name.length==0 || password.length==0){
        errors.push({text: 'Contraseñas U nombres Vacios'})
    }

    if(password != confirm_password){
        errors.push({text: 'Password do not match'});
    }
    if(password.length < 4){
        errors.push({
            text: 'Password must be at least 4 characteres'
        });
    }
    if(errors.length > 0 ){
        res.render('users/signup', {errors, name, email, password, confirm_password});
    }else{
        res.send('ok')
    }


});





module.exports = router;