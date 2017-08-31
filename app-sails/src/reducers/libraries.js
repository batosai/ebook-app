import { library } from '../actions';

const initialState = [
  /* {id, name} */
];

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case library.fetchAll.types.SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default reducers;
