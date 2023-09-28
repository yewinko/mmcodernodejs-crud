let express = require('express');
let app = express();
let fs = require('fs');
let qs = require('querystring');

// global middleware
app.use('/',(req,res,next)=>{
    console.log('middleware fire');
    next();
})

// local middleware
/*app.use('/',(req,res,next)=>{
    if(req.url === '/'){
        console.log('middleware fire')
        next()
    }
})*/

/*app.use('/home',(req,res,next)=>{
    console.log('middleware fire');
    next()
    if(req.url === '/home' && req.method === 'POST'){
        let data = '';
        req.on('data',d=>{
            data += d;
        })
        req.on('end',()=>{
            console.log(qs.parse(data))
        })
    }
})*/

app.get('/home',(req,res)=>{

    res.writeHead(200,{'Content-Type':'text/html'})
    let readstr = fs.createReadStream('./page/home.html','utf-8')
    readstr.pipe(res)
    
})

app.use('/api/:id',(req,res,next)=>{
    console.log('middleware fire');
    next();
})

app.get('/api/:id',(req,res)=>{
    console.log(req.params)
})


app.listen(3000)