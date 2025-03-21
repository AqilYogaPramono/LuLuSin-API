const teacher = require('./teacherTable')
const admin = require('./adminTable')
const information = require('./informationTable')
const subjectcategory = require('./subjectCategoryTable')
const tryout = require('./tryoutTable')
const scoretryout = require('./scoreTryoutTable')
const studentsanswer = require('./studentsAnswersTable')
const student = require('./studentTable')
const tryoutsubjectscore = require('./tryoutSubjectScoreTable')
const answerchoise = require('../table/answerChoicesTabel')
const question = require('../table/questionTable')

module.exports = { teacher, admin, information, subjectcategory, tryout, scoretryout, studentsanswer, student, tryoutsubjectscore, answerchoise, question }