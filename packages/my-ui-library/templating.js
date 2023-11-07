import { h, init } from 'snabbdom';

const patch = init([]);

function createTemplate(template) {
  const container = document.createElement('div');
  const vnode = template(h);
  patch(container, vnode);
  return vnode;
}

export { createTemplate };
