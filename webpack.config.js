const path = require('path')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    mode: 'none',
    entry: {
        'util': './src/index.js',
        'util.min': './src/index.js'
    },
    // devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'blUtil',
        libraryExport: 'default',
        libraryTarget: "umd"
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [require('@babel/plugin-proposal-object-rest-spread')]
                }
            }
        }]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                include: /\.min\.js$/,
                terserOptions: {
                    warnings: false,
                    compress: {
                        drop_console: true,
                    }
                }
            })
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             warnings: false,
            //             drop_console: true,
            //             pure_funcs: ['console.log'] //移除console
            //         }
            //     }
            // })
        ]
    }
}