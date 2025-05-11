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

    static async getAllTeachers() {
        try {
            const [rows] = await db.query("SELECT teacher_name AS nama, NUPTK, email FROM teachers")
            return rows
        } catch (err) {
            throw err
        }
    }

    static async store(data) {
        try {
            const defaultPassword = 'Lulusin123'
            const [result] = await db.query(
                "INSERT INTO teachers (teacher_name, NUPTK, email, password) VALUES (?, ?, ?, ?)",
                { replacements: [data.teacher_name, data.NUPTK, data.email, defaultPassword] }
            )
            return result
        } catch (err) {
            throw err
        }
    }
}

module.exports = teacherModel;
