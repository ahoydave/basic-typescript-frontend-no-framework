
const path = require('path');

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "./js/bundle.js"
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: "ts-loader"}
        ]
    },
    mode: "development"
}