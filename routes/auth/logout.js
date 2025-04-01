var express = require('express');
var router = express.Router();

//post untuk melakuakn register siswa
router.post('/logout', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router;
