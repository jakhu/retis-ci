// Generated by CoffeeScript 1.10.0
(function() {
  var ENV, Logger, app, debug_module;

  debug_module = require('debug');

  require('colours');

  app = module.exports = {};

  ENV = process.env;


  /*
   * Logger Class
   *
   * @class Logger
   * @param prefix {String} prefix
   */

  Logger = (function() {
    function Logger(prefix) {
      this.prefix = prefix;
      this.debug = debug_module(prefix);
    }


    /*
     * Info method
     *
     * @colour green
     * @param txt {String} Text to output
     */

    Logger.prototype.info = function(txt) {
      if (ENV.DEBUG.indexOf(this.prefix)) {
        return this.debug(txt);
      } else {
        return console.log(txt);
      }
    };

    return Logger;

  })();

}).call(this);