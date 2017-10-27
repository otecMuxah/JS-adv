const fs = require("fs");

const read = (name) => 
    new Promise((res,rej)=>
        fs.readFile(name, (err, data) => {
            if (data) res(data.toString("utf8"));
            if (err) rej(err);
        })   
    )
  
module.exports = read;