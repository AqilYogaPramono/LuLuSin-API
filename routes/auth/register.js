var express = require('express');
var router = express.Router();
const student = require('../../models/studentModel')

//post untuk melakuakn register siswa
router.post('/register', async (req, res, next) => {
    let { NISN, student_name, email, password } = req.body
    let data = { NISN, student_name, email, password }

    try {
        await student.register(data)
        res.status(201).json({ message: 'CREATED' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
