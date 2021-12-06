const router = require('express').Router(); // Crear un objeto para facilitarme la creacion de rutas

const User = require('../models/User');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.get('/users/signup', (req,res) =>{
    res.render('users/signup');
});


router.post('/users/signup', async (req,res) =>{
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

                    const emailUser = await User.findOne({email: email});
                        console.log(emailUser);
                        if (emailUser) {
                            req.flash('error_msg', 'The Email is already in Use');
                            errors.push({
                                text: 'The Email is already in Use'
                            });
                            // res.redirect('/users/signup');
                        }
                        
    if(errors.length > 0 ){
        res.render('users/signup', {errors});
    }else{


        // res.send('ok')
        
            const newUser= new User({name, email, password});

            newUser.password= await newUser.encryptPassword(password);
             await newUser.save();
     
             req.flash('success_msg','You are registered');
             res.redirect('/users/signin');
        
       
    }


});





module.exports = router;