import { ITEMS_SUCCESS } from '../actions/items';

import { createReducer } from '../helpers';

const initialState = [ /* {id, name, image, pageNumber, type, read, collection} */ ];

const reducers = {

  [ITEMS_SUCCESS]: (prevState, payload) =>
    payload.items,

}

export default createReducer(initialState, reducers);
