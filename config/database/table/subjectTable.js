const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const subjectTable = db.define('subject', {
    subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_subject_category: DataTypes.INTEGER,
    subject_name: DataTypes.STRING,
    time_limit: DataTypes.INTEGER,
    minimal_questions: DataTypes.INTEGER
}, {
    timestamps: false
})

module.exports = subjectTable