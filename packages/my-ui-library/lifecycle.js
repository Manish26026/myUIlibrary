export default function createLifecycleComponent(initialState, renderFunction) {
  let state = initialState;
  const observers = [];

  function onMount() {
    console.log('Component mounted');
  }

  function setState(newState) {
    state = { ...state, ...newState };
    observers.forEach((observer) => observer());
  }

  function render() {
    const renderedView = renderFunction(state);
    onMount();
    return renderedView;
  }

  return {
    render,
    setState,
    observe(observer) {
      observers.push(observer);
    },
  };
}
