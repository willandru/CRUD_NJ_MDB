// MONGO DB ----mongus es un modulo --voy a instalar mongo:: minuto 38:01


const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app',{
    /* useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false */
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err)); 