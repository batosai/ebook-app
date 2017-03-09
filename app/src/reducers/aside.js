import * as types from '../types';

const initialState = {
  open: false,
};

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.ASIDE_TOGGLE:
      return Object.assign({}, state, {open: !state.open});
    default:
      return state;
  }
}

export default reducers;
