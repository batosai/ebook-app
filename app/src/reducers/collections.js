import { COLLECTIONS_SUCCESS } from '../actions/collections';

import { createReducer } from '../helpers';

const initialState = [ /* {id, img, title, author} */ ];

const reducers = {

  [COLLECTIONS_SUCCESS]: (prevState, payload) =>
    payload.collections,

}

export default createReducer(initialState, reducers);
