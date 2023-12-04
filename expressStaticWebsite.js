const express = require('express')
const path = require('path')

const app = express()
const publicDirPath = path.join(__dirname, 'public')

app.set('view engine', 'ejs')

//--------- show page with .html extension-----------------
// app.use(express.static(publicDirPath)).listen(7000)


//--------- remove .html extension-----------------

app.get('', (req, res) =>{
    res.sendFile(`${publicDirPath}/index.html`)
})

app.get('/about', (req, res) =>{
    res.sendFile(`${publicDirPath}/about.html`)
})

app.get('/profile', (req, res) =>{
    let data={
        name: 'Ijaz Bacha',
        email: 'Bacha@geail.com',
        contact: '+1234567890'
    }
    res.render('profile', {data})
})

app.get('*', (req, res) =>{
    res.sendFile(`${publicDirPath}/pageNotFound.html`)
})

app.listen(7000)
