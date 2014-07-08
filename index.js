var connect = require('connect');
var serveStatic = require('serve-static');

var createMiniHarp = function(staticpath) {
  var app = connect();
  app.use(function(req, res, next) {
    var url = req.url.split('/');
    if (url[1] == 'current-time') {
      res.end(new Date().toISOString() + '\n');
    } else {
      next();
    }
  }).use(serveStatic(staticpath));
  return app;
};

module.exports = createMiniHarp;
