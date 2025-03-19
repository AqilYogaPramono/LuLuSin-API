const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const subjectCategoryTable = db.define(`subjectcategory`,{
    subject_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    subject_name:DataTypes.STRING
})

module.exports = subjectCategoryTable;