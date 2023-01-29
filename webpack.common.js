const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    optimization: {
        splitChunks: {
            chunks(chunk) {
                return chunk.name !== 'contentScript';
            },
        },
    },
    entry: {
        popup: path.resolve('src/popup/popup.tsx'),
        options: path.resolve('src/options/index.tsx'),
        background: path.resolve('src/background/background.ts'),
        contentScript: path.resolve('src/contentScript/index.tsx'),
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.tsx?$/,
                exclude: /node_modules/,
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    },
                    'sass-loader',
                ],
                test: /\.s[ac]ss$/i,
            },
            {
                type: 'asset/resource',
                test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve('src/static'), to: path.resolve('dist') },
            ],
        }),
        ...getHtmlPlugins(['popup', 'options']),
    ],
};

function getHtmlPlugins(chunks) {
    return chunks.map(
        (chunk) =>
            new HtmlWebpackPlugin({
                title: 'Search Assistant',
                filename: `${chunk}.html`,
                chunks: [chunk],
            })
    );
}
