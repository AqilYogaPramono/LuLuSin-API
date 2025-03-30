var express = require('express');
var router = express.Router();
const adminModel =  require('../../models/adminModel')

//menampilkan selurh data pada tabel guru kecuaali password
//detele dengan id data guru

router.get('/admin', async (req, res, next) => {
    try{
        const admin =  await adminModel.getAdmin()

        res.status(200).json({ admin })
    }catch (error) {
        res.status(500).json({ message: error.message})
    }
})

module.exports = router;

