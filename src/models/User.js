const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');


const UserSchema= new Schema({
    name: {type: String, required: true},
    email: {type: String, required:true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});


UserSchema.methods.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};
UserSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
};

/* UserSchema.method('matchPassword', function(password) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, (err, res) => {
        if (err) reject(err)
        resolve(res)
      })
    })
  }) */

/* UserSchema.methods.matchPassword = async (password)=>{
    console.log(password);
    console.log(this.password);
    return await bcrypt.compare(password, this.password);
}; */


module.exports = mongoose.model('User', UserSchema);