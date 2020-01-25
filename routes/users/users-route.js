const router = require('express').Router()
const restricted = require('../../database/middleware/restricted')
const userModel = require('./users-model')


router.get('/',  async (req, res, next) => {
    try {
        const users = await userModel.find()        
        res.json(users)
    } catch(err) {
        next(err)
    }
})

module.exports = router