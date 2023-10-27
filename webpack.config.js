const path = require("path");

module.exports = {
    entry: "/home/sebastian/To-do-list-2/src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: 'development',
    module : {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    }, 
    compress: true,
    port: 9000
}
}
