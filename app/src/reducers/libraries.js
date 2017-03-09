import * as types from '../types';

const initialState = [ /* {id, name} */ ];

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.LIBRARIES_SUCCESS:
      return payload.libraries;
    default:
      return state;
  }
}

export default reducers;
