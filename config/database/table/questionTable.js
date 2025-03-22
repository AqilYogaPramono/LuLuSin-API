const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const questionTable = db.define('question', {
    question_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tryout: DataTypes.INTEGER,
    id_subject: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    image_question: DataTypes.STRING,
    score: DataTypes.INTEGER
})

module.exports = questionTable