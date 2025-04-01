var express = require('express');
var router = express.Router();
const admin = require('../../models/adminModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

//menampilkan total seluruh siswa dan guru yang sudah daftar
router.get('/admin/dashboard', verifyToken, authorize(['admin']), async (req, res, next) => {
    try {
        let adminId = req.user.id
        let adminData = await admin.getAdmin(adminId)
        let countTS = await admin.getTotalUsers()
        res.status(200).json ({ adminData , countTS })
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

module.exports = router;


