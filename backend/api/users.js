const express = require('express')
const expressRouter = express.Router()

const User = require('../models/User');

expressRouter.get('/users', (req,res) => {
    User.find().then(users => res.json(users)).catch(err => console.log(err))
})

expressRouter.post('/users', (req,res)=>{
    const {name,email,phone} = req.body;
    const newUser = new User({
        name:name, email: email, phone: phone
    })

    newUser.save()
        .then(()=> 
            res.json({
                message:  "Added a user correctly"
            })
        )
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
 })

 module.exports = expressRouter