const {DataTypes} = require('sequelize')
const {db} = require('../connection')

const subjectTable = db.define('subject', {
    subject_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_category_subject: DataTypes.INTEGER,
    subject: DataTypes.STRING
})

module.exports = subjectTable