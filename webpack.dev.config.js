const {merge} = require("webpack-merge");
const main = require("./webpack.config");

module.exports = merge(main, {
    devServer: {
        contentBase: "./public",
        port: 3333,
        hot: true
    }
});