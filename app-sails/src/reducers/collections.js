import { collection } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from './';

const initialState = [
  /* {id, img, title, library} */
];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case collection.fetchAll.types.SUCCESS:
      return Object.assign([], state, payload);
    case collection.create.types.SUCCESS:
      return stateReducerCreate(state, payload);
    case collection.update.types.SUCCESS:
      return stateReducerUpdate(state, payload);
    case collection.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
