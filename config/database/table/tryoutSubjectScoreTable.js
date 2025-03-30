const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const tryoutSubjectScoreTable = db.define(`tryout_subject_score`,{
    tryout_subject_score_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student_answer: DataTypes.INTEGER,
    average_score: DataTypes.INTEGER,
    total_correct: DataTypes.INTEGER,
    total_wrong: DataTypes.INTEGER,
    total_empty: DataTypes.INTEGER
}, {
    timestamps: false
})

module.exports = tryoutSubjectScoreTable