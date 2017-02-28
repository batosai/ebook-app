import * as types from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name, image, pageNumber, type, read, collection} */ ];

const reducers = {

  [types.BOOKS_SUCCESS]: (prevState, payload) =>
    payload.books,

}

export default createReducer(initialState, reducers);
