const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index'),
    // mode: 'production',
    mode: 'development',
    experiments: {
        outputModule: true
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.webpack.js',
        library: {
            type: 'module'
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    },
    externals: {
        'react': 'react', // Case matters here 
        'react-dom': 'reactDOM' // Case matters here 
    }
};