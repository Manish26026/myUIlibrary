
export function createReactiveComponent(initialState, renderFunction) {
    let state = initialState;
    const observers = [];

    function setState(newState) {
        state = { ...state, ...newState };
        observers.forEach((observer) => observer());
    }

    function render() {
        const renderedView = renderFunction(state);
        return renderedView;
    }

    function observe(observer) {
        observers.push(observer);
    }

    function getState() {
        return state;
    }

    return {
        render,
        setState,
        getState,
        observe,
    };
}
