var express = require('express');
var router = express.Router();
const teacherModel = require('../../models/teacherModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

// menampilkan seluruh data pada tabel guru kecuali password
router.get('/admin/teacher', verifyToken, authorize(['admin']), async (req, res) => {
    try {
      const teachers = await teacherModel.getAllTeachers()
      res.status(200).json(teachers)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  })
  

module.exports = router;
