const exress= require('express')
const mongoose=require('mongoose')
const cors= require('cors')
const StudentModel= require('./model/Employee')

const app = exress()
app.use(exress.json())
app.use(cors())

mongoose.connect("mongodb+srv://megha:meghashree@cluster0.pyqofrw.mongodb.net/store")

app.post('/register',(req,res) =>{
    StudentModel.create(req.body)
    .then(student=>res.json(student))
    .catch(err=>res.json(err))
})
app.get('/', (req, res) => {
    res.send("POST Request Called")
})


app.listen(3005,()=>{
    console.log("server is running ")
})
