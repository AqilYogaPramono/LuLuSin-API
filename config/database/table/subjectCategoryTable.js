const {DataTypes} = require(`sequelize`)
const {db} = require(`../connection`)

const subjectCategoryTable = db.define(`subject_category`,{
    subject_category_id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    subject_category_name:DataTypes.STRING
}, {
    timestamps: false
})

module.exports = subjectCategoryTable;