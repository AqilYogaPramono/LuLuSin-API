const { db } = require('../config/database/connection');

class tryoutModel {
    static async getall() {
        try {
            const [rows] = await db.query("select t.tryout_id, t.tryout_name, t.status, count(q.question_id) as total_questions from tryouts t left join questions q on q.id_tryout = t.tryout_id group by t.tryout_id, t.tryout_name, t.status;")
            return rows
        } catch (err){
            throw err
        }
    }

    static async store(data) {
        try {
            const [result] = await db.query("insert into tryouts set tryout_name = ?", {replacements: [data.tryout_name]})
            return result
        } catch (err) {
            throw err
        }
    }

    static async update(id, data) {
        try {
            const [result] = await db.query("update tryouts set tryout_name = ? where tryout_id = ?", {replacements: [data.tryout_name, id]})
            return result
        } catch (err) {
            throw err
        }
    }

    static async delete(id) {
        try {
            const [result] = await db.query("delete from tryouts where tryout_id = ?", {replacements: [id]})
            return result
        } catch (err) {
            throw err
        }
    }

    static async dashboard() { 
        try {
            const [rows] = await db.query(
                "select t.tryout_name, (select count(*) from questions q where q.id_tryout = t.tryout_id) as total_questions from tryouts t where t.status = 'hide'")
            return rows
        } catch (err) {
            throw err
        }
    }
    
    static async UnattemptedTryouts(studenId) {
        try {
            const [rows] = await db.query("select t.tryout_name from tryouts t where t.tryout_id not in(select distinct q.id_tryout from questions q join students_answers sa on sa.id_answer_option = q.question_id where sa.id_student = ? ) and t.status = 'show'", {replacements: [studenId]})
            return rows
        } catch (err) {
            throw err
        }
    }
    
    static async getTryoutQuestionById(tryoutId) {
        try {
            const [rows] = await db.query("SELECT JSON_OBJECT('tryout_name', t.tryout_name, 'subject_categories', (SELECT JSON_ARRAYAGG(JSON_OBJECT('subject_category', sc.subject_category_name, 'items', (SELECT JSON_ARRAYAGG(JSON_OBJECT('id_subject', subj.subject_id, 'subject_name', subj.subject_name, 'soal_dibuat', subj.jumlah_soal)) FROM (SELECT s.subject_id, s.subject_name, COUNT(q.question_id) AS jumlah_soal FROM subjects s LEFT JOIN questions q ON q.id_subject = s.subject_id AND q.id_tryout = t.tryout_id WHERE s.id_subject_category = sc.subject_category_id GROUP BY s.subject_id, s.subject_name) AS subj))) FROM subject_categories sc)) AS result FROM tryouts t WHERE t.tryout_id = ?;", {replacements: [tryoutId]})
            return rows[0]
        } catch (err) {
            throw err
        }
    }

    static async updateStatus(data, tryoutId) {
        try {
            const [result] = await db.query("update tryouts set status = ? where tryout_id = ?", {replacements: [data.status, tryoutId]})
            return result
        } catch (err) {
            throw err
        }
    }

    static async getSubjectByIdSubject(subjectId) {
        try {
            const [rows] = await db.query("SELECT s.subject_name, sc.subject_category_name FROM subjects s JOIN subject_categories sc ON s.id_subject_category = sc.subject_category_id WHERE s.subject_id = ?;", {replacements: [subjectId]})
            return rows
        } catch (err) {
            throw err
        }
    }

    static async getAllTryoutQuestionBySubject(tryoutId, subjectId) {
        try {
            const [rows] = await db.query("SELECT q.question AS question, q.question_image AS question_image, JSON_ARRAYAGG(JSON_OBJECT('answer_option', ao.answer_option)) AS answer_options, MAX(CASE WHEN qe.question_explanation IS NOT NULL THEN ao.answer_option ELSE NULL END) AS correct_answer, MAX(qe.question_explanation) AS explanation, q.score AS score FROM questions q JOIN answer_options ao ON q.question_id = ao.id_question LEFT JOIN questions_explanations qe ON ao.answer_option_id = qe.id_answer_option WHERE q.id_tryout = ? AND q.id_subject = ? GROUP BY q.question, q.question_image, q.score;", {replacements: [tryoutId, subjectId]})
            return rows
        } catch (err) {
            throw err
        }
    }

    static async storeQuestion(data) {
        try {
            const { tryout_id, subject_id, question, question_image, score, answer_options } = data

            const [result] = await db.query("INSERT INTO questions (id_tryout, id_subject, question, question_image, score) VALUES (:tryout_id, :subject_id, :question, :question_image, :score)", {replacements: {tryout_id, subject_id, question, question_image, score}})

            let questionId = result.insertId
            
            if (typeof questionId === "undefined" || questionId === 0) {
                const [rows] = await db.query("SELECT LAST_INSERT_ID() as questionId");
                if (rows && rows.length > 0 && rows[0].questionId) {
                    questionId = rows[0].questionId;
                }
            }

            if (answer_options > 5 ) {
                throw new Error("Maksimal 5 opsi jawaban yang diperbolehkan")
            }

            const filledAnswerOptions = answer_options.concat(Array(5 - answer_options.length).fill(""));

            for (const option of filledAnswerOptions) {
                const value = typeof option !== "undefined" ? option : ""
                await db.query("INSERT INTO answer_options (id_question, answer_option) VALUES (:questionId, :option)", { replacements: {questionId, option: value}})
            }

            return { result }

        } catch (err) {
            throw err
        }
    }

}

module.exports = tryoutModel