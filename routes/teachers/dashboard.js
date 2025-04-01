var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

// menampilkan nama tryout, total soal dibuat demhan status hide
router.get('/teacher/dashboard', verifyToken, authorize(['teacher']),async (req, res, next) => { 
    try {
        let tryouts = await tryout.dashboard()
        res.status(200).json({ tryouts })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
