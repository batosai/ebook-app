export function createReducer (initialState, reducers) {
  return (state = initialState, { type, payload }) => {
    const reducer = reducers[type];
    return reducer ? reducer(state, payload) : state;
  };
};

export function socketIoMiddleware(socket, channelName = "action") { return store => {
  socket.on(channelName, store.dispatch);

  return next => action => {
    if (action.emit) {
      socket.emit(channelName, action);
    }
    return next(action);
  }
}};
