const {DataTypes, Model} = require('sequelize')
const {db} = require('../connection')

const questionsExplanation = db.define('questions_explanation', {
    questions_explanation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    id_answer_options: DataTypes.INTEGER,
    question_explanation: DataTypes.TEXT
})

module.exports = questionsExplanation