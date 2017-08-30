import { aside } from '../actions';

const initialState = {
  open: false,
};

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case aside.types.REQUEST:
      return Object.assign({}, state, {open: !state.open});
    default:
      return state;
  }
}

export default reducers;
