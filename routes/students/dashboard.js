var express = require('express')
var router = express.Router()
const studentModel = require('../../models/studentModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')
//const { countdown } = require('../services/scraperService')

//menampilkan countdown snbt di mulai
//menampilkan top 3 nilai nilai ter tinggi untuk siswa yang login
//menampilkan nama tryout yang belum di kerjakan siswa yang login
router.get('/student/dashboard', verifyToken, authorize (['student']), async (req, res, next) => {
    try {
        let idStudent = req.user.id
        
        const notDoneTryouts = await studentModel.getNotDoneTryouts(idStudent)
        const topTryoutScores = await studentModel.getTop3TryoutScoresByStudentId(idStudent)
        
        res.status(200).json ({ notDoneTryouts, topTryoutScores })
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

// router.get('/student/dashboard', verifyToken, authorize (['student']), async (req, res, next) => {
//     try {
//         let idStudent = req.user.id
        
//         const notDoneTryouts = await studentModel.getNotDoneTryouts(idStudent)
//         const countdownSNBT = await countdown()

//         res.status(200).json ({ notDoneTryouts,  countdownSNBT})
//     } catch (error) {
//         res.status(500).json ({ message: error.message })
//     }
// })

module.exports = router
