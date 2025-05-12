var express = require('express');
var router = express.Router();
const studentModel = require('../../models/studentModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

//menampilkan seluruh data siswa
router.get('/admin/student', verifyToken, authorize(['admin']), async (req, res) => {
    try {
      const students = await studentModel.getAllStudents()
      res.status(200).json(students)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
})

//delete data siswa berdasarkan id
router.delete('/admin/student/delete/:id', verifyToken, authorize(['admin']), async (req, res) => {
    try {
      const studentId = req.params.id
      await studentModel.deleteStudent(studentId)
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
})

module.exports = router;

