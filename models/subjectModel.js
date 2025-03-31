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
            const [result] = await db.query("insert into subjects set subject_name = ?", {replacements: [data.subject_name]})
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = subjectModel