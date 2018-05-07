var webpack = require("webpack");
var path = require("path");
module.exports = {
    resolve:{
        extensions:['.js','.jsx'],
        modules: [path.resolve(__dirname,"src"),"node_modules"]
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                loader:['babel-loader']
            }
        ]
    },
    entry:[
        './src/index.jsx'
    ],
    output:{
        filename:'app.js',
        path:  path.resolve(__dirname, "..", "dist/js"),
    },
    mode:"development"
};