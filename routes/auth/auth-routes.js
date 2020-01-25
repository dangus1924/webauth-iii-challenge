const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userModel = require('../users/users-model')

router.post('/register', async (req, res, next) => {
    const user = req.body
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash;

    try {
        const newUser = await userModel.add(user)       
        res.status(201).json(newUser)
    } catch(err) {
        res.status(500).json(err)
        next(err)
    }
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    userModel.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          //a jwt should be generated
          const token = generateToken(user);
          console.log('token', token)
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

function generateToken() {
    const payload = {
        sub: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        expiresIn: '1d',        
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options)
}

module.exports = router;