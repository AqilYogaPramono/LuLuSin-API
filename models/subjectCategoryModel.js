const { db } = require('../config/database/connection');

class subjectCategoryModel {
    static async getall() {
        try {
            const [rows] = await db.query("select * from subject_categories")
            return rows
        } catch (err) {
            throw err
        }
    }
    
    static async store(data) {
        try {
            const [result] = await db.query("insert into subject_categories set subject_category_name = ?", {replacements: [data.subject_category_name]})
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = subjectCategoryModel
