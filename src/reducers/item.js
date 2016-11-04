import { ITEM_SUCCESS } from '../actions/list';
import { createReducer } from '../helpers';

const initialState = {};

const reducers = {

  [ITEM_SUCCESS]: (prevState, payload) =>
    payload.item,

}


export default createReducer(initialState, reducers);
