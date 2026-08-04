const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    image : String,
    caption : String
})

const postModel = new mongoose.model("post", postSchema)

module.exports = postModel