var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const student = require('../../models/studentModel')
const teacher = require('../../models/teacherModel')
const admin = require('../../models/adminModel')
const bcrypt = require('bcryptjs')

//post untuk login dnegan email dan password untuk siswa dan guru
    router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    if (!email) return res.status(400).json({ message: 'Email required' });
    if (!password) return res.status(400).json({ message: 'Password required' });

    try {
        let user = null;
        let userType = null;

        user = await student.login(email);
        if (user) {
            if (user.status === 'reject') {
                return res.status(403).json({ message: 'Your registration has been rejected' });
            }
            if (user.status === 'process') {
                return res.status(403).json({ message: 'Your registration is still being processed' });
            }
            userType = 'student';
        } else {
            user = await teacher.login(email);
            if (user) {
                userType = 'teacher';
            } else {
                user = await admin.login(email);
                if (user) {
                    userType = 'admin';
                }
            }
        }

        if (!user) return res.status(401).json({ message: 'Email wrong' });

        if (userType === 'student') {
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ message: 'Password wrong' });
        } else {
            if (password !== user.password) return res.status(401).json({ message: 'Password wrong' });
        }

        let payload = {};
        if (userType === 'student') {
            payload = { id: user.student_id, username: user.student_name, type: 'student' };
        } else if (userType === 'teacher') {
            payload = { id: user.teacher_id, username: user.teacher_name, type: 'teacher' };
        } else if (userType === 'admin') {
            payload = { id: user.admin_id, username: user.admin_name, type: 'admin' };
        }

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '100d' });

        res.status(200).json({ message: 'OK', userType, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    });

module.exports = router;
