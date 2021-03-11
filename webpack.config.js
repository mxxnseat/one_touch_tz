const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    entry: "./src/main.js",
    module: {
        rules: [
            {test: /.js$/, use: "babel-loader"},
            {test: /.vue$/, use: "vue-loader"},
            {
                test: /.s[ca]ss$/, use: ["vue-style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js"
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}