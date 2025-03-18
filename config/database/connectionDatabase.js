const {Sequelize} = require(`sequelize`)

const db = new Sequelize(`db_LuLuSin`,`root`,``,{
    host: process.env.DB_HOST,
    dialect: process.env.DB_NAME
})

async function connectDB() {
    try{
        await db.authenticate();
        console.log("Database Connected")
    }catch(error){
        console.log(error)
    }
}

module.exports = {db, connectDB}