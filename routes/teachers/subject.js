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


//patch ketegori subjek dan subjek


// delete subjek

module.exports = router;
