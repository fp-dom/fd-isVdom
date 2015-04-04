import { curry1 } from 'fj-curry';
import typeOf from 'fj-typeof';
import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';


const isObject = typeOf('object');


let isVdom = curry1(function(dom) {
  if (!dom || !isObject(dom)) {
    return false;
  }

  if (VNode && VText) {
    return dom instanceof VNode || dom instanceof VText;
  }

  return false;
});

export default isVdom;
