var express = require('express');
var router = express.Router();
const subjectcategory = require('../../models/subjectCategoryModel')

// get tabel kategori subjek
router.get('/teacher/subjectcategory', async (req, res, next) => {
    try {
        let dataSubjectCategory = await subjectcategory.getall()
        res.status(200).json({ dataSubjectCategory })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// post kategori subjek
router.post('/teacher/subjectcategory/create', async (req, res, next) => {
    let { subject_category_name } = req.body
    let data = { subject_category_name }

    try {
        await subjectcategory.store(data)
        res.status(201).json ({ message: 'CREATED'})
    } catch (error) {
        res.status(500).json ({ message: error.message })
    }
})

// patch ketegori subjek


// delete kategori subjek


module.exports = router;
