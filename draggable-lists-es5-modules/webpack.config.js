const path = require('path');
// Exporting a module in a Node JS environment
module.exports = {
    mode: 'development',
    // An entry point for the entire application
    // Webpack will go to that file and look up for the imports used in that file,
    // then it will go to those files until it knows all the files which are used in the project
    entry: './src/app.ts',
    output: {
        // A single JS file which will be produced in the end
        filename: 'bundle.js',
        // Resolve method constructs an absolute path to the output dist folder
        path: path.resolve(__dirname, 'dist'),
        // Informing webpack dev server where to find our bundle.js
        publicPath: 'dist'
    },
    // For using source maps (to view TypeScript files in a browser)
    devtool: 'inline-source-map',
    module: {
        // We define rules to tell Webpack how it should handle files with different extensions
        rules: [
            {
                // Test describes a test Webpack will perform for any file it finds to determine
                // whether this rule applies to that file
                // Any file with an extension ".ts" should be handled by this rule
                test: /\.ts$/,
                // Specifying a loader which webpack should use
                // A loader is a package which helps us handle files with certain extensions
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    // By default Webpack will bundle all JavaScript files, but we want it to bundle
    // TypeScript files as we;;
    resolve: {
        // Webpack will bundle all the files with these extensions
        // and put them together
        extensions: ['.ts', '.js']
    }
};