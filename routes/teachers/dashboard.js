var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel')

// menampilkan nama tryout, total soal dibuat, hide or show
router.get('/teacher/dashboard', async (req, res, next) => { 
    try {
        let tryouts = await tryout.dashboard()
        res.status(200).json({ tryouts })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
