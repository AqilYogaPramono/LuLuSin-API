const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const studentsAnswerTable = db.define(`studens_tanswer`,{
    student_answer_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    answer_choice_id: DataTypes.INTEGER,
    id_answer_choise: DataTypes.INTEGER
})

module.exports = studentsAnswerTable