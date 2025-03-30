const {db} = require('../config/database/connection')

class adminModel {
    static async getAdmin(){
        try {
            const [rows, metadata] = await db.query("SELECT * FROM admins")
            return rows;
        } catch (err) {
            throw err;
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