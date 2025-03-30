var express = require('express');
var router = express.Router();
const admin = require('../../models/adminModel')

//menampilkan seluruh siswa yang sudah daftar
//menampilkan seluruh guru yang sudah daftar 
router.get('/admin/dashboard', async (req, res, next) => {
    try {
        let countTS = await admin.getTotalUsers()
        res.status(200).json ({ countTS })
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})



module.exports = router;


