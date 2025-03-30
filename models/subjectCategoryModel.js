const { db } = require('../config/database/connection');

class subjectCategoryModel {
    static async getall() {
        try {
            const [rows] = await db.query("select subject_category_id, subject_category_name from subject_categories")
            return rows
        } catch (err) {
            throw err
        }
    }
    
}

module.exports = subjectCategoryModel