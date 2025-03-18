const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const teacherTable = db.define(`teacher`,{
    teacher_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    teacher_name:  DataTypes.STRING,
    NUPTK: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
})

module.exports = teacherTable;