const hello = () => console.log("Hello");

const list = [1,2,3];
const copyList = [...list];


const header = require('./modules/header/header')();
const footer = require('./modules/footer/footer')();

const $ = require('jquery');

console.log($('div'));

document.body.appendChild(header);
document.body.appendChild(footer);
