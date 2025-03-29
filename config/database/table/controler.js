const teacher = require('./teacherTable')
const admin = require('./adminTable')
const information = require('./informationTable')
const subjectcategory = require('./subjectCategoryTable')
const tryout = require('./tryoutTable')
const tryoutScore = require('./tryoutScoreTable')
const studentsanswer = require('./studentsAnswersTable')
const student = require('./studentTable')
const tryoutsubjectscore = require('./tryoutSubjectScoreTable')
const answeroption = require('../table/answerOptionTabel')
const question = require('../table/questionTable')
const subject = require('../table/subjectTable')
const questionsExplanation = require('./questionsExplanationTable')

subjectcategory.hasMany(subject, { foreignKey: 'id_subject_category', onDelete: 'CASCADE', hooks: true })
subject.belongsTo(subjectcategory, { foreignKey: 'id_subject_category', onDelete: 'CASCADE', hooks: true })

tryout.hasMany(question, {foreignKey: 'id_tryout', onDelete: 'CASCADE', hooks: true})
question.belongsTo(tryout, {foreignKey: 'id_tryout', onDelete: 'CASCADE', hooks: true})

subject.hasMany(question, {foreignKey: 'id_subject', onDelete: 'CASCADE', hooks: true})
question.belongsTo(subject, {foreignKey: 'id_subject', onDelete: 'CASCADE', hooks: true})

question.hasMany(answeroption, {foreignKey: 'id_question', onDelete: 'CASCADE', hooks: true})
answeroption.belongsTo(question, {foreignKey: 'id_question', onDelete: 'CASCADE', hooks: true})

answeroption.hasMany(questionsExplanation, {foreignKey: 'id_answer_option', onDelete: 'CASCADE', hooks: true})
questionsExplanation.belongsTo(answeroption, {foreignKey: 'id_answer_option', onDelete: 'CASCADE', hooks: true})

student.hasMany(studentsanswer, {foreignKey: 'id_student', onDelete: 'CASCADE', hooks: true})
studentsanswer.belongsTo(student, {foreignKey: 'id_student', onDelete: 'CASCADE', hooks: true})

answeroption.hasMany(studentsanswer, {foreignKey: 'answer_option_id', onDelete: 'CASCADE', hooks: true})
studentsanswer.belongsTo(answeroption, {foreignKey: 'answer_option_id', onDelete: 'CASCADE', hooks: true})

questionsExplanation.hasMany(studentsanswer, {foreignKey: 'id_answer_option', onDelete: 'CASCADE', hooks: true})
studentsanswer.belongsTo(questionsExplanation, {foreignKey: 'id_answer_option', onDelete: 'CASCADE', hooks: true})

studentsanswer.hasMany(tryoutsubjectscore, {foreignKey: 'id_student_answer', onDelete: 'CASCADE', hooks: true})
tryoutsubjectscore.belongsTo(studentsanswer, {foreignKey: 'id_student_answer', onDelete: 'CASCADE', hooks: true})

tryoutsubjectscore.hasMany(tryoutScore, {foreignKey: 'id_tryout_subject_score', onDelete: 'CASCADE', hooks: true})
tryoutScore.belongsTo(tryoutsubjectscore, {foreignKey: 'id_tryout_subject_score', onDelete: 'CASCADE', hooks: true})

module.exports = { teacher, admin, information, subjectcategory, tryout, tryoutScore, studentsanswer, student, tryoutsubjectscore, answeroption, question, subject, questionsExplanation }