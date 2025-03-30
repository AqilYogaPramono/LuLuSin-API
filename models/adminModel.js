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
}

module.exports = adminModel