const hello = () => console.log("Hello");

const list = [1,2,3];
const copyList = [...list];


import { header } from './modules/header';
import footer from './modules/footer';

const $ = require('jquery');

console.log($('div'));

document.body.appendChild(header());
document.body.appendChild(footer());
