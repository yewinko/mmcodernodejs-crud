console.log('hello');
let fs = require('fs');
let readasync = fs.readFile('./note.txt','utf-8',function(err,data){
    console.log(data)
});
console.log('bye');