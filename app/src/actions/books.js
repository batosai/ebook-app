import { createAction } from '../helpers';
import { BOOKS_REQUEST, BOOK_REQUEST, BOOK_DELETE_REQUEST } from '../types';

const booksRequest = createAction(BOOKS_REQUEST, (id) => ({ id }), {emit:true});
export const findBooksByCollectionId = slug => dispatch => {
  dispatch(booksRequest(slug));
};

const bookRequest = createAction(BOOK_REQUEST, (id) => ({ id }), {emit:true});
export const findBookById = id => dispatch => {
  dispatch(bookRequest(id));
};

const bookDeleteRequest = createAction(BOOK_DELETE_REQUEST, (id) => ({ id }), {emit:true});
export const deleteBook = book => dispatch => {
  dispatch(bookDeleteRequest(book.id));
};
