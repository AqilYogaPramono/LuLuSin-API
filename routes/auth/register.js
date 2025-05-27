var express = require('express');
var router = express.Router();
const student = require('../../models/studentModel')

//post untuk melakuakn register siswa
router.post('/register', async (req, res) => {
    try {
        let { NISN, student_name, email, password, confirmation_password } = req.body

        if (!NISN) return res.status(400).json({ message: 'NISN is required.' })
        if (!student_name) return res.status(400).json({ message: 'Student name is required.' })
        if (!email) return res.status(400).json({ message: 'Email is required.' })
        if (!password) return res.status(400).json({ message: 'Password is required.' })
        if (!confirmation_password) return res.status(400).json({ message: 'Confirmation password is required.' })

        if (await student.login(email)) return res.status(400).json({ message: 'Email already exists.' })
        if (await student.getByNISN(NISN)) return res.status(400).json({ message: 'NISN already exists.' })

        if (password.length < 6) return res.status(400).json({ message: 'Password must be at least 6 characters.' })
        if (!/[A-Z]/.test(password)) return res.status(400).json({ message: 'Password must have at least one uppercase letter.' })
        if (!/[a-z]/.test(password)) return res.status(400).json({ message: 'Password must have at least one lowercase letter.' })
        if (!/\d/.test(password)) return res.status(400).json({ message: 'Password must have at least one number.' })
        if (password !== confirmation_password) return res.status(400).json({ message: 'Passwords do not match.' })

        await student.register({ NISN, student_name, email, password })

        res.status(201).json({ message: 'CREATED' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
