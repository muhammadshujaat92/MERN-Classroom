const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const studentClass = require('../controller/joinClass')

router.get('/fetchstudentclass', fetchuser, studentClass.fetchStudentClass);
router.post('/joinclass', fetchuser, studentClass.joinClass);
router.delete('/unenrollclass/:classid', fetchuser, studentClass.unenrollClass);

module.exports = router;