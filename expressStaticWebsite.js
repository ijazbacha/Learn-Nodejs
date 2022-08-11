const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, 'public')

//--------- show page with .html extension-----------------
// app.use(express.static(publicDirPath)).listen(7000)


//--------- remove .html extension-----------------

app.get('', (req, res) =>{
    res.sendFile(`${publicDirPath}/index.html`)
})

app.get('/about', (req, res) =>{
    res.sendFile(`${publicDirPath}/about.html`)
})

app.listen(7000)
