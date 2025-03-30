const {db} = require('../config/database/connection')

class informationModel {
    static async getinformation() {
        try{
            const [rows, metadata] = await db.query("SELECT * FROM information");
            return rows;
        }catch (err) {
            throw err;
        }
    }
}

module.exports = informationModel