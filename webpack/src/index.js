import { header } from './modules/header';
import { main } from './modules/main';
import footer from './modules/footer';

const $ = require('jquery');

document.body.appendChild(header());
document.body.appendChild(main());
document.body.appendChild(footer());
