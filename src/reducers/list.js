import { LIST_TYPE, LIST_SWITCH_TYPE } from '../actions/list';

import { createReducer } from '../helpers';

const initialState = {
  type: 'collection',
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

}

export default createReducer(initialState, reducers);
