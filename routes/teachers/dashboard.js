var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel')

// menampilkan nama tryout, total soal dibuat, hide or show
router.get('/teacher/dashboard', async (req, res, next) => { 
    let status = req.query.status

    try {
        let tryouts = await tryout.Tdashboard(status)
        res.status(200).json({ data: tryouts })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//menampilkan nama guru yang login
//menampilkan tryout yang belum di publis

module.exports = router;
