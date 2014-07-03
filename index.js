var connect = require('connect');
var createMiniHarp = function() {
  var app = connect();
  app.use(function(req, res, next) {
    var url = req.url.split('/');
    if (url[1] == 'current-time') {
      res.end(new Date().toISOString() + '\n');
    } else {
      next();
    }
  });
  return app;
};

module.exports = createMiniHarp;
