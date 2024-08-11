const mongoose = require('mongoose');

const AssignmentScheema = new mongoose.Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "classes"
    },
    title: String,
    description: String,
    due: String,
    submission: [{
        pdf: String,
        rollNo: String,
        name: String
    }]
});

const Assignments = mongoose.model("assignment", AssignmentScheema);
module.exports = Assignments;