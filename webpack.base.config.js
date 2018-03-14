var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

function getFilename() {
    var d = new Date()
    return '[name]-' + (+d) + '.js'
}

module.exports = {
    context: __dirname,

    entry: {
        // Add as many entry points as you have container-react-components here
        index: './react_root/index.jsx',
        vendors: ['react'],
    },

    output: {
        path: path.resolve('./react_root/static/js/bundles/local/'),
        filename: getFilename()
    },

    externals: [], // add all vendor libs

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ], // add all common plugins here

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.scss?$/, exclude: /node_modules/, loader: 'style-loader!css-loader!sass-loader' },
        ] // add all common loaders here
    },

    node: {
        __dirname: true
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    },
}