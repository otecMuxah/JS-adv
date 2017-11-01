const builder = require('../elementBuilder');
require('./footer.scss')

module.exports = () => {
    const content = `<a href="/">Easycode 2017</a>`;
    return builder('footer',content,'footer');
};

