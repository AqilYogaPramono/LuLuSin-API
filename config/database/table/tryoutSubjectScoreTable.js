const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const tryoutSubjectScoreTable = db.define(`tryoutsubjectscore`,{
    tryout_subject_score_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student_answer: DataTypes.INTEGER,
    average_score: DataTypes.INTEGER,
    totally_correct: DataTypes.INTEGER,
    totally_wrong: DataTypes.INTEGER,
    totally_empty: DataTypes.INTEGER
})

module.exports = tryoutSubjectScoreTable