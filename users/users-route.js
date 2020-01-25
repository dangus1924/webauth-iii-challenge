const router = require('express').Router()
const bcrypt = require('bcryptjs')
const db = require('../database/db-config')
const userModel = require('./users-model')


router.get('/', async (req, res, next) => {
    try {
        const users = await userModel.find()
        
        res.json(users)
    } catch(err) {
        next(err)
    }
})

module.exports = router