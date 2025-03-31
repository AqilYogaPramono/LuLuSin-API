const { db } = require('../config/database/connection');

class subjectModel {
    static async getall() {
        try {
            const [rows] = await db.query("select * from subjects")
            return rows
        } catch (err) {
            throw err
        }
    }

    static async store(data) {
        try {
            const [result] = await db.query("insert into subjects set id_subject_category = ?, subject_name = ?, time_limit = ?", { replacements: [data.id_subject_category, data.subject_name, data.time_limit] })
            return result
        } catch (err) {
            throw err
        }
    }   

    static async update(id, data) {
        try {
            const [result] = await db.query("update subjects set id_subject_category = ?, subject_name = ?, time_limit = ? where subject_id = ?", { replacements: [data.id_subject_category, data.subject_name, data.time_limit, id] })
            return result
        } catch (err) {
            throw err
        }
    }

    static async delete(id) {
        try {
            const [result] = await db.query("delete from subjects where subject_id = ?", { replacements: [id] })
            return result
        } catch (err) {
            throw err
        }
    }
    
}

module.exports = subjectModel