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


// post kategorui subjek


// patch ketegori subjek


// delete kategori subjek


module.exports = router;
