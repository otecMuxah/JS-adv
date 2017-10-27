
const newDate = () => new Date().toDateString();
const path = require('path');
const scriptName = path.basename(__filename);

console.log(`<<<<<   Date is ${newDate()} and filename is ${scriptName}    >>>>>>`);


