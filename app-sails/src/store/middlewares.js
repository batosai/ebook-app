import { library } from '../actions';

export function socketIoMiddleware(socket, channelName = 'action') {
  return store => {
    //socket.on(channelName, store.dispatch);

    // socket.on('book', store.dispatch);
    // socket.on('collection', store.dispatch);
    // socket.on('library', store.dispatch);

    socket.on('library', () => {
      console.log('request');
      // TODO : pb library socket semble marché que pour le create. Trouver le socket 'all'
      // TODO : trouver un autre nom pour request in utils
      library.fetchAll.request(store.dispatch);

      // store.dispatch(popin.actions.request({ type: 'error_alert', open: true }));
    });

    return next => action => {
      // if (action.emit) {
      //   socket.request(action, (body, response) => {
      //     console.log(response);
      //   });
      // }
      return next(action);
    };
  };
}

// refaire les actions & type avec helpers utils
// mettre les appels get,put,post,delete dans les dispatch
// ne laisser que le `on` en middlewares
// rename en fetchAll etc
