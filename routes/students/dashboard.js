var express = require('express');
var router = express.Router();
const { verifyToken, authorize } = require('../../config/middleware/jwt')

//menampilkan countdown snbt di mulai
//menampilkan top 3 nilai nilai ter tinggi untuk siswa yang login
//menampilkan nama tryout yang belum di kerjakan siswa yang login

module.exports = router;
