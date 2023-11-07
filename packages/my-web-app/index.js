import { createReactiveComponent } from '../my-ui-library/reactivity.js';
const initialState = { count: 0 };

function renderApp(state) {
  const container = document.getElementById('app');
  const element = document.createElement('div');
  element.setAttribute('role', 'status');
  element.setAttribute('aria-live', 'polite');
  element.innerHTML = `Count: ${state.count}`;

  const button = document.createElement('button');
  button.textContent = 'Increment';
  button.setAttribute('aria-label', 'increment count');
  button.addEventListener('click', () => {
    const newState = { count: state.count + 1 };
    reactiveComponent.setState(newState);
  });

  container.appendChild(element);
  container.appendChild(button);
}

const reactiveComponent = createReactiveComponent(initialState, renderApp);

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('app');

  const renderedElement = reactiveComponent.render();

  if (renderedElement instanceof Node) {
    container.appendChild(renderedElement);
  } else {
    console.error('renderedElement is not a valid DOM element');
  }
  
  reactiveComponent.observe(() => {
    renderApp(reactiveComponent.state);
  });
});
