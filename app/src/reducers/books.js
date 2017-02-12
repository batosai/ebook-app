import { BOOKS_REQUEST, BOOKS_SUCCESS, BOOKS_COMPLETE, BOOKS_UPDATE } from '../actions/books';

import { createReducer } from '../helpers';

const initialState = {
  load: false,
  items: [ /* {id, name, image, pageNumber, type, read, collection} */ ]
}

const reducers = {

  // [BOOKS_REQUEST]: (prevState, payload) =>
  //   Object.assign({}, prevState, { load: true }),
  // [BOOKS_REQUEST]: (prevState, payload) => {
  //   console.log(payload);
  //   return Object.assign({}, prevState, { items: payload.books })
  // },
  [BOOKS_SUCCESS]: (prevState, payload) =>
    Object.assign({}, prevState, { items: payload.books }),
  [BOOKS_COMPLETE]: (prevState, payload) =>
    Object.assign({}, prevState, { load: false }),
  // [BOOKS_UPDATE]: (prevState, payload) => {
  //   console.log(prevState);return payload;
  // },
  ['message']: (prevState, payload) => console.log(prevState, payload)

}

export default createReducer(initialState, reducers);
