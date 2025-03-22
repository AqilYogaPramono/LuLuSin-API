const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const answerChoisesTable = db.define('answer_choise', {
    answer_choise_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_question: DataTypes.INTEGER,
    answer_options: DataTypes.TEXT
})

module.exports = answerChoisesTable