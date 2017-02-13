import { BOOKS_SUCCESS } from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name, image, pageNumber, type, read, collection} */ ];

const reducers = {

  [BOOKS_SUCCESS]: (prevState, payload) =>
    payload.books,

}

export default createReducer(initialState, reducers);
