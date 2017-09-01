import aside from './aside';
import libraries from './libraries';
import collections from './collections';
import book from './book';
import books from './books';

export { aside, libraries, collections, book, books };

export const stateReducerCreate = (state = [], payload) => {
  const index = state.findIndex(item => item.id === payload.id);
  if (index !== -1) {
    return state;
  }
  return [...state, payload];
};

export const stateReducerUpdate = (state = [], payload) => {
  const items = [...state];
  const index = items.findIndex(item => item.id === payload.id);
  if (index === -1) {
    return state;
  }
  items.splice(index, 1);
  items.splice(index, 0, payload);
  return items;
};

export const stateReducerRemove = (state = [], payload) => {
  const items = [...state];
  const index = items.findIndex(item => item.id === payload);
  if (index === -1) {
    return state;
  }
  items.splice(index, 1);
  return items;
};
