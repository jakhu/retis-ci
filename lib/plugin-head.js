// Generated by CoffeeScript 1.10.0

/*
 * Vars
 */
var PluginHead, ph;

ph = module.exports = {};


/*
 * Log header
 * @class
 * @param logger {Logger} Logger
 */

PluginHead = (function() {
  function PluginHead(logger) {
    this.logger = logger;
  }


  /*
   * Log it
   * @param plugin {String} Plugin name
   * @param version {String} Version
   */

  PluginHead.prototype.log = function(plugin, version, options) {
    var prefix, suffix;
    if (typeof options !== 'undefined' && options.hasOwnProperty('prefix')) {
      prefix = options.prefix;
    }
    if (typeof options === 'undefined' || !options.hasOwnProperty('prefix')) {
      prefix = " ";
    }
    if (typeof options !== 'undefined' && options.hasOwnProperty('suffix')) {
      suffix = options.suffix;
    }
    if (typeof options === 'undefined' || !options.hasOwnProperty('suffix')) {
      suffix = " ";
    }
    this.logger.info(prefix + "----------------------------- " + plugin + "@" + version + " -----------------------------" + suffix);
    if (typeof options === 'undefined' || !options.hasOwnProperty('noSpace') || !options.noSpace) {
      return this.logger.info("");
    }
  };

  return PluginHead;

})();

ph.PluginHead = PluginHead;
