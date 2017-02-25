import { createAction } from '../helpers';
import { BOOK_REQUEST, BOOK_DELETE_REQUEST, BOOK_EDIT_REQUEST } from '../types';

const bookRequest = createAction(BOOK_REQUEST, (id) => ({ id }), {emit:true});
export const findBookById = id => dispatch => {
  dispatch(bookRequest(id));
};

const bookDeleteRequest = createAction(BOOK_DELETE_REQUEST, (id) => ({ id }), {emit:true});
export const deleteBook = book => dispatch => {
  dispatch(bookDeleteRequest(book.id));
};

const bookEditRequest = createAction(BOOK_EDIT_REQUEST, (book) => ({book}), {emit:true});
export const editBook = book => dispatch => {
  dispatch(bookEditRequest(book));
};
