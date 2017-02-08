import { BOOKS_SUCCESS } from '../actions/books';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name, image, pageNumber, type, read, collection} */ ];

const reducers = {

  [BOOKS_SUCCESS]: (prevState, payload) =>
    payload.items,

}

export default createReducer(initialState, reducers);
