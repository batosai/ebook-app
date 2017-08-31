import * as types from '../types';

const initialState = [
  /* {id, title, img, collection} */
];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.BOOKS_SUCCESS:
      return payload.body;
    default:
      return state;
  }
};

export default reducers;
