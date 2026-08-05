const express = require('express')
const multer = require('multer')
const uploadFile = require('./service/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const upload = multer({
    storage:multer.memoryStorage()
})

app.post('/create-post', upload.any(), async (req, res) => {
    const file = req.files && req.files[0]
    if (!file) {
        return res.status(400).json({ message: 'No image file provided' })
    }

    const result = await uploadFile(file.buffer)
    const caption = req.body.caption || req.body.Caption || ''
    
    const post = await postModel.create ({
        image : result.url,
        caption : caption
    })

    return res.status(201).json({
        message : 'Post created successfully',
        post
    })

})

app.get('/posts', async (req, res) => {

    const posts = await postModel.find()

    return res.status(201).json({
        message : "Post fetched successfully ",
        posts
    })

})

module.exports = app