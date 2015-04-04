"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var test = _interopRequire(require("prova"));

var VNode = _interopRequire(require("virtual-dom/vnode/vnode"));

var VText = _interopRequire(require("virtual-dom/vnode/vtext"));

var h = _interopRequire(require("virtual-dom/h"));

var isVdom = _interopRequire(require("./"));




test("fd-isVdom", function (t) {
  t.plan(9);

  var div = document.createElement("div");

  t.equals(typeof isVdom(), "function");
  t.notOk(isVdom()(null));
  t.notOk(isVdom()({}));
  t.notOk(isVdom()(""));
  t.notOk(isVdom()(div));
  t.notOk(isVdom()(document));
  t.ok(isVdom()(new VText("Hello Vdom")));
  t.ok(isVdom()(new VNode("div", {
    className: "greeting"
  }, [new VText("Hello Vdom")])));
  t.ok(isVdom(h(".greeting", ["Hello Vdom"])));
});