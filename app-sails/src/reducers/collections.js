import { collection } from '../actions';
import { stateReducerCreate, stateReducerUpdate, stateReducerRemove } from './';

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

    case collection.create.types.SUCCESS:
      return Object.assign({}, state, {
        all: stateReducerCreate(state.all, payload),
        items: stateReducerCreate(state.items, payload),
      });
    case collection.update.types.SUCCESS:
      return Object.assign({}, state, {
        all: stateReducerUpdate(state.all, payload),
        items: stateReducerUpdate(state.items, payload),
      });
    case collection.remove.types.SUCCESS:
      return Object.assign({}, state, {
        all: stateReducerRemove(state.all, payload),
        items: stateReducerRemove(state.items, payload),
      });

    default:
      return state;
  }
};

export default reducers;
