let http = require('http');
let port = 3000;
let host = '127.0.0.1';
let fs = require('fs');

http.createServer((req,res)=>{

    if(req.url === '/index'){
        let readsync = fs.readFile('./page/index.html','utf-8',(err,data)=>{
            if(data){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        });
    }else if(req.url === '/about'){
        let readsync = fs.readFile('./page/about.html','utf-8',(err,data)=>{
            if(data){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        });
    }else if(req.url === '/'){
        let readsync = fs.readFile('./page/home.html','utf-8',(err,data)=>{
            if(data){
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(data)
            }
        });
    }


}).listen(port,host,()=>{
    console.log(`Sever is running at http://${host}:${port}`)
})