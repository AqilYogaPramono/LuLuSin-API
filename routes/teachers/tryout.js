var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel')

//menampilakn judul tryout, soal yang sudah dibuat dan status
router.get('/teacher/tryout', async (req, res, next) => {
    try {
        const dataTryout = await tryout.getall()
        
        res.status(200).json ({ dataTryout })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//post judl tryout
router.post('/teacher/tryout/create', async (req, res, next) => {
    const { tryout_name } = req.body
    const data = { tryout_name }

    try {
        await tryout.store(data)
        res.status(201).json ({ message: 'CREATED'})
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

//edit judul tryout
//menampilkan kategori subjek beserta nama subejek dan soal yang sudah di buat
//get soal, opsi jawaban, jawaban benar, pembahasan
//post soal dan opsi soal
//post jawaban benar dan pembahasan 
//patch soal dan opsi soal
//patch jawaban benar dan pembahasan

module.exports = router;
