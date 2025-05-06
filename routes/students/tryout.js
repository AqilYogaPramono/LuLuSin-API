var express = require('express')
var router = express.Router()
const studentModel = require('../../models/studentModel')
const tryoutModel = require("../../models/tryoutModel")
const subjectModel = require('../../models/subjectModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

//menampilakn seluruh list tryout yang belum di kerjakan dan sudah dikerjakan
router.get('/student/tryout', verifyToken, authorize(['student']), async (req, res, next) => {
  try {
    const idStudent = req.user.id

    const doneTryouts = await studentModel.getDoneTryouts(idStudent)
    const notDoneTryouts = await studentModel.getNotDoneTryouts(idStudent)

    res.status(200).json({
      done: doneTryouts,
      not_done: notDoneTryouts
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


//menmapilkan nama tryout berdasrkan id
  router.get('/student/tryout/:idTryout', verifyToken, authorize(['student']), async (req, res, next) => {
    try {
      const { idTryout } = req.params

      const getSubject = await subjectModel.getTotalQuestionAndTotalTime()
      const getTryout = await tryoutModel.getTryoutName(idTryout)

      res.status(200).json({ data: getSubject, getTryout })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

//menampilkan soal, gambar soal dan opsi jawaban
router.get("/students/tryout/:idTryout/:idSubject/taking", verifyToken, authorize(['student']), async (req, res, next) => {
    const { idTryout, idSubject } = req.params
    const idStudent = req.user.id
  
    try {
      const studentData = await TryoutModel.getStudentById(idStudent)
      const subjectData = await TryoutModel.getSubjectById(idSubject)
      const questionData = await TryoutModel.getQuestionsBySubjectId(idSubject, idTryout)
      res.status(200).json({ studentData, subjectData, questionData })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

router.post('/students/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res, next) => {
  try {
    const idStudent      = req.user.id
    const { questionId } = req.params
    const { answer_option_id: answerOptionId } = req.body
    
    const result = await TryoutModel.storeStudentAnswer({ idStudent, questionId, answerOptionId })
    return res.status(201).json({ message: 'CREATED' })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
)

//update id siswa, id soal, id jawaban
router.patch('/students/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res) => {
  try {
    const idStudent = req.user.id
    const { questionId } = req.params
    const { answer_option_id: answerOptionId } = req.body
    
    const result = await TryoutModel.updateStudentAnswer({ idStudent, questionId: Number(questionId), answerOptionId: Number(answerOptionId), })

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Data jawaban tidak ditemukan atau tidak sesuai' })
      }

      return res.status(200).json({ message: 'OK' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
)


//menampilkan soal, gambar soal, opsi jawaban, jawaban benar, jawaban siswa, pembahasan soal
//menampilkan totaol nilai rata rata dari seluruh sub test, jawaban benar untuk selurh sub test, jabawan kossong untuk seluruh sub test 
//menampilkan nilai nilai rata rata dari seluruh sub test, jawaban benar untuk selurh sub test, jabawan kossong untuk per subjek 

module.exports = router
