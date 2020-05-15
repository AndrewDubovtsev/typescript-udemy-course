const path = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    // Production mode will optimise our code to make it as short as possible
    mode: 'production',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        // Constructs an absolute path to the dist folder
        path: path.resolve(__dirname, 'dist'),
        // We don't specify publicPath here, because we don't use webpack dev server
    },
    // We don't need to use source maps here
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
        // before the new output is written
        new CleanPlugin.CleanWebpackPlugin()
    ]
};