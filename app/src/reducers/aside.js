import * as types from '../types';

import { createReducer } from '../helpers';

const initialState = {
  open: false,
};

const reducers = {

  [types.ASIDE_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {open: !prevState.open}),

}

export default createReducer(initialState, reducers);
