const { db } = require('../config/database/connection')
const { Sequelize, QueryTypes } = require('sequelize')


class tryoutModel {
    static async getall() {
        try {
            const [rows] = await db.query("SELECT t.tryout_id, t.tryout_name, t.status, COUNT(q.question_id) AS total_questions, (SELECT SUM(minimal_questions) FROM subjects) AS total_minimal_questions FROM tryouts t LEFT JOIN questions q ON q.id_tryout = t.tryout_id GROUP BY t.tryout_id, t.tryout_name, t.status")
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

    static async getTryoutQuestionById(tryoutId) {
      try {
          const [rows] = await db.query("SELECT JSON_OBJECT('tryout_name', t.tryout_name, 'status', t.status, 'subject_categories', (SELECT JSON_ARRAYAGG(JSON_OBJECT('subject_category', sc.subject_category_name, 'items', (SELECT JSON_ARRAYAGG(JSON_OBJECT('id_subject', subj.subject_id, 'subject_name', subj.subject_name, 'minimal_questions', subj.minimal_questions, 'soal_dibuat', subj.jumlah_soal)) FROM (SELECT s.subject_id, s.subject_name, s.minimal_questions, COUNT(q.question_id) AS jumlah_soal FROM subjects s LEFT JOIN questions q ON q.id_subject = s.subject_id AND q.id_tryout = t.tryout_id WHERE s.id_subject_category = sc.subject_category_id GROUP BY s.subject_id, s.subject_name, s.minimal_questions) AS subj))) FROM subject_categories sc)) AS result FROM tryouts t WHERE t.tryout_id = ?", {replacements: [tryoutId]})
          return rows[0]
      } catch (err) {
          throw err
      }
  }
    
    static async dashboard() { 
      try {
          const [rows] = await db.query(
              "SELECT t.tryout_id, t.tryout_name, (SELECT COUNT(*) FROM questions q WHERE q.id_tryout = t.tryout_id) AS total_questions, (SELECT SUM(minimal_questions) FROM subjects) AS total_minimal_questions FROM tryouts t WHERE t.status = 'hide'")
          return rows
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
            const [rows] = await db.query("SELECT s.subject_name, sc.subject_category_name FROM subjects s JOIN subject_categories sc ON s.id_subject_category = sc.subject_category_id WHERE s.subject_id = ?", {replacements: [subjectId]})
            return rows
        } catch (err) {
            throw err
        }
    }

    static async getAllTryoutQuestionBySubject(tryoutId, subjectId) {
        try {
            const [rows] = await db.query("SELECT q.question AS question, q.question_image AS question_image, JSON_ARRAYAGG(JSON_OBJECT('answer_option', ao.answer_option)) AS answer_options, MAX(CASE WHEN qe.question_explanation IS NOT NULL THEN ao.answer_option ELSE NULL END) AS correct_answer, MAX(qe.question_explanation) AS explanation, q.score AS score FROM questions q JOIN answer_options ao ON q.question_id = ao.id_question LEFT JOIN questions_explanations qe ON ao.answer_option_id = qe.id_answer_option WHERE q.id_tryout = ? AND q.id_subject = ? GROUP BY q.question, q.question_image, q.score", {replacements: [tryoutId, subjectId]})
            return rows
        } catch (err) {
            throw err
        }
    }

    static async storeQuestionWithExplanation(data) {
      const { tryout_id, subject_id, question, question_image,score, answer_options, correct_answer_index, question_explanation} = data

      if (answer_options.length > 5) {
        throw new Error("Maksimal 5 opsi jawaban yang diperbolehkan")
      }

      const filledAnswerOptions = answer_options.concat(
        Array(5 - answer_options.length).fill("")
      )

      if (
        typeof correct_answer_index !== "number" ||
        correct_answer_index < 0 ||
        correct_answer_index >= filledAnswerOptions.length
      ) {
        throw new Error("Indeks jawaban benar tidak valid")
      }

      const transaction = await db.transaction()

      try {
        const [questionId] = await db.query("INSERT INTO questions (id_tryout, id_subject, question, question_image, score)  VALUES (:tryout_id, :subject_id, :question, :question_image, :score)", {
          replacements: { tryout_id, subject_id, question, question_image, score },
          transaction,
          type: QueryTypes.INSERT
        })

        if (!questionId) {
          throw new Error("Gagal mendapatkan ID soal dari query insert.")
        }

        const insertedOptionIds = []
        for (const option of filledAnswerOptions) {
          const value = option || ""
          const [optionId] = await db.query("INSERT INTO answer_options (id_question, answer_option)  VALUES (:questionId, :option)", {
            replacements: { questionId, option: value },
            transaction,
            type: QueryTypes.INSERT
          })
          if (!optionId) {
            throw new Error(`Gagal memasukkan opsi jawaban: ${value}`)
          }
          insertedOptionIds.push(optionId)
        }

        if (!insertedOptionIds.length) {
          throw new Error("Gagal memasukkan opsi jawaban ke tabel 'answer_options'.")
        }

        if (typeof insertedOptionIds[correct_answer_index] === "undefined") {
          throw new Error("Indeks jawaban benar tidak valid opsi jawaban tidak ditemukan.")
        }

        const correct_answer_option_id = insertedOptionIds[correct_answer_index]

        await db.query("INSERT INTO questions_explanations (id_answer_option, question_explanation)  VALUES (:correct_answer_option_id, :question_explanation)", {
          replacements: { correct_answer_option_id, question_explanation },
          transaction,
          type: QueryTypes.INSERT
        })

        await transaction.commit()

        return { questionId, insertedOptionIds }
      } catch (error) {
        await transaction.rollback()
        throw error
      }
    }

    static async deleteQuestionById(question_id, tryout_id, subject_id) {
      try {
        await db.query(`DELETE FROM questions  WHERE question_id = ? AND id_tryout = ? AND id_subject = ?`, { replacements: [question_id,tryout_id, subject_id]}
      )
    } catch (error) {
      throw error}
    }

    static async updateQuestionWithExplanation(questionId, data) {
      const {tryout_id,subject_id,question,question_image,score,answer_options,correct_answer_index,question_explanation,} = data
    
      if (answer_options.length > 5) {
        throw new Error("Maksimal 5 opsi jawaban yang diperbolehkan")
      }
    
      const filledAnswerOptions = answer_options.concat(
        Array(5 - answer_options.length).fill("")
      )
    
      if (
        typeof correct_answer_index !== "number" ||
        correct_answer_index < 0 ||
        correct_answer_index >= filledAnswerOptions.length
      ) {
        throw new Error("Indeks jawaban benar tidak valid")
      }
    
      const transaction = await db.transaction()
    
      try {
        await db.query(`UPDATE questions SET id_tryout = :tryout_id,id_subject = :subject_id,question = :question,question_image = :question_image,score = :score WHERE question_id = :questionId`,
          {
            replacements: { tryout_id, subject_id, question, question_image, score, questionId }, transaction,
            type: QueryTypes.UPDATE,
          }
        )
    
        const [existingOptions] = await db.query(`SELECT answer_option_id FROM answer_options WHERE id_question = :questionId ORDER BY answer_option_id ASC`,
          { replacements: { questionId }, transaction }
        )
    
        if (!existingOptions || existingOptions.length !== 5) {
          throw new Error("Jumlah opsi jawaban untuk soal tidak valid. Diharapkan 5 opsi jawaban.")
        }
    
        const updatedOptionIds = []
        for (let index = 0; index < filledAnswerOptions.length; index++) {
          const value = filledAnswerOptions[index] || ""
          const answer_option_id = existingOptions[index].answer_option_id
    
          await db.query(`UPDATE answer_options SET answer_option = :option WHERE answer_option_id = :answer_option_id`,
            {
              replacements: { option: value, answer_option_id },
              transaction,
              type: QueryTypes.UPDATE,
            }
          )
          updatedOptionIds.push(answer_option_id)
        }
    
        if (typeof updatedOptionIds[correct_answer_index] === "undefined") {
          throw new Error("Indeks jawaban benar tidak valid, opsi jawaban tidak ditemukan.")
        }
    
        const correct_answer_option_id = updatedOptionIds[correct_answer_index]
    
        const [explanationData] = await db.query(`SELECT questions_explanation_id FROM questions_explanations WHERE id_answer_option = :correct_answer_option_id`,
          { replacements: { correct_answer_option_id }, transaction }
        )
    
        if (explanationData && explanationData.length > 0) {
          await db.query(`UPDATE questions_explanations SET question_explanation = :question_explanation WHERE id_answer_option = :correct_answer_option_id`,
            {
              replacements: { question_explanation, correct_answer_option_id },
              transaction,
              type: QueryTypes.UPDATE,
            }
          )
        } else {
          await db.query(`INSERT INTO questions_explanations (id_answer_option, question_explanation) VALUES (:correct_answer_option_id, :question_explanation)`,
            {
              replacements: { correct_answer_option_id, question_explanation },
              transaction,
              type: QueryTypes.INSERT,
            }
          )
        }        
    
        await transaction.commit()
        return { questionId, updatedOptionIds }
      } catch (error) {
        await transaction.rollback()
        throw error
      }
    }

  static async getStudentById(idStudent) {
    try {
      const [rows] = await db.query(`SELECT student_name AS nama, NISN AS nisn FROM students WHERE student_id = ?`,
        { replacements: [idStudent] }
      )
      return rows[0] || null
    } catch (err) {
      throw err
    }
  }

  static async getSubjectById(idSubject) {
    try {
      const [rows] = await db.query(`SELECT s.time_limit AS total_waktu,sc.subject_category_name AS kategori_subjek, s.subject_name AS subjek FROM subjects s JOIN subject_categories sc ON s.id_subject_category = sc.subject_category_id WHERE s.subject_id = ?`,
        { replacements: [idSubject] }
      )
      return rows[0]
    } catch (err) {
      throw err
    }
  }

  static async getQuestionsBySubjectId(idSubject, idTryout) {
    try {
      const [rows] = await db.query(
        `WITH numbered_questions AS ( SELECT q.question_id, q.question_image, q.question, s.minimal_questions, ROW_NUMBER() OVER ( PARTITION BY q.id_subject, q.id_tryout ORDER BY q.question_id ) AS rn FROM questions AS q JOIN subjects AS s ON s.subject_id = q.id_subject WHERE q.id_subject = ? AND q.id_tryout = ? ), limited_questions AS ( SELECT question_id, question_image, question FROM numbered_questions WHERE rn <= minimal_questions ) SELECT lq.question_id, lq.question_image AS image_question, lq.question, JSON_ARRAYAGG( JSON_OBJECT( 'id', ao.answer_option_id, 'text', ao.answer_option ) ) AS answer_options FROM limited_questions AS lq JOIN answer_options AS ao ON ao.id_question = lq.question_id GROUP BY lq.question_id, lq.question_image, lq.question`,
        { replacements: [idSubject, idTryout] }
      )
      return rows
    } catch (err) {
      throw err
    }
  }

  // static async storeStudentAnswer({ idStudent, questionId, answerOptionId }) {
  //   const [[explRow]] = await db.query(
  //     `SELECT qe.questions_explanation_id FROM questions_explanations AS qe left JOIN answer_options AS ao ON ao.answer_option_id = qe.id_answer_option WHERE ao.id_question = ? LIMIT 1`, { replacements: [questionId] }
  //   )

  //   const questionsExplanationId = explRow.questions_explanation_id

  //   const [insertResult] = await db.query(`INSERT INTO students_answers (id_student, answer_options_id, id_answer_option) VALUES (?, ?, ?)`, { replacements: [idStudent, answerOptionId, questionsExplanationId] }
  //   )
  //   return insertResult
  // }

  // static async updateStudentAnswer({ idStudent, questionId, answerOptionId }) {
  //   const [result] = await db.query(`UPDATE students_answers SET answer_options_id = ? WHERE id_student = ? AND answer_options_id IN (SELECT answer_option_id FROM answer_options WHERE id_question = ? )`, {
  //       replacements: [answerOptionId, idStudent, questionId]
  //     }
  //   )

  //   return result
  // }

  static async storeStudentAnswer({ idStudent, questionId, answerOptionId, idSubject, idTryout }) {
    try {
      const [checkQuestion] = await db.query(
        `SELECT q.question_id FROM questions q JOIN tryouts t ON q.id_tryout = t.tryout_id JOIN subjects s ON q.id_subject = s.subject_id WHERE q.question_id = ? AND q.id_tryout = ? AND q.id_subject = ?`, { replacements: [questionId, idTryout, idSubject]
        }
      )
      if(!checkQuestion) {
        throw new Error('Soal tidak sesuai dengan tryout dan subjek')
      }
  
      const [checkAnswerOption] = await db.query(
        `SELECT ao.id_question FROM answer_options ao JOIN questions q ON ao.id_question = q.question_id WHERE ao.id_question = ? AND ao.answer_option_id = ?`, { replacements: [questionId, answerOptionId]
        }
      )
      if(!checkAnswerOption) {
        throw new Error('Opsi jawaban tidak valid untuk soal ini')
      }
      
      const [validationInsert] = await db.query(
        `SELECT ao.id_question FROM answer_options ao JOIN questions q ON ao.id_question = q.question_id WHERE ao.id_question = ? AND ao.answer_option_id = ?`, { replacements: [questionId, answerOptionId]
        }
      )
      if(!validationInsert) {
        throw new Error('Siswa sudah menjawab soal ini')
      }

      const [explRow] = await db.query(
        `SELECT qe.id_answer_option FROM questions_explanations qe JOIN answer_options ao ON qe.id_answer_option = ao.answer_option_id JOIN questions q ON ao.id_question = q.question_id WHERE q.question_id = ?`, { replacements: [questionId]
        }
      )
      const questionsExplanationId = explRow[0].id_answer_option
  
      const [insertResult] = await db.query(`INSERT INTO students_answers (id_student, answer_options_id, id_answer_option) VALUES (?, ?, ?)`, { replacements: [idStudent, answerOptionId, questionsExplanationId] }
      )
      return insertResult
    } catch (err) {
      throw err
    }
  }

  static async updateStudentAnswer({ idStudent, questionId, answerOptionId }) {
    const [result] = await db.query(`UPDATE students_answers SET answer_options_id = ? WHERE id_student = ? AND answer_options_id IN (SELECT answer_option_id FROM answer_options WHERE id_question = ? )`, {
        replacements: [answerOptionId, idStudent, questionId]
      }
    )

    return result
  }

  static async getTryoutName(idTryout) {
    try {
      const [rows] = await db.query(`select tryout_id, tryout_name from tryouts where tryout_id = ?`,
        { replacements: [idTryout] }
      )
      return rows[0]
    } catch (err) {
      throw err
    }
  }
}

module.exports = tryoutModel