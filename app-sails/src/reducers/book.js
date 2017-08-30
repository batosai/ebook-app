import { book } from '../actions';

const initialState = { /* {id, img, title, collection_id, author, editor, formats, number_pages, number_volumes, year, read, keyword, description} */ };

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case book.fetch.types.SUCCESS:
      return payload.body;
    default:
      return state;
  }
}

export default reducers;
