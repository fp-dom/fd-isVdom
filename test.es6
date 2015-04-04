import test from 'prova';
import VNode from 'virtual-dom/vnode/vnode';
import VText from 'virtual-dom/vnode/vtext';
import h from 'virtual-dom/h';
import isVdom from './';


test('fd-isVdom', (t) => {
  t.plan(9);
 
  let div = document.createElement('div');

  t.equals(typeof isVdom(), 'function');
  t.notOk(isVdom()(null));
  t.notOk(isVdom()({}));
  t.notOk(isVdom()(''));
  t.notOk(isVdom()(div));
  t.notOk(isVdom()(document));
  t.ok(isVdom()(new VText('Hello Vdom')));
  t.ok(isVdom()(new VNode('div', {
      className: 'greeting'
    }, [
      new VText('Hello Vdom')
    ])));
  t.ok(isVdom(h('.greeting', ['Hello Vdom'])));
});
