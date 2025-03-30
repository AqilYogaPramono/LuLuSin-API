const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const answerOptionTable = db.define('answer_option', {
    answer_option_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_question: DataTypes.INTEGER,
    answer_option: DataTypes.TEXT
}, {
    timestamps: false
})

module.exports = answerOptionTable