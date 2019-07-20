const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', {
    target: 'http://temp.dash.zeta.in/food.php', pathRewrite: {
      '^/api': '',
    },
  }));
};