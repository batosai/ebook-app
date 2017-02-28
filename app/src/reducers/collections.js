import * as types from '../types';

import { createReducer } from '../helpers';

const initialState = {
  all: [ /* {id, img, title, author} */ ],
  items: [ /* {id, img, title, author} */ ],
};

const reducers = {

  [types.COLLECTIONS_SUCCESS]: (prevState, payload) => Object.assign({}, prevState, {
    all: payload.collections,
    items: payload.collections,
  }),

  [types.COLLECTIONS_FILTER]: (prevState, id) => {
    if(id === undefined) {
      return Object.assign({}, prevState, {
        items: prevState.all
      });
    }

    const items = prevState.all.filter(collection => collection.library_id === id);

    return Object.assign({}, prevState, {
      items
    });
  },

}

export default createReducer(initialState, reducers);
