const fs = require('fs')
const path = require('path')
const { db } = require('../database/connection')

const deleteQuestionImage = async (req, res, next) => {
    const { question_id, tryout_id, subject_id } = req.params

    try {
        const [result] = await db.query(
        `SELECT question_image FROM questions WHERE question_id = ? AND id_tryout = ? AND id_subject = ?`,
        { replacements: [question_id, tryout_id, subject_id] }
    )

    if (result.length > 0 && result[0].question_image) {
        const fileName = result[0].question_image
        const imagePath = path.join(__dirname, '../../public/images/questionImage', fileName)

    if (fs.existsSync(imagePath)) {
        await fs.promises.unlink(imagePath)
        }
    }

    next()
    } catch (error) {
        res.status(500).json({ message: 'Gagal menghapus gambar' })
    }
}

module.exports = deleteQuestionImage
