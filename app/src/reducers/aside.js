import { ASIDE_TOGGLE, ASIDE_OPEN } from '../types';

import { createReducer } from '../helpers';

const initialState = {
  open: false,
};

const reducers = {

  [ASIDE_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {open: !prevState.open}),

  [ASIDE_OPEN]: (prevState, payload) =>
    prevState.open,

}

export default createReducer(initialState, reducers);
