const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/pages/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'news.html',
            template: './src/pages/news.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'photo.html',
            template: './src/pages/photo.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'rozklad.html',
            template: './src/pages/rozklad.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].css',
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets/images'),
                    to: 'assets/images',
                },
            ],
        }),
    ]
};
