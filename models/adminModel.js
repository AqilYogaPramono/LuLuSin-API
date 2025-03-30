const { db } = require('../config/database/connection');

class adminModel {
    static async login(email) {
        try {
            const [rows] = await db.query("select * from admins where email = ?", {replacements: [email]})
            if (rows.length == 0 ) {
                return null
            }
            return rows[0]
        } catch (err) {
            throw err
        }
    }

    static async getTotalUsers(email) {
        try {
            const [rows] = await db.query("select (select count(student_id) from students) as total_students, (select count(teacher_id) from teachers) total_teachers", {replacements: [email]})
            return rows[0]
        } catch (err) {
            throw err
        }
    }
}

module.exports = adminModel