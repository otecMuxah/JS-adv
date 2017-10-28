console.log(__dirname);
const path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname,'src'),
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]

    }
};
