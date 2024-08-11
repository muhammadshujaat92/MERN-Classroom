const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Class = require('../controller/createClass');

router.get('/fetchclass', fetchuser, Class.fetchClass);
router.post('/createclass', fetchuser, Class.createClass);
router.put('/updateclass/:id', fetchuser, Class.updateClass)
router.delete('/deleteclass/:id', fetchuser, Class.deleteClass)


module.exports = router;