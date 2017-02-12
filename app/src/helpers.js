export function createAction (type, payloadCreator, meta={emit:false}) {
  return (...args) => ({
    type,
    meta,
    payload: payloadCreator(...args)
  })
};

export function createReducer (initialState, reducers) {
  return (state = initialState, { type, payload }) => {
    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
  };
};

export function socketIoMiddleware(socket, channelName = "action") { return store => {
  socket.on(channelName, store.dispatch);

  return next => action => {
    if (action.meta && action.meta.emit) {
      socket.emit(channelName, action);
    }
    return next(action);
  }
}};
