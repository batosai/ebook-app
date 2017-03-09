
export function socketIoMiddleware(socket, channelName = "action") { return store => {
  socket.on(channelName, store.dispatch);

  return next => action => {
    if (action.emit) {
      socket.emit(channelName, action);
    }
    return next(action);
  }
}};
