var express = require('express');
var path = require('path');
var logger = require('morgan');
var dotenv = require('dotenv')
const session = require('express-session');
const cors = require('cors')
dotenv.config()
const port = process.env.PORT

const { db, connectDB } = require('./config/database/connection');

var { teacher, admin, subjectcategory, tryout, tryoutScore, studentsanswer, student, tryoutsubjectscore, answeroption, question, subject, questionsExplanation} = require('./config/database/table/controler')

var app = express();

var indexRouter = require('./routes/index');

//folder auth
var authRegisterRouter = require('./routes/auth/register')
var authLoginRouter = require('./routes/auth/login')

// //folder 
var adminDashboard = require('./routes/admin/dashboard')
var adminStudentRouter = require('./routes/admin/student')
var adminteacherRouter = require('./routes/admin/teacher');

//folder student
var studentDashboardRouter = require('./routes/students/dashboard')
var studentTryoutRouter = require('./routes/students/tryout')

//folder teacher
var teacherDashboardRouter = require('./routes/teachers/dashboard')
var teacherCategorySubjectRouter = require('./routes/teachers/subjectCategory')
var teacherSubjectRouter = require('./routes/teachers/subject')
var teachertryoutRouter = require('./routes/teachers/tryout')

app.use(
    session({
        secret: 'LuLusin',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    })
);

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/API', indexRouter);

//folder auth
app.use('/API', authRegisterRouter)
app.use('/API', authLoginRouter)

// //folder admin
app.use('/API', adminDashboard)
app.use('/API', adminStudentRouter)
app.use('/API', adminteacherRouter)

//folder student
app.use('/API', studentDashboardRouter)
app.use('/API', studentTryoutRouter)

//folder teacher
app.use('/API', teacherDashboardRouter)
app.use('/API', teacherCategorySubjectRouter)
app.use('/API', teacherSubjectRouter)
app.use('/API', teachertryoutRouter)

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

async function initialize() {
    await connectDB()
    await db.sync( { alter: false, force: false })
    console.log("Database success sync")
}

initialize()
.catch(error => {
    console.error("Failed to initialize database: ", error)
})

module.exports = app;
