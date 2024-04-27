const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: {
        icons: './src/scripts/icons.js',
        index: './src/scripts/index.js',
        data: './src/scripts/dataExtractor.js',
        display: './src/scripts/display.js',
        weather: './src/scripts/weather.js',
    },
    output: {
        clean: true,
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather Application',
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: 'asset/resource',
            },
        ],
    },
};
