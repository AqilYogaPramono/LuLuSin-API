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
    
}

module.exports = subjectCategoryModel
