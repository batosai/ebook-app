import { ITEM_SUCCESS } from '../actions/items';
import { createReducer } from '../helpers';

const initialState = {};

const reducers = {

  [ITEM_SUCCESS]: (prevState, payload) =>
    payload.item,

}

export default createReducer(initialState, reducers);
