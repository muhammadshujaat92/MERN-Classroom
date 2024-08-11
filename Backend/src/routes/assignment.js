const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const assignments = require('../controller/classAssignment');

// router.get('/getassignment/:id', fetchuser, async (req, res) => {
    // try {
    //     const assignments = await Assignments.find({ room: req.params.id });
    //     res.send(assignments)
    // } catch (error) {
    //     res.status(500).send("Internal Server Error " + error);
    // }
// })
// router.get('/getassignment/:id', fetchuser, assignments.getAssignment)
router.get('/getassignment', fetchuser, assignments.getAssignment)
router.post('/postassignment/:room', fetchuser, assignments.postAssignment);
router.post("/submitassignment/:id", fetchuser, assignments.submitAssignment);

module.exports = router;