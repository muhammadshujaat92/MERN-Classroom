const mongoose = require('mongoose');
const DB = "mongodb+srv://mshujaat:cluster123@cluster0.iheopal.mongodb.net/classroomclone?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log("Connected to dataBase");
}).catch((err)=>{
    console.log(`Not connected ${err}`)
})