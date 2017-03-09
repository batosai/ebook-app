import * as types from '../types';

const initialState = { /* {id, img, title, collection_id, author, editor, formats, number_pages, number_volumes, year, read, keyword, description} */ };

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.BOOK_SUCCESS:
      return payload.book;
    default:
      return state;
  }
}

export default reducers;
