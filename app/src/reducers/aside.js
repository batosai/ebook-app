import { ASIDE_TOGGLE } from '../types';

import { createReducer } from '../helpers';

const initialState = {
  open: false,
};

const reducers = {

  [ASIDE_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {open: !prevState.open}),

}

export default createReducer(initialState, reducers);
