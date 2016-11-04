import { LINK_TOGGLE, LINK_OPEN, LINK_CLOSE, LINK_TO, LINK_CLEAR } from '../actions/link';

import { createReducer } from '../helpers';

const initialState = {
  open: true,
  redirection: null
}

const reducers = {

  [LINK_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, { open: !prevState.open }),
  [LINK_OPEN]: (prevState, payload) =>
    Object.assign({}, prevState, { open: true }),
  [LINK_CLOSE]: (prevState, payload) =>
    Object.assign({}, prevState, { open: false }),
  [LINK_TO]: (prevState, payload) =>
    Object.assign({}, prevState, { redirection: payload }),
  [LINK_CLEAR]: (prevState, payload) =>
    Object.assign({}, prevState, { redirection: null }),

}

export default createReducer(initialState, reducers);
