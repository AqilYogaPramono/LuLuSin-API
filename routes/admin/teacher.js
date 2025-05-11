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
  
// store new data teacher
router.post('/admin/teacher/store', verifyToken, authorize(['admin']), async (req, res) => {
    try {
        const { teacher_name, NUPTK, email } = req.body
        
        if (!teacher_name || !NUPTK || !email) {
            return res.status(400).json({ 
                message: 'Missing required fields',
                required: ['teacher_name', 'NUPTK', 'email']
            })
        }

        const result = await teacherModel.store({
            teacher_name,
            NUPTK,
            email
        })
        
        res.status(201).json({
            message: 'CREATED',
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//update data teacher with id
router.patch('/admin/teacher/update/:id', verifyToken, authorize(['admin']), async (req, res) => {
    try {
      const teacherId = req.params.id
      const { teacher_name, NUPTK, email, password } = req.body
      if (!teacher_name || !NUPTK || !email || !password) {
        return res.status(400).json({ message: 'Semua field wajib diisi.' })
      }
      const data = {
        teacher_name,
        NUPTK,
        email,
        password
      }
      await teacherModel.updateTeacher(teacherId, data)
      res.status(200).json({ message: 'OK' })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
})
  
module.exports = router;
