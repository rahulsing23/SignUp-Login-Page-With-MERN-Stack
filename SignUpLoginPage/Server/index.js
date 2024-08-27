const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const EmployeeModel = require('./Models/EmployeeModel')
const app = express()
const bcrypt =require('bcrypt')
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/Employee')

app.post('/register', (req, res)=>{
    const {name,email, password} = req.body
    bcrypt.hash(password,10).then(hash =>{
        EmployeeModel.create({name, email, password:hash})
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
    
})
app.post('/login',(req, res)=>{
    const {email, password} = req.body;
    
    EmployeeModel.findOne({email:email}).then(user=>{
        if(user)
        {
            bcrypt.compare(password, user.password,(err, response) =>{
                if(response)
                {
                      res.json("Success")
                }
                else{
                     res.json("Password is Incorrect")
                }
            })
        }
        else{
            res.json("User doesnot exist");
        }
    })
    
})

app.listen(3001, ()=>{
    console.log('Server is running')
})