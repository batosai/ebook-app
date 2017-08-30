
// export function socketIoMiddleware(socket, channelName = "action") { return store => {
//   socket.on(channelName, store.dispatch);
//
//   return next => action => {
//     if (action.emit) {
//       socket.emit(channelName, action);
//     }
//     return next(action);
//   }
// }};


export function socketIoMiddleware(socket, channelName = "action") { return store => {
  //socket.on(channelName, store.dispatch);

  socket.on('book', store.dispatch);
  socket.on('collection', store.dispatch);
  socket.on('library', store.dispatch);

  return next => action => {
    // if (action.emit) {
    //   socket.request(action, (body, response) => {
    //     console.log(response);
    //   });
    // }
    return next(action);
  }
}};

// refaire les actions & type avec helpers utils
// mettre les appels get,put,post,delete dans les dispatch
// ne laisser que le `on` en middlewares
// rename en fetchAll etc
