import { createAction } from '../helpers';
import * as types from '../types';

export const bookRequest = createAction(types.BOOK_REQUEST, (id) => ({ id }), {emit:true});
export const findBookById = id => dispatch => {
  dispatch(bookRequest(id));
};

export const bookDeleteRequest = createAction(types.BOOK_DELETE_REQUEST, (id) => ({ id }), {emit:true});
export const deleteBook = book => dispatch => {
  dispatch(bookDeleteRequest(book.id));
};

export const bookEditRequest = createAction(types.BOOK_EDIT_REQUEST, (book) => ({book}), {emit:true});
export const editBook = book => dispatch => {
  dispatch(bookEditRequest(book));
};
