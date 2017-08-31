import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('BOOK:UPDATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'PUT',
    url: `/books/${data.id}`,
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};

//
// import * as types from '../types';
//
// export const bookRequestAction = id => ({
//   type: types.BOOK_REQUEST,
//   emit:true,
//   method:'GET',
//   url: '/books',
//   data: { id }
// });
//
// export const bookEditRequestAction = book => ({
//   type: types.BOOK_EDIT_REQUEST,
//   emit:true,
//   method:'PUT',
//   url: '/books',
//   data: book
// });
//
// export const bookDeleteRequestAction = id => ({
//   type: types.BOOK_DELETE_REQUEST,
//   emit:true,
//   method:'DELETE',
//   url: '/books',
//   data: { id }
// });
