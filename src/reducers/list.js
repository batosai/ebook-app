import { LIST_TYPE, LIST_SWITCH_TYPE, LIST_UPDATE, LIST_SWITCH_UPDATE } from '../actions/list';

import { createReducer } from '../helpers';

const initialState = {
  type: 'collection',
  update: false,
};

const reducers = {

  [LIST_TYPE]: (prevState, payload) =>
    prevState.type,

  [LIST_SWITCH_TYPE]: (prevState, payload) => {
    if(prevState.type === 'collection') {
      return Object.assign({}, prevState, { type: 'list' });
    }
    else {
      return Object.assign({}, prevState, { type: 'collection' });
    }
  },

  [LIST_UPDATE]: (prevState, payload) =>
    prevState.update,

  [LIST_SWITCH_UPDATE]: (prevState, payload) =>
    Object.assign({}, prevState, { update: !prevState.update }),

}

export default createReducer(initialState, reducers);
