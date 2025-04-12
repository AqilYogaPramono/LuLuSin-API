var express = require('express');
var router = express.Router();
const tryout = require('../../models/tryoutModel');
const uploudPhoto = require('../../config/middleware/uploudPhoto');

//menampilakn judul tryout, soal yang sudah dibuat dan status
router.get('/teacher/tryout', async (req, res, next) => {
    try {
        let  dataTryout = await tryout.getall()
        
        res.status(200).json ({ dataTryout })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//post judl tryout
router.post('/teacher/tryout/create', async (req, res, next) => {
    let { tryout_name } = req.body
    let data = { tryout_name }

    try {
        await tryout.store(data)
        res.status(201).json ({ message: 'CREATED'})
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

//edit judul tryout
router.patch('/teacher/tryout/update/:id', async (req, res, next) => {
    let id = req.params.id
    let { tryout_name } = req.body
    let data = { tryout_name }

    try {
        await tryout.update(id, data)
        res.status(200).json ({ message: 'OK'})
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

//delete tryout byid
router.delete('/teacher/tryout/delete/:id', async (req, res, next) => {
    let id = req.params.id
    try {
        await tryout.delete(id)
        res.status(200).json ({ message: 'OK'})
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

//menampilkan kategori subjek beserta nama subejek dan soal yang sudah di buat
router.get('/teacher/tryout/:id', async (req, res, next) => {
    let tryoutId = req.params.id
    try {
        let tryoutData = await tryout.getTryoutQuestionById(tryoutId)

        res.status(200).json ( tryoutData )
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

router.patch('/teacher/tryout/:id/update_status', async (req,res,next) => {
    let { status } = req.body
    let data = { status }
    let tryoutId = req.params.id

    try {
        await tryout.updateStatus(data, tryoutId)
        res.status(200).json ({ message: 'OK' })
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

//get soal, opsi jawaban, jawaban benar, pembahasan
router.get('/teacher/tryout/:idTryout/:idSubject', async (req, res, next) => {
    let { tryoutId, subjectId } = req.params

    try {
        let tryoutQuestionBySubject = await tryout.getAllTryoutQuestionBySubject(tryoutId, subjectId)
        let subject = await tryout.getSubjectByIdSubject(subjectId)
        res.status(200).json({ subject, tryoutQuestionBySubject })
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

//post soal dan opsi soal
router.post('/teacher/tryout/:tryout_id/:subject_id/create_question', uploudPhoto.single('question_image'), async (req, res, next) => {
    let { tryout_id, subject_id } = req.params
    let { question, score } = req.body
    let answer_options = req.body.answer_options
    let data = { tryout_id, subject_id, question, question_image: req.file ? req.file.filename : null, score, answer_options }
    
    if (!Array.isArray(answer_options)) {
        answer_options = [answer_options]
    }

    try {
        await tryout.storeQuestion(data)
        res.status(201).json({ message: 'CREATED' })
    } catch (error) {
        res.status(501).json({ message: error.message })
    }
})

//post jawaban benar dan pembahasan 
//patch soal dan opsi soal
//patch jawaban benar dan pembahasan
//delete soal by id

module.exports = router;
