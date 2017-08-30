import { collection } from '../actions';

const initialState = {
  all: [ /* {id, img, title, author} */ ],
  items: [ /* {id, img, title, author} */ ],
};

const reducers = (state=initialState, {type, payload}) => {
  switch (type) {
    case collection.fetchAll.types.SUCCESS:

      return Object.assign({}, state, {
        all: payload.body,
        items: payload.body,
      });
    // TODO -> convert
    case collection.fetchAll.types.COLLECTIONS_FILTER:
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
