const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

console.log('ACA ESTOY');
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) =>{
    
    const user = await User.findOne({email: email});
    
                if(!user){
                        return done(null, false, {message: 'Not User Found'});
                    } 
                    
                    const isPasswordMatched = await user.matchPassword(password);
                    if(!isPasswordMatched){
                        // return next (new ErrorHandler('Invalid Email or Password', 401));
                        conosole.log('YAAA');
                    }
                    /* else{
                        const match = await user.matchPassword(password);
                        if(match){
                            return done(null, user);
                        }else{
                            return done(null, false, {message: 'Incorrect Password'});
                        }
                    } */ 
                  
}));


passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser((id, done)=>{
    User.findById(id, (err, user) => {
        done(err, user);
    });
});