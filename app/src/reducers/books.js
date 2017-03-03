import * as types from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, title, img, collection_id} */ ];

const reducers = {

  [types.BOOKS_SUCCESS]: (prevState, payload) =>
    payload.books,

}

export default createReducer(initialState, reducers);
