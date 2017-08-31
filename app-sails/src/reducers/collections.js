import { collection } from '../actions';

const initialState = {
  all: [
    /* {id, img, title, library} */
  ],
  items: [
    /* {id, img, title, library} */
  ],
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case collection.fetchAll.types.SUCCESS:
      return Object.assign({}, state, {
        all: payload,
        items: payload,
      });
    // TODO -> convert
    case collection.fetchAll.types.COLLECTIONS_FILTER:
      if (payload === undefined) {
        return Object.assign({}, state, {
          items: state.all,
        });
      }
      // TODO : optimise sample http://redux.js.org/docs/basics/ExampleTodoList.html
      // stock library_id et fait le filtre directement dans le container.
      const items = state.all.filter(
        collection => collection.library_id === payload,
      );

      return Object.assign({}, state, {
        items,
      });
    default:
      return state;
  }
};

export default reducers;
