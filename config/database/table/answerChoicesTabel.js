const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const answerChoisesTable = db.define('answerchoise', {
    answer_choise_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_question: DataTypes.INTEGER,
    answer_options: DataTypes.TEXT,
    score: DataTypes.INTEGER
})

module.exports = answerChoisesTable