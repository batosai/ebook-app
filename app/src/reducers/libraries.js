import { LIBRARIES_SUCCESS } from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name} */ ];

const reducers = {

  [LIBRARIES_SUCCESS]: (prevState, payload) =>
    payload.libraries,

}

export default createReducer(initialState, reducers);
