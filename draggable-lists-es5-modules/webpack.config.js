const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        // Constructs an absolute path to the dist folder
        path: path.resolve(__dirname, 'dist'),
        // Informing webpack dev server where to find our bundle.js
        publicPath: 'dist'
    },
    // For using source maps (to view TypeScript files in a browser)
    devtool: 'inline-source-map',
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
    }
};