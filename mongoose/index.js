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

app.listen(5000)