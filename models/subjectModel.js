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
}

module.exports = subjectModel