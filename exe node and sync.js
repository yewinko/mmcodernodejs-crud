console.log('hello')
let fs = require('fs');
let readsync = fs.readFileSync('./note.txt');
console.log(readsync);
console.log('bye');