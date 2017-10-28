console.log(__dirname);

module.exports = {
    entry: './index.js',
    output: {
        filename: '[name]-[hash].js'
    }
};
