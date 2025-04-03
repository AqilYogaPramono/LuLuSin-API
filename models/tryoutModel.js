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
            const [rows] = await db.query("select json_object('tryout_title', t.tryout_name, 'sections', (select json_arrayagg(json_object('section_title', sc.subject_category_name, 'items', (select json_arrayagg(json_object('subject_id', subj.subject_id, 'name', subj.subject_name, 'soal_dibuat', subj.jumlah_soal)) from (select s.subject_id, s.subject_name, count(q.question_id) as jumlah_soal from subjects s left join questions q on q.id_subject = s.subject_id and q.id_tryout = t.tryout_id where s.id_subject_category = sc.subject_category_id group by s.subject_id, s.subject_name) as subj))) from subject_categories sc)) as result from tryouts t where t.tryout_id = ? and t.status = 'show'", {replacements: [tryoutId]})
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
}

module.exports = tryoutModel