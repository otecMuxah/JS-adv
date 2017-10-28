const http = require('http');
const fs = require('fs');
let counter = 0;
// http
//     .createServer((req,res)=>{
//         res.setHeader('Content-Type','text/html');
//         res.end('<strong>Hello</strong>', ()=>{
//             console.log(`Sent ${++counter}`);
//         })
//     }).listen(3000, ()=> console.log('Server is listening on 3000'));
//
//
// http.createServer((req,res)=>{
//     console.log(req.headers, req.url)
//     res.setHeader('Content-Type','text/html');
//     http.get('http://wttr.in/~kharkov',(response)=>{
//         if (response.statusCode !== 200) {res.end(`<strong style="color: red">Error!</strong>`)}
//         else {
//             response.setEncoding('utf-8');
//             let result = '';
//             response.on('data',data => result += data);
//             response.on('end', ()=>res.end(result))
//         }
//     })
// }).listen(3000, ()=> console.log('Server is listening on 3000'));


http.createServer((req,res)=>{
    if (req.url === '/img.png') {

        fs.readFile('img.png' ,(err,data)=>{
            if (err) {
                res.end(`<strong>Eroor!</strong>`);
                throw new Error('Error while reading index.html');
            }
            res.setHeader('Content-Type','image/png');
            res.end(data);
        });
        return;
    }
    fs.readFile('index.html','utf-8',(err,data)=>{
        if (err) {
            res.end(`<strong>Eroor!</strong>`);
            throw new Error('Error while reading index.html');
        };
        res.end(data);
    })
}).listen(3000, ()=> console.log('Server is listening on 3000'));