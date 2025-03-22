const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const tryoutScoreTable = db.define(`tryout_score`,{
    tryout_score_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_tryout_subject_score: DataTypes.INTEGER,
    average_score: DataTypes.INTEGER,
    total_correct: DataTypes.INTEGER,
    total_wrong: DataTypes.INTEGER,
    total_empty: DataTypes.INTEGER
})

module.exports = tryoutScoreTable