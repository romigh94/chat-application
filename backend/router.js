const express = require('express');
const router = express.Router();
const Message = require('./schemas/messageSchema')
const User = require('./schemas/userSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
// Define routes and route handlers
router.get('/messages', (req, res) => {
    res.send("hello")
    /*
    Message.find({})
    .then(messages => {
        res.send(messages)     
    })
    .catch(err => console.log(err))
    */
});

router.post('/messages', async (req, res) => {
    try {
        const msg = new Message(req.body)
        await msg.save()
        res.sendStatus(200)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }

})


router.post('/register', async (req, res) => {
    try {
        const {username, email, password} = req.body

        //const newUser = new User(req.body)
        const userExist = await User.findOne({username})
        const emailExist = await User.findOne({email})
        const hashedPassword = await bcrypt.hash(password, 10)

        if (userExist) {
            return res.json({msg:"Username alread exists", status: false})
        } else if (emailExist) {
            return res.json({msg:"Email already exists", status: false})
        } else {

            const newUser = await User.create({
                email,
                username,
                password: hashedPassword
            })
            delete newUser.password
            return res.json({status: true, newUser})
        }
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router;