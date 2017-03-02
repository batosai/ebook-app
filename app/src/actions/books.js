import { createAction } from '../helpers';
import * as types from '../types';

export const booksRequest = createAction(types.BOOKS_REQUEST, (id) => ({ id }), {emit:true});
export const findBooksByCollectionId = slug => dispatch => {
  dispatch(booksRequest(slug));
};
