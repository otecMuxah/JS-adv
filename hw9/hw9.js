const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (/.png|.jpg|.gif|.js/.test(req.url)) {
        console.log(req.url.slice(1));
        fs.readFile(req.url.slice(1), (err, data) => {
            if (err) {
                res.end('<strong>Error!</strong>');
                throw new Error(`Error while reading images ====> ${err}`);
            }
            res.end(data);
        });
    }


    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) {
            res.end('<strong>Error!</strong>');
            throw new Error('Error while reading index.html');
        }
        res.end(data);
    });
});

server.listen(5000, () => {
    console.log('Server is listening on port: 5000');
});






