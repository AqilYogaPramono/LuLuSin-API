const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const informationTable = db.define(`information`,{
    information_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    snbt_start: DataTypes.DATE
})

module.exports = informationTable;