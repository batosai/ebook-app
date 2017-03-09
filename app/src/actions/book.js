import * as types from '../types';

export const bookRequestAction = id => ({
  type: types.BOOK_REQUEST,
  emit:true,
  payload: { id }
});

export const bookDeleteRequestAction = id => ({
  type: types.BOOK_DELETE_REQUEST,
  emit:true,
  payload: { id }
});

export const bookEditRequestAction = book => ({
  type: types.BOOK_EDIT_REQUEST,
  emit:true,
  payload: { book }
});
