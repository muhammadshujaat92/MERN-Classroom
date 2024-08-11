const express = require('express');
const app = express();
const cors = require('cors');
require('./DB/connect');
const user = require('./routes/userauth');
const teacherClass = require('./routes/teacherClass');
const studentClass = require('./routes/studentClass');
const assignment = require('./routes/assignment');
const path=require('path');

app.use(cors());
app.use("/files", express.static("files"));
app.use(express.json());
app.use("/files", express.static(path.join(__dirname, "/files")));

app.use('/auth', user);
app.use('/classes', teacherClass);
app.use('/enroll', studentClass);
app.use('/assignment', assignment);

app.listen('5000', () => {
    console.log('App Started')
})