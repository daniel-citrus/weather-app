const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { argv } = require('process');

module.exports = (env, argv) => {
    let prod = argv.mode === 'production';

    return {
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
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        prod ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
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
};
