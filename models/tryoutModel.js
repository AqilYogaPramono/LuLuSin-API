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
    
    static async UnattemptedTryouts(studenId) {
        try {
            const [rows] = await db.query("select t.tryout_name from tryouts t where t.tryout_id not in(select distinct q.id_tryout from questions q join students_answers sa on sa.id_answer_option = q.question_id where sa.id_student = ? ) and t.status = 'show'", {replacements: [studenId]})
            return rows
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
    
    static async getStudentQuestionDetail(idStudent, idTryout, idSubject) {
      try {
        const [[studentRow]] = await db.query(
          'SELECT student_name, NISN FROM students WHERE student_id = ?',
          { replacements: [idStudent] }
        );
    
        const studentName = studentRow?.student_name || null;
        const nisn = studentRow?.NISN || null;
    
        const [[subjectRow]] = await db.query(
          `SELECT s.minimal_questions, s.subject_name, sc.subject_category_name 
           FROM subjects s 
           JOIN subject_categories sc ON s.id_subject_category = sc.subject_category_id 
           WHERE s.subject_id = ?`,
          { replacements: [idSubject] }
        );
    
        const minimalQuestions = subjectRow?.minimal_questions || 0;
        const subjectName = subjectRow?.subject_name || null;
        const subjectCategoryName = subjectRow?.subject_category_name || null;
    
        const [rows] = await db.query(
          `SELECT
             q.question_id,
             q.question_image AS image_question,
             q.question,
             ao.answer_option_id,
             ao.answer_option
           FROM (
             SELECT *
             FROM questions
             WHERE id_tryout = ? AND id_subject = ?
             ORDER BY RAND()
             LIMIT ?
           ) AS q
           LEFT JOIN answer_options ao
             ON ao.id_question = q.question_id
           ORDER BY q.question_id, RAND()`,
          { replacements: [idTryout, idSubject, minimalQuestions] }
        );
    
        const groupedData = [];
        const map = new Map();
    
        rows.forEach(row => {
          if (!map.has(row.question_id)) {
            map.set(row.question_id, {
              question_id: row.question_id,
              question: row.question,
              image_question: row.image_question,
              answer_options: []
            });
            groupedData.push(map.get(row.question_id));
          }
          map.get(row.question_id).answer_options.push({
            answer_option_id: row.answer_option_id,
            answer_option: row.answer_option
          });
        });
    
        for (let i = groupedData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [groupedData[i], groupedData[j]] = [groupedData[j], groupedData[i]];
        }
    
        return {
          student_name: studentName,
          nisn: nisn,
          subject_name: subjectName,
          subject_category_name: subjectCategoryName,
          questions: groupedData
        };
    
      } catch (err) {
        throw err;
      }
    }
    
}

module.exports = tryoutModel