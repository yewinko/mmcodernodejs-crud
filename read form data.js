let http = require('http');
let fs = require('fs');
let qs = require('querystring');

http.createServer((req,res)=>{

    if(req.url === '/about'  && req.method === 'POST'){
        let data ='';
        req.on('data',d=>{
            data += d;
        })
        req.on('end',()=>{
            console.log(qs.parse(data))
        })
    }

    if(req.url === '/' || req.url === '/home'){
        let readstrhome = fs.createReadStream('./page/home.html','utf-8');
        res.writeHead(200,{'Content-Type':'text/html'});
        readstrhome.pipe(res);
    }else if(req.url === '/about'){
        let readstrabout = fs.createReadStream('./page/about.html','utf-8');
        res.writeHead(200,{'Content-Type':'text/html'});
        readstrabout.pipe(res);
    }else if(req.url === '/index'){
        let readstrindex = fs.createReadStream('./page/index.html','utf-8');
        res.writeHead(200,{'Content-Type':'text/html'});
        readstrindex.pipe(res);
    }else if(req.url === '/api'){
        let obj = {
            name: 'ye win ko',
            age: 23
        }
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(obj))
    }

}).listen(3000,()=>{
    console.log('Server is runnig at 3000');
})