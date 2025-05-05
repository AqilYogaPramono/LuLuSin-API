var express = require('express');
var router = express.Router();
const TryoutModel = require("../../models/tryoutModel");
const { verifyToken, authorize } = require('../../config/middleware/jwt');
const tryoutModel = require('../../models/tryoutModel');

//menampilakn seluruh list tryout yang belum di kerjakan
//menmapilkan nama tryout berdasrkan id
//menampilkan nama dan nisn siswa

//menampilkan soal, gambar soal dan opsi jawaban
router.get("/students/tryout/:idTryout/:idSubject/taking", verifyToken, authorize(['student']), async (req, res, next) => {
    const { idTryout, idSubject } = req.params;
    const idStudent = req.user.id;
  
    try {
      const studentData = await TryoutModel.getStudentById(idStudent)
      const subjectData = await TryoutModel.getSubjectById(idSubject)
      const questionData = await TryoutModel.getQuestionsBySubjectId(idSubject, idTryout)
      res.status(200).json({ studentData, subjectData, questionData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

router.post('/students/tryout/:idTryout/:idSubject/:questionId/taking', verifyToken, authorize(['student']), async (req, res, next) => {
  try {
    const idStudent      = req.user.id;
    const { questionId } = req.params;
    const { answer_option_id: answerOptionId } = req.body;
    
    const result = await TryoutModel.storeStudentAnswer({ idStudent, questionId, answerOptionId });
    return res.status(201).json({ message: 'CREATED' });
    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
);

//update id siswa, id soal, id jawaban
//menampilkan soal, gambar soal, opsi jawaban, jawaban benar, jawaban siswa, pembahasan soal
//menampilkan totaol nilai rata rata dari seluruh sub test, jawaban benar untuk selurh sub test, jabawan kossong untuk seluruh sub test 
//menampilkan nilai nilai rata rata dari seluruh sub test, jawaban benar untuk selurh sub test, jabawan kossong untuk per subjek 

module.exports = router;
