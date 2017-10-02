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
      // const b = state.filter(b => b.id !== payload.id)
      // console.log(b[0].collection.id, payload.collection);
      // if(b[0].collection.id !== payload.collection.id) {
      //   return stateReducerRemove(state, payload);
      // }
      return stateReducerUpdate(state, payload);
    case book.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
