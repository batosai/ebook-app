import { createAction } from '../helpers';
import { catchBook, modifyBook, removeBook } from '../data/socket';
import { BOOKS_REQUEST, BOOKS_FAILURE } from '../types';

const booksRequest = createAction(BOOKS_REQUEST, (id) => ({ id }), {emit:true});
// const booksSuccess = createAction(BOOKS_SUCCESS, (books) => ({ books }));
const booksFailure = createAction(BOOKS_FAILURE, (error) => ({ error }));
export const findBooksByCollection = slug => dispatch => {
  dispatch(booksRequest(slug));
  // dispatch(booksSuccess());
  dispatch(booksFailure());
  //TODO nétoyer le code.
  //TODO créer fichier commun client server (type + payload) voir https://github.com/czytelny/redux-socket.io-middleware
  //TODO corriger les erreurs et warnings
  // rename getBook by findBokkByCollection

  // catchBooksByCollection(slug)
  // .then(books => dispatch(booksSuccess(books)))
  // .then(() => dispatch(booksComplete()))
  // .catch(error => dispatch(booksFailure(error)));
};

export const BOOK_REQUEST = 'book:request';
export const BOOK_SUCCESS = 'book:success';
export const BOOK_FAILURE = 'book:failure';

const bookRequest = createAction(BOOK_REQUEST, (id) => ({ id }));
const bookSuccess = createAction(BOOK_SUCCESS, (book) => ({ book }));
const bookFailure = createAction(BOOK_FAILURE, (error) => ({ error }));
export const getBook = text => dispatch => {
  dispatch(bookRequest(text));
  catchBook(text)
  .then(book => dispatch(bookSuccess(book)))
  .catch(error => dispatch(bookFailure(error)));
};

export const BOOK_UPDATE  = 'book:update';
export const BOOK_UPDATE_FAILURE = 'list:update:failure';

const bookUpdateSuccess = createAction(BOOK_UPDATE, (book) => ({ book }));
const bookUpdateFailure = createAction(BOOK_UPDATE_FAILURE, (error) => ({ error }));

export const updateBook = (book, success) => dispatch => {
  modifyBook(book)
  .then((book) => {
    dispatch(bookUpdateSuccess(book));
    success();
  })
  .catch(error => dispatch(bookUpdateFailure(error)));
};

// export const BOOK_DELETE  = 'book:delete';
// export const BOOK_DELETE_FAILURE = 'list:delete:failure';

// const bookDeleteSuccess = createAction(BOOK_DELETE, (id) => ({ id }));
// const bookDeleteFailure = createAction(BOOK_DELETE_FAILURE, (error) => ({ error }));

export const deleteBook = book => dispatch => {
  removeBook(book.id);
  // .catch(error => dispatch(bookDeleteFailure(error)));
  // catchBooksByCollection(book.collection_id)
  // .then(books => dispatch(booksSuccess(books)))
  // .catch(error => dispatch(booksFailure(error)));

};
