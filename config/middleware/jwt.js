//middlleware untuk cek token login
var jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.header('Authrization')?.replace('Bearer', '')
    if (!token) {
        return res.status(403).json({ message: 'No token provided'})
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'invalid or expired token'})
        }
        req.user = decoded
        next()
    })
}

module.exports = verifyToken