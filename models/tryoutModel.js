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
}

module.exports = tryoutModel