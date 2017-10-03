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

const stateReducerUpdateCustom = (state = [], payload) => {
  const items = [...state];
  let item = items.find(item => item.id !== payload.id);
  // console.log('init');
  if (item) {
    const payloadCollectionId = Number.isInteger(payload.collection) ? payload.collection : payload.collection.id;
    const itemCollectionId = Number.isInteger(item.collection) ? item.collection : item.collection.id;

    if (payloadCollectionId !== itemCollectionId) {
      // console.log('remove');
      return stateReducerRemove(state, payload.id);
    }
  }

  item = items.find(item => item.id === payload.id);
  if (item) {
    // console.log('update');
    return stateReducerUpdate(state, payload);
  }
  else {
    // console.log('create');
    return stateReducerCreate(state, payload);
  }
};

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
      return stateReducerUpdateCustom(state, payload);
    case book.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
