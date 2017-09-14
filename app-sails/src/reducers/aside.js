import { aside } from '../actions';

const initialState = {
  open: false,
  library: null,
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case aside.types.REQUEST:
      return Object.assign({}, state, { open: !state.open });

    case aside.library.types.REQUEST:
      return Object.assign({}, state, { library: payload });
    default:
      return state;
  }
};

export default reducers;
