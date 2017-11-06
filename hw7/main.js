const random = require('./random');

console.log(random.getRandomNumber(5,15));

// task 3
const read = require('./read');
read("name.txt1").then((data) => console.log(data)).catch((err) => console.log("err!!!!",err));

// task 4
const file = require('file-system');
const date = new Date().toDateString();
file.writeFile('someDir/date.txt', date);
