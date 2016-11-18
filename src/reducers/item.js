import { ITEM_SUCCESS } from '../actions/items';
import { createReducer } from '../helpers';

const initialState = {
  id: '',
  name: '',
  image: '',
  pageNumber: 0,
  type: '',
  read: false,
  collection: ''
};

const reducers = {

  [ITEM_SUCCESS]: (prevState, payload) =>
    payload.item,

}

export default createReducer(initialState, reducers);
