const Classes = require('../models/Classes');

const fetchStudentClass = async (req, res) => {
    try {
        const classes = await Classes.find({ students: req.user.id }).populate("user")
        // console.log("ye hai bahii", classes)
        res.json(classes)

    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
};

const joinClass = async (req, res) => {
    try {
        const { room } = req.body;

        // const studentExist = await Classes.find({students:req.user.id})
        // if(studentExist){
        //     return res.status(409).json({Error:"You have already enrolled the class"})
        // }

        // Check if the user is already enrolled in the class
        const isUserEnrolled = await Classes.findOne({
            room: parseInt(room),
            students: req.user.id
        });

        if (isUserEnrolled) {
            return res.status(400).json({ error: "User is already enrolled in the class" });
        }

        const isRoomFound = await Classes.findOneAndUpdate(
            { room: parseInt(room) }, // Ensure room is parsed as an integer
            { $push: { students: req.user.id } },
            { new: true }
        )
        if (!isRoomFound) {
            return res.status(400).json({ error: "Room not found" });
        }

        res.json(isRoomFound);
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error");
    }
};

const unenrollClass = async (req, res) => {
    try {
        // Find the class based on the students array

        let enrollClass = await Classes.findById({ _id: req.params.classid });

        if (!enrollClass) {
            return res.status(404).send("Class not found");
        }

        // Remove the student from the students array
        enrollClass.students = enrollClass.students.filter(student => student._id != req.user.id);

        // Save the updated class
        await enrollClass.save();

        res.json({ success: "Student unenrolled from class", class: enrollClass });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
}

module.exports = { fetchStudentClass, joinClass, unenrollClass }