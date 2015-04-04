"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var curry1 = require("fj-curry").curry1;
var typeOf = _interopRequire(require("fj-typeof"));

var VNode = _interopRequire(require("virtual-dom/vnode/vnode"));

var VText = _interopRequire(require("virtual-dom/vnode/vtext"));




var isObject = typeOf("object");


var isVdom = curry1(function (dom) {
  if (!dom || !isObject(dom)) {
    return false;
  }

  if (VNode && VText) {
    return dom instanceof VNode || dom instanceof VText;
  }

  return false;
});

module.exports = isVdom;