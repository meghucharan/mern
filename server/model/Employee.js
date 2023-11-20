const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: String,
    email:String,
    password: String
})
const StudentModel = mongoose.model('hello',studentSchema)
module.exports = StudentModel