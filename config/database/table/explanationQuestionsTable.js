const {DataTypes, Model} = require('sequelize')
const {db} = require('../connection')

const explanationQuestions = db.define('explanationquestion', {
    extension_question_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    id_questin: DataTypes.INTEGER,
    answer_options: DataTypes.TEXT,
    score: DataTypes.INTEGER
})

module.exports = explanationQuestions