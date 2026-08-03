const mongoose = require('mongoose')

async function connectDB(){
    await mongoose.connect('mongodb+srv://Prashant:prash8964@cluster0.5cypfut.mongodb.net/projectSocial')
    console.log('Connect to mongoDB')
}

module.exports = connectDB