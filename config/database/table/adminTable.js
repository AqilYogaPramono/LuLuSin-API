const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const adminTable = db.define(`admin`,{
    admin_id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    admin_name:DataTypes.STRING,
    email:{
        type:DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
}, {
    timestamps: false
})

module.exports = adminTable