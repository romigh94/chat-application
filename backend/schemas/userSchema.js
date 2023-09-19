const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirmPassword: String,
    isAvatarImageSet: Boolean,
    avatarImage: String
})

module.exports = mongoose.model('Users', userSchema)