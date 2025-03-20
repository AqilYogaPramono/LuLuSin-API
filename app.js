var express = require('express');
var path = require('path');
var logger = require('morgan');
var dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT

const { db, connectDB } = require('./config/database/connection');

var { teacher, admin, information, subjectcategory, tryout, scoretryout, studentsanswer, student, tryoutsubjectscore} = require('./config/database/table/controler')

var indexRouter = require('./routes/index');

// //folder auth
// var authRegisterRouter = require('./routes/auth/register')
// var authLoginRouter = require('./routes/auth/login')

// //folder admin
// var adminDashboardRouter = require('./routes/admin/dashboard')
// var adminStudentRouter = require('./routes/admin/student')
var adminteacherRouter = require('./routes/admin/teacher');
const { error } = require('console');

// //folder student
// var studentDashboardRouter = require('./routes/students/dashboard')
// var studentTryoutRouter = require('./routes/students/tryout')

// //folder teacher
// var teacherDashboardRouter = require('./routes/teachers/dashboard')
// var teacherCategorySubjectRouter = require('./routes/teachers/categorySubject')
// var teacherSubjectRouter = require('./routes/teachers/subject')
// var teachertryoutRouter = require('./routes/teachers/tryout')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// //folder auth
// app.use('/API', authRegisterRouter)
// app.use('/API', authLoginRouter)

// //folder admin
// app.use('/API', adminDashboardRouter)
// app.use('/API', adminStudentRouter)
app.use('/API', adminteacherRouter)

// //folder student
// app.use('/API', studentDashboardRouter)
// app.use('/API', studentTryoutRouter)

// //folder teacher
// app.use('/API', teacherDashboardRouter)
// app.use('/API', teacherCategorySubjectRouter)
// app.use('/API', teacherSubjectRouter)
// app.use('/API', teachertryoutRouter)

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

async function initialize() {
    await connectDB()
    await db.sync()
    console.log("Database success sync")
}

initialize()
.catch(error => {
    console.error("Failed to initialize database: ", error)
})

module.exports = app;