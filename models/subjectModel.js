const { db } = require('../config/database/connection');

class subjectModel {
    static async getall() {
        try {
            const [rows] = await db.query("select s.*, sc.subject_category_name from subjects s left join subject_categories sc on s.id_subject_category = sc.subject_category_id")
            return rows
        } catch (err){
            throw err
        }
    } 

    static async store(data) {
        try {
            const [result] = await db.query("insert into subjects set id_subject_category = ?, subject_name = ?, time_limit = ?, minimal_questions = ?", { replacements: [data.id_subject_category, data.subject_name, data.time_limit, data.minimal_questions] })
            return result
        } catch (err) {
            throw err
        }
    }   

    static async update(id, data) {
        try {
            const [result] = await db.query("update subjects set id_subject_category = ?, subject_name = ?, time_limit = ?, minimal_questions = ? where subject_id = ?", { replacements: [data.id_subject_category, data.subject_name, data.time_limit, data.minimal_questions, id] })
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