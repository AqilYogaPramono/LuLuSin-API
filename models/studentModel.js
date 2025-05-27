const { db } = require('../config/database/connection')

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

    static async getByNISN(nisn) {
        try {
            const [rows] = await db.query("select * from students where NISN = ?", { replacements: [nisn] })
            return rows.length === 0 ? null : rows[0]
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

    static async getDoneTryouts(idStudent) {
        try {
            const [result] = await db.query(
                `SELECT DISTINCT t.tryout_id, t.tryout_name FROM students_answers sa JOIN answer_options ao ON sa.answer_options_id = ao.answer_option_id JOIN questions q ON ao.id_question = q.question_id JOIN tryouts t ON q.id_tryout = t.tryout_id WHERE sa.id_student = ? AND t.status = 'show'`,
                { replacements: [idStudent] }
            )
            return result
        } catch (err) {
            throw err
        }
    }    
    
    static async getNotDoneTryouts(idStudent) {
        try {
            const [result] = await db.query(
                `SELECT t.tryout_id, t.tryout_name FROM tryouts t WHERE t.status = 'show' AND t.tryout_id NOT IN ( SELECT q.id_tryout FROM students_answers sa JOIN answer_options ao ON sa.answer_options_id = ao.answer_option_id JOIN questions q ON ao.id_question = q.question_id WHERE sa.id_student = ? )`,
                { replacements: [idStudent] }
            )
            return result
        } catch (err) {
            throw err
        }
    }

    static async getAllStudents() {
        try {
            const [rows] = await db.query("SELECT student_id, student_name AS nama, NISN, email FROM students")
            return rows
        } catch (err) {
            throw err
        }
    }

    static async deleteStudent(studentId) {
        try {
            const [result] = await db.query("DELETE FROM students WHERE student_id = ?", { replacements: [studentId] })
            return result
        } catch (err) {
            throw err
        }
    }

    static async getTop3TryoutScoresByStudentId(idStudent) {
        try {
          const [rows] = await db.query(`SELECT ts.id_tryout, t.tryout_name, ts.average_score FROM tryout_scores ts JOIN tryouts t ON ts.id_tryout = t.tryout_id WHERE ts.id_student = ? ORDER BY ts.average_score DESC LIMIT 3`, { replacements: [idStudent] });
          return rows;
        } catch (err) {
          throw err;
        }
      }
}

module.exports = studentModel