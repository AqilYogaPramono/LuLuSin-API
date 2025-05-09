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
router.get("/student/tryout/:idTryout/:idSubject/taking", verifyToken, authorize(['student']), async (req, res, next) => {
    const { idTryout, idSubject } = req.params
    const idStudent = req.user.id
  
    try {
      const studentData = await tryoutModel.getStudentById(idStudent)
      const subjectData = await tryoutModel.getSubjectById(idSubject)
      const questionData = await tryoutModel.getQuestionsBySubjectId(idSubject, idTryout)
      res.status(200).json({ studentData, subjectData, questionData })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })

  //membuat jawaban siswa dan membandingkannya dengan jawaban benar
router.post('/student/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res, next) => {
  try {
    const idStudent      = req.user.id
    const { questionId, idTryout, idSubject } = req.params
    const { answerOptionId } = req.body
    
    const result = await tryoutModel.storeStudentAnswer({ idStudent, questionId, answerOptionId, idSubject, idTryout })
    return res.status(201).json({ message: 'CREATED' })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
)

//update id siswa, id soal, id jawaban 
router.patch('/student/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res) => {
  try {
    const idStudent = req.user.id
    const { questionId } = req.params
    const { answer_option_id: answerOptionId } = req.body
    
    const result = await tryoutModel.updateStudentAnswer(idStudent, questionId, answerOptionId)

      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Data jawaban tidak ditemukan atau tidak sesuai' })
      }

      return res.status(200).json({ message: 'OK' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
)

//menghapus jawawabn yang pernah di inputkan siswa
router.delete('/student/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res, next) => {
  try {
    const { questionId, idTryout, idSubject } = req.params
    
    const result = await tryoutModel.deleetStudentAnswer(questionId, idSubject, idTryout)
    return res.status(201).json({ message: 'OK' })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
)

//menampilkan soal, gambar soal, opsi jawaban, jawaban benar, jawaban siswa, pembahasan soal


//mennampilkan nilai rata rata, total jawaban benar, salah dan kosong dari total tryout dan menampilkan nilai rata rata, total jawaban benar, salah dan kosong dari total tryout berdasarkan subjek
router.get('/student/tryout/:idTryout/result', verifyToken, authorize(['student']), async (req, res) => {
  try {
    const idStudent = req.user.id
    const { idTryout } = req.params

    const summary = await tryoutModel.getTryoutResult(idTryout, idStudent)
    const perCategorySubject = await tryoutModel.getTryoutResultByCategorySubject(idTryout, idStudent)

    res.status(200).json({ summary, perCategorySubject })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router