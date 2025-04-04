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

    static async update(id, data) {
        try {
            const [result] = await db.query("update subject_categories set subject_category_name = ? where subject_category_id = ?", {replacements: [data.subject_category_name, id]})
            return result
        } catch (err) {
            throw err
        }
    }

    static async delete(id) {
        try {
            const [result] = await db.query("delete from subject_categories where subject_category_id = ?", {replacements: [id]})
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = subjectCategoryModel
