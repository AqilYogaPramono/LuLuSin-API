const { db } = require('../config/database/connection');

class studentModel {
    static async login(email) {
        try {
            const [rows] = await db.query("select * from students where email = ?", {replacements: [email]})
            if (rows.length === 0) {
                return null
            }
            return rows[0]
        } catch (err) {
            throw err
        }
    }

    static async register(data) {
        try {
            const [result] = await db.query("insert into students set NISN = ?, student_name = ?, email = ?, password = ?", { replacements: [data.NISN, data.student_name, data.email, data.password] })
            return result
        } catch (err) {
            throw err
        }
    }
    
}

module.exports = studentModel