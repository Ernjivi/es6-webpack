const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        app: './index.js',
    },
    output: {
        filename: '[name]-[hash:7]-bundle.js'
    }
}