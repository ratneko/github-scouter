const path = require('path')

const config = {
    entry: __dirname + '/src/app.tsx',
    output: {
        path: path.resolve('../lib/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'ts-loader'}
                ]
            }
        ]
    }
}

module.exports = config

