const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const studentTable = db.define(`student`,{
    student_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    student_name: DataTypes.STRING,
    NISN: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
})

module.exports = studentTable;