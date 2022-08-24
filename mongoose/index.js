const { application } = require('express');
const express = require('express')
require('./config')
const User = require('./user')

const app = express()
app.use(express.json());

app.get('/', async (req, res) =>{
    let result = await User.find()
    console.log('result', result);
    res.send(result)
})

app.post('/create', async (req, res) =>{
    const user = new User(req.body)
    const result = await user.save()
    res.send(result)
})

app.put('/update/:_id',async (req, res) =>{
    const user = await User.updateOne(req.params, {$set: req.body})
    console.log('user', user);
    res.send(user)
})

app.delete('/delete/:_id',async (req, res) =>{
    const result = await User.deleteOne(req.params)
    res.send(result)
})

app.listen(5000)