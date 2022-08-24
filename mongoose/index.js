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
    console.log('result', result);
    res.send('created')
})

app.listen(5000)