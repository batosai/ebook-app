import { createAction } from '../helpers';
import { BOOKS_REQUEST } from '../types';

const booksRequest = createAction(BOOKS_REQUEST, (id) => ({ id }), {emit:true});
export const findBooksByCollectionId = slug => dispatch => {
  dispatch(booksRequest(slug));
};
