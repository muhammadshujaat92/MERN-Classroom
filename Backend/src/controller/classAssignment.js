const Assignments = require('../models/Assignment');
const Classes = require('../models/Classes');
const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, `${uniqueSuffix}_${file.originalname}`);
    },
});
const upload = multer({ storage: storage }).single("pdf");

const getAssignment = async (req, res) => {
    try {
        // const Class = await Classes.findOne({ user: req.user.id })
        const assignments = await Assignments.find();
        res.send(assignments)
    } catch (error) {
        res.status(500).send("Internal Server Error " + error);
    }
    // try {
    //     const assignments = await Assignments.find({ room: req.params.id });
    //     res.send(assignments)
    // } catch (error) {
    //     res.status(500).send("Internal Server Error " + error);
    // }
};

const postAssignment = async (req, res) => {
    try {
        const classroom = await Classes.findOne({ room: req.params.room });
        if (!classroom) {
            return res.status(404).json({ error: "Classroom not found" });
        }
        const { title, description, due } = req.body;
        const createAssign = new Assignments({
            room: classroom._id,
            title,
            description,
            due,
        });
        const assignment = await createAssign.save();
        res.json(assignment);
    } catch (error) {
        res.status(500).send("Internal Server Error " + error);
    }
};

const submitAssignment = async (req, res) => {
    upload(req, res, async (err) => {
        if (!err) {
            const { name, rollNo } = req.body;
            const pdf = req.file.filename;
            if (!name || !rollNo || !pdf) {
                return res.status(422).json({ error: "Please fill the fields" })
            } else {
                console.log(name, rollNo, pdf)
            }
            try {
                const submission = {
                    name: name,
                    rollNo: rollNo,
                    pdf: pdf
                }
                const updatedAssignment = await Assignments.findOneAndUpdate(
                    { _id: req.params.id },
                    { $push: { submission: submission } },
                    { new: true }
                );
                if (!updatedAssignment) {
                    return res.status(404).json({ message: "Assignment not found" });
                }

                res.status(200).json({ message: "Assignment submitted successfully", updatedAssignment });
            } catch (error) {
                console.error(error);
                res.status(500).send("Error submitting assignment " + error);
            }
        }
        else {
            console.log(err)
        }
    })
}

module.exports = { getAssignment, postAssignment, submitAssignment }