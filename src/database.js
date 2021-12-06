// MONGO DB ----mongus es un modulo --voy a instalar mongo:: minuto 38:01


const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app',{
    
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

.then(db => console.log('DB is connected to', db.connection.host))
.catch(err => console.error(err)); 