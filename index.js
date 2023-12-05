const express = require("express")
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send("This the begning")
})

app.listen(port, () =>{
    console.log("Server is running on this port", port);
})