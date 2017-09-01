import { library } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from './';

const initialState = [
  /* {id, name} */
];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case library.fetchAll.types.SUCCESS:
      return payload;

    case library.create.types.SUCCESS:
      return stateReducerCreate(state, payload);
    case library.update.types.SUCCESS:
      return stateReducerUpdate(state, payload);
    case library.remove.types.SUCCESS:
      return stateReducerRemove(state, payload);

    default:
      return state;
  }
};

export default reducers;
