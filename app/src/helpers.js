export function createAction (type, payloadCreator) {
  return (...args) => ({
    type,
    payload: payloadCreator(...args)
  })
};

export function createReducer (initialState, reducers) {
  return (state = initialState, { type, payload }) => {
    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
  };
};
