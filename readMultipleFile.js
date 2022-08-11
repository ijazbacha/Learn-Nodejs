const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files')

fs.readdir(dirPath, (err, files) =>{
    files.map((item) =>{
        fs.readFile(`${dirPath}/${item}`, 'utf8', (err, readItem) =>{
            console.log(readItem);
        })
    })
})