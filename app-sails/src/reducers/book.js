import { book } from '../actions';

const initialState = {
  /* {id, img, title, collection, author, editor, formats, numberPages, numberVolumes, year, read, keyword, description} */
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case book.fetch.types.SUCCESS:
      return payload.body;
    default:
      return state;
  }
};

export default reducers;
