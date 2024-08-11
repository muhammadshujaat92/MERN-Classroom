const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userScheema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    phone:Number,
    image:String,
    password:String
})

userScheema.pre("save", async function (next){
    if(this.isModified("password")){
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
    }
    next();
})

const UserScheema = mongoose.model('user',userScheema);
module.exports = UserScheema;