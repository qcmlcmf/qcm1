// Generated by CoffeeScript 1.7.1
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports.extendOnClass = function(proto) {
    var key, klass, value;
    klass = (function(_super) {
      __extends(_Class, _super);

      function _Class() {
        if (proto != null ? proto.hasOwnProperty('constructor') : void 0) {
          proto.constructor.apply(this, arguments);
        } else {
          _Class.__super__.constructor.apply(this, arguments);
        }
      }

      return _Class;

    })(this);
    if (proto != null) {
      for (key in proto) {
        if (!__hasProp.call(proto, key)) continue;
        value = proto[key];
        klass.prototype[key] = value;
      }
    }
    return klass;
  };

}).call(this);
