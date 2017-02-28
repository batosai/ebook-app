import * as types from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name} */ ];

const reducers = {

  [types.LIBRARIES_SUCCESS]: (prevState, payload) =>
    payload.libraries,

}

export default createReducer(initialState, reducers);
