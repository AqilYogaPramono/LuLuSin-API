var express = require('express');
var router = express.Router();
const subjectcategory = require('../../models/subjectCategoryModel')
const { verifyToken, authorize } = require('../../config/middleware/jwt')

// get tabel kategori subjek
router.get('/teacher/subjectcategory', verifyToken, authorize(['teacher']), async (req, res, next) => {
    try {
        let dataSubjectCategory = await subjectcategory.getall()
        res.status(200).json({ dataSubjectCategory })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// post kategori subjek
router.post('/teacher/subjectcategory/create', verifyToken, authorize(['teacher']), async (req, res, next) => {
    let { subject_category_name } = req.body
    let data = { subject_category_name }

    if (!subject_category_name) return res.status(400).json({ message: 'subject_category_name is required.' })

    try {
        await subjectcategory.store(data)
        res.status(201).json ({ message: 'CREATED'})
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

// patch ketegori subjek
router.patch('/teacher/subjectcategory/update/:id', verifyToken, authorize(['teacher']), async (req, res, next) => {
    let id = req.params.id
    let { subject_category_name } = req.body
    let data = { subject_category_name }

    if (!subject_category_name) return res.status(400).json({ message: 'subject_category_name is required.' })

    try {
        await subjectcategory.update(id, data)
        res.status(200).json ({ message: 'OK'})
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

// delete kategori subjek
router.delete('/teacher/subjectcategory/delete/:id', verifyToken, authorize(['teacher']), async (req, res, next) => {
    let id = req.params.id
    try {
        await subjectcategory.delete(id)
        res.status(200).json ({ message: 'OK'})
    } catch (error) {
        res.status(500).json ({ message: error.message})
    }
})

module.exports = router;
