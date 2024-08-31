export default function createCounterStore(initialState) {
  let state = initialState;

  let listners = new Set();

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;

    listners.forEach((listner) => listner());
  }

  function subscribe(listner) {
    listners.add(listner);

    return () => listners.delete(listner);
  }

  return {
    getState,
    setState,
    subscribe,
  };
}
