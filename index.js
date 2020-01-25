const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRoute = require('./routes/auth/auth-routes')
const userRoute = require('./routes/users/users-route')

const port = 5000;
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/auth', authRoute)
server.use('/api/user', userRoute)

server.get('/', (req, res, next) => {
    res.json({
        message: 'Welcome API is now working!'
    })
})

server.listen(port, () => console.log(`n**** API is now running on Port: ${port}`))