const { db } = require('../config/database/connection');

class teacherModel {
    static async getTeacher() {
        try {
            const [rows, metadata] = await db.query("SELECT * FROM teachers");
            return rows;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = teacherModel;
