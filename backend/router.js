const express = require('express');
const router = express.Router();
const Message = require('./schemas/messageSchema')
const User = require('./schemas/userSchema')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const messageSchema = require('./schemas/messageSchema');
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


router.post('/login', async (req,res) => {
    try {
        const {username, password} = req.body

        const user = await User.findOne({username})

        if (!user) {
            return res.json({msg:"Incorrect username and/or password", status: false})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) { 
            return res.json({msg:"Incorrect username and/or password", status: false})
        }

        return res.json({status: true, user})

    } catch(err) {
        console.log(err)
        res.sendStatus(500)
    }
})

router.post('/setavatar/:id', async (req, res) => {
    try {
        const userId = req.params.id
        const avatarImage = req.body.image 
        const userData = await User.findByIdAndUpdate(userId, {
            isAvatarImageSet: true,
            avatarImage,
        })

        return res.json({
            isSet: userData.isAvatarImageSet,
            image: userData.avatarImage
        })
    } catch (err) {
        console.log(err)
    }
})

router.get('/allusers/:id', async (req,res) => {
    try {

        const users = await User.find({_id:{$ne: req.params.id}})

        return res.json(users)

    } catch(err) {
        console.log(err)
    }
})

router.post('/addmessage', async (req,res) => {
    try {
        const {from,to,message} = req.body
        const data = await messageSchema.create({
            message: {text: message},
            users: {from, to},
            sender: from
        })


        if(data) {
            return res.json({msg: "Message added successfully"})
       } else {
            return res.json({msg: "Failed to add message"})
       }

    } catch(error) {
        console.log(error)
    }
})

router.post('/getallmessages', async (req,res) => {
    try {
        const { from, to } = req.body;

        const messages = await messageSchema.find({
            users: {
                $elemMatch: {
                    from: from,
                    to: to
                }

        }})

        console.log(messages)

        const projectMessages = messages.map((msg) => {
            console.log(msg.sender)
            return {
                fromSelf: msg.sender.toString() === from,
                message: msg.message.text,
            };
        });

        console.log("Project", projectMessages)
        res.json(projectMessages);
    } catch (error) {
        console.log(error)
    }
})



module.exports = router; 