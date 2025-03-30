const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const questionsExplanation = db.define('questions_explanation', {
    questions_explanation_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    id_answer_option: DataTypes.INTEGER,
    question_explanation: DataTypes.TEXT
}, {
    timestamps: false
})

module.exports = questionsExplanation