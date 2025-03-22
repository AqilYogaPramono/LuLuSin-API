const teacher = require('./teacherTable')
const admin = require('./adminTable')
const information = require('./informationTable')
const subjectcategory = require('./subjectCategoryTable')
const tryout = require('./tryoutTable')
const tryoutScoreTable = require('./tryoutScoreTable')
const studentsanswer = require('./studentsAnswersTable')
const student = require('./studentTable')
const tryoutsubjectscore = require('./tryoutSubjectScoreTable')
const answerchoise = require('../table/answerChoicesTabel')
const question = require('../table/questionTable')
const subject = require('../table/subjectTable')
const questionsExplanation = require('./questionsExplanationTable')

subjectcategory.hasMany(subjectcategory, {foreignKey: 'subject_categoty_id', onDelete: `SET NULL`, hooks: true})

subject.belongsTo(subject, { foreignKey: `id_subject_category`, onDelete: `SET NULL`, hooks: true})

module.exports = { teacher, admin, information, subjectcategory, tryout, tryoutScoreTable, studentsanswer, student, tryoutsubjectscore, answerchoise, question, subject, questionsExplanation }