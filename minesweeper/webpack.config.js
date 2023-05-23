const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    // mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'minesweeper',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [
                        {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            },
            {
                test: /\.(wav|mp3|ogg)$/,
                use: [
                        {
                        loader: 'file-loader',
                        options: {
                            name: 'audio/[name].[ext]',
                            outputPath: 'assets/audio'
                        }
                    }
                ]
            }
        ]
    }
}