// Generated by CoffeeScript 1.3.3
(function() {
  var moment,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  moment = require('moment');

  module.exports = function(BasePlugin) {
    var MomentPlugin;
    return MomentPlugin = (function(_super) {

      __extends(MomentPlugin, _super);

      function MomentPlugin() {
        return MomentPlugin.__super__.constructor.apply(this, arguments);
      }

      MomentPlugin.prototype.name = 'moment';

      MomentPlugin.prototype.renderBefore = function(opts) {
        var format, model, _i, _len, _ref, _results;
        _ref = opts.collection.models;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          model = _ref[_i];
          _results.push((function() {
            var _j, _len1, _ref1, _results1;
            _ref1 = this.config.formats;
            _results1 = [];
            for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
              format = _ref1[_j];
              if (model.attributes[format.raw]) {
                _results1.push(model.attributes[format.formatted] = moment(model.attributes[format.raw]).format(format.format));
              } else {
                _results1.push(void 0);
              }
            }
            return _results1;
          }).call(this));
        }
        return _results;
      };

      return MomentPlugin;

    })(BasePlugin);
  };

}).call(this);