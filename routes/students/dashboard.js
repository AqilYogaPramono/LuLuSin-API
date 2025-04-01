var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

//menampilkan countdown snbt di mulai
//menampilkan top 3 nilai nilai ter tinggi untuk siswa yang login
//menampilkan nama tryout yang belum di kerjakan siswa yang login
router.get('/student/dashboard', verifyToken, authorize (['student']), async (req, res, next) => {
    try {
        let studenId = req.user.id
        let UnattemptedTryoutsData = await tryout.UnattemptedTryouts(studenId)
        res.status(200).json ({ UnattemptedTryoutsData })
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

module.exports = router;
