import * as types from '../types';

const initialState = {
  all: [ /* {id, img, title, author} */ ],
  items: [ /* {id, img, title, author} */ ],
};

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case types.COLLECTIONS_SUCCESS:

      return Object.assign({}, state, {
        all: payload.collections,
        items: payload.collections,
      });
    case types.COLLECTIONS_FILTER:
      if(payload === undefined) {
        return Object.assign({}, state, {
          items: state.all
        });
      }
// TODO : optimise sample http://redux.js.org/docs/basics/ExampleTodoList.html
// stock library_id et fait le filtre directement dans le container.
      const items = state.all.filter(collection => collection.library_id === payload);

      return Object.assign({}, state, {
        items
      });
    default:
      return state;
  }
}

export default reducers;
