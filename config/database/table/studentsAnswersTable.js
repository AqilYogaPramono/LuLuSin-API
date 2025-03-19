const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const studentsAnswerTable = db.define(`studenstanswer`,{
    student_answer_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_answer: DataTypes.INTEGER,
    id_answer_choise: DataTypes.INTEGER,
    student_answer: DataTypes.STRING
})

module.exports = studentsAnswerTable