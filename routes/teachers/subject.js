var express = require('express');
var router = express.Router();
const subject = require('../../models/subjectModel')

//get tabel subjek
router.get('/teacher/subject', async (req, res, next) => {
    try {
        let datasubject = await subject.getall()
        res.status(200).json({ datasubject })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//post ketgori subjek dan subjek
router.post('/teacher/subject/create', async (req, res, next) => {
    let { id_subject_category, subject_name, time_limit } = req.body
    let data = { id_subject_category, subject_name, time_limit }

    try {
        await subject.store(data)
        res.status(201).json({ message: 'CREATED' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//patch ketegori subjek dan subjek
router.patch('/teacher/subject/update/:id', async (req, res, next) => {
    let id = req.params.id
    let { id_subject_category, subject_name, time_limit } = req.body
    let data = { id_subject_category, subject_name, time_limit }

    try {
        await subject.update(id, data)
        res.status(200).json({ message: 'OK' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete subjek

module.exports = router;
