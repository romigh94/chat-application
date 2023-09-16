const express = require('express');
const router = express.Router();
const Message = require('./schemas/messageSchema')
const User = require('./schemas/userSchema')
const mongoose = require('mongoose')
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
        const newUser = new User(req.body)
        await newUser.save()
        res.sendStatus(200)
    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

module.exports = router;