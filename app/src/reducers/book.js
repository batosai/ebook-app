import { BOOK_SUCCESS, } from '../types';

import { createReducer } from '../helpers';

const initialState = { /* {id, img, title, collection_id, author, editor, formats, number_pages, number_volumes, year, read, keyword, description} */ };

const reducers = {

  [BOOK_SUCCESS]: (prevState, payload) =>
    payload.book,

}

export default createReducer(initialState, reducers);
