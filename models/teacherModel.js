const { db } = require('../config/database/connection')

class teacherModel {
    static async login(email) {
        try {
            const [rows] = await db.query("select * from teachers where email = ?", {replacements: [email]})
            if (rows.length == 0) {
                return null
            }
            return rows[0]
        } catch (err) {
            throw err
        }
    }

    static async getUsername(teacherId) {
        try {
            const [rows] = await db.query("select teacher_name from teachers where teacher_id = ?", {replacements: [teacherId]})
            return rows
        } catch (err) {
            throw err
        }
    }
}

module.exports = teacherModel;
