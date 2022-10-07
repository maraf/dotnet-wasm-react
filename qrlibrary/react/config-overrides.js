const CopyPlugin = require("copy-webpack-plugin");

module.exports = function override(config, env) {
    config.plugins.push(new CopyPlugin({
        patterns: [
            { from: "dotnet-dist/dotnet.js", to: "public/qr/dotnet.js" }
        ],
    }));

    return config
}