const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userModel = require('../../routes/users/users-model')

module.exports = (req, res, next) => {
    const token = req.header.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
          if (err) {
            res.status(401).json({
              message: 'not verified'
            })
          } else {
            req.decodedToken = decodedToken
            next();
          }
        });
    
      } else {
        res.status(400).json({
          message: 'no token provided'
        })
      }
}