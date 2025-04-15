const fs = require('fs')
const path = require('path')
const { db } = require('../database/connection')

module.exports = async function deleteOldImageIfReplaced(req, res, next) {
  const { question_id } = req.params

  if (!req.file) {
    return next()
  }

  try {
    const [result] = await db.query(
      'SELECT question_image FROM questions WHERE question_id = :question_id',
      {
        replacements: { question_id },
        type: db.QueryTypes.SELECT,
      }
    )

    if (result && result.question_image) {
      const oldImagePath = path.join(__dirname, '../../public/images/questionImage/', result.question_image)

      fs.unlink(oldImagePath, (err) => {
        if (err && err.code !== 'ENOENT') {
        }
      })
    }

    next()
  } catch (error) {
    next(error)
  }
}
