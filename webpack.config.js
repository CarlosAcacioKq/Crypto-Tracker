const path = require('path');

module.exports = {
    entry: './src/client.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        clean: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        configFile: 'tsconfig.json'
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    mode: 'production',
    optimization: {
        minimize: true
    },
    performance: {
        hints: false
    },
    stats: {
        errorDetails: true
    }
};
