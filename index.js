const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const port = 5000;
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome API is now working!'
    })
})

server.listen(port, () => console.log(`n**** API is now running on Port: ${port}`))