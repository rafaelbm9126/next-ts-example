const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|ico)$/,
      loader: 'file-loader',
      options: {
          name: '[name].[ext]',
          publicPath: '/_next/static/files',
          outputPath: 'static/files'
      }
    });
    return config;
  },
};
