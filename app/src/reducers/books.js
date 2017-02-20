import { BOOKS_SUCCESS, BOOK_SUCCESS } from '../types';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name, image, pageNumber, type, read, collection} */ ];

// findBootByid
/* id, img, title, collection_id, author, editor, formats, number_pages, number_volumes, year, read, keyword, description */

const reducers = {

  [BOOKS_SUCCESS]: (prevState, payload) =>
    payload.books,

  [BOOK_SUCCESS]: (prevState, payload) =>
    payload.books,

}

export default createReducer(initialState, reducers);
