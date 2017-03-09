import * as types from '../types';

const initialState = [ /* {id, title, img, collection_id} */ ];

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.BOOKS_SUCCESS:
      return payload.books;
    default:
      return state;
  }
}

export default reducers;
