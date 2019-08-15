module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].minify.removeAttributeQuotes = false;
      return args;
    });
  },
  baseUrl: ''
};
// module.exports = {
//   baseUrl: ''
// };
