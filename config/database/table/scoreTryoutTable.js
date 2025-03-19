const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const scoresTryoutTable = db.define(`scoretryout`,{
    score_tryout_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_student: DataTypes.INTEGER,
    id_tryout: DataTypes.INTEGER,
    id_tryout_subject_score: DataTypes.INTEGER,
    average_score: DataTypes.INTEGER,
    totally_correct: DataTypes.INTEGER,
    totally_wrong: DataTypes.INTEGER,
    totally_empty: DataTypes.INTEGER
})

module.exports = scoresTryoutTable