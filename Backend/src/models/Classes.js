const mongoose = require('mongoose');

const classesScheema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    classname: String,
    section: String,
    subject: String,
    room: Number,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }]
})

const Classes = mongoose.model('classes', classesScheema);
module.exports = Classes;