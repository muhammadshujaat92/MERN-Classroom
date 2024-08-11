const Classes = require('../models/Classes');

const fetchClass = async (req, res) => {
    try {
        const classes = await Classes.find({ user: req.user.id }).populate("user")
        res.json(classes)
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const createClass = async (req, res) => {
    try {
        const { classname, section, subject, room } = req.body;
        if (!classname || !section || !subject || !room) {
            return res.status(400).json({ error: "Please fill the fields" });
        }
        // Fetch relevant posts from the Posts model based on classId
        // const teacherannounce = await Posts.find({ user: req.user.id });
        const createclass = new Classes({
            classname,
            section,
            subject,
            room,
            user: req.user.id,
            // teacherannounce: teacherannounce.map(post => post._id)
        })
        const savedClass = await createclass.save();
        res.json(savedClass);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
};

const updateClass = async (req, res) => {
    try {
        const { classname, section, subject, room } = req.body;
        const newClass = {};
        if (classname) {
            newClass.classname = classname
        }
        if (section) {
            newClass.section = section
        }
        if (subject) {
            newClass.subject = subject
        }
        if (room) {
            newClass.room = room
        }
        let updatedClass = await Classes.findById(req.params.id);
        if (!updatedClass) {
            return res.status(404).send("Not Found");
        }
        if (updatedClass.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }
        updatedClass = await Classes.findByIdAndUpdate(req.params.id, { $set: newClass }, { new: true });
        res.json({ updatedClass })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
};

const deleteClass = async (req, res) => {
    try {
        let Class = await Classes.findById(req.params.id);
        if (!Class) {
            return res.status(404).send("Not Found");
        }
        if (Class.user.toString() !== req.user.id) {
            return res.status(404).send("Not Allowed");
        }
        Class = await Classes.findByIdAndDelete(req.params.id);
        res.json({ Success: "Class has been deleted", Class: Class })
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { fetchClass, createClass, updateClass, deleteClass };