import * as types from '../types';

export const booksRequestAction = id => ({
  type: types.BOOKS_REQUEST,
  emit:true,
  payload: { id }
});
