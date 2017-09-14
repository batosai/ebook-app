import { book } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from './';

const initialState = [
  /*
  {
    title,
    description,
    author,
    editor,
    extension,
    type,
    filename,
    size,
    numberPages,
    numberVolumes,
    year,
    read,
    keyword,
    collection
  }
  */
];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case book.fetch.types.SUCCESS:
      return payload;

    case book.create.types.SUCCESS:
      return stateReducerCreate(state, payload);
    case book.update.types.SUCCESS:
      return stateReducerUpdate(state, payload);
    case book.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
