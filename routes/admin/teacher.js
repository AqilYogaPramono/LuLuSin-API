var express = require('express');
var router = express.Router();
const teacherModel = require('../../models/teacherModel')


//menampilkan selurh data pada tabel guru kecuaali password
//detele dengan id data siswa

//coba
router.get('/teacher', async (req, res, next) => {
    try {
        const teacher = await teacherModel.getTeacher()

        res.status(200).json({ teacher })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
})


module.exports = router;
