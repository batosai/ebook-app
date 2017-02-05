import { LIBRARIES_SUCCESS } from '../actions/libraries';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name} */ ];

const reducers = {

  [LIBRARIES_SUCCESS]: (prevState, payload) =>
    payload.libraries,

}

export default createReducer(initialState, reducers);
