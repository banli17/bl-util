const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'util.js',
        library: 'blUtil',
        globalObject: 'this',
        libraryExport: 'default',
        libraryTarget: "umd"
    },
}