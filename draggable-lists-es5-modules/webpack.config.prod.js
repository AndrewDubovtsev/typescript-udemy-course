const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        // Constructs an absolute path to the dist folder
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'none',
    module: {
        rules: [
            {
                // Any file with an extension ".ts" should be handled by this rule
                test: /\.ts$/,
                // Specifying a loader which webpack should use
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        // Webpack will bundle all the files with these extensions
        extensions: ['.ts', '.js']
    },
    plugins: [
        // It will clear everything in the dist folder
        new CleanPlugin.CleanWebpackPlugin()
    ]
};