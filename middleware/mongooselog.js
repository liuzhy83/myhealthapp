var mongoose = require('mongoose');
var logger   = require('../common/logger').logger;
var config = require('../config');

if (config.mongodb.loglevel=='DEBUG') {
  var traceMQuery = function (method, info, query) {
    return function (err, result, millis) {
      if (err) {
        logger.error('traceMQuery error:', err);
      }
      var infos = [];
      infos.push(query._collection.collection.name + "." + method.blue);
      infos.push(JSON.stringify(info));
      infos.push((millis + 'ms').green);

      logger.debug("MONGO".magenta, infos.join(' '));
    };
  };
  mongoose.Mongoose.prototype.mquery.setGlobalTraceFunction(traceMQuery);
}
