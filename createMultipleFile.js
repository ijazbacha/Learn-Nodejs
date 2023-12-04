const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files')

for (let index = 0; index < 5; index++) {
    fs.writeFileSync(`${dirPath}/Test${index}.txt`, "This is a test file.")
}