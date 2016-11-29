import { COLLECTIONS_SUCCESS } from '../actions/collections';

import { createReducer } from '../helpers';

const initialState = [
/*{
  id: 1,
  name: 'Spiderman',
  slug: 'spiderman',
  href: '/list/spiderman'
}*/
];

const reducers = {

  [COLLECTIONS_SUCCESS]: (prevState, payload) =>
    payload.collections,

}

export default createReducer(initialState, reducers);
