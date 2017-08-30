import { createTypes, createActions, request } from '../../utils';

export const types = createTypes("LIBRARY:UPDATE")
export const actions = createActions(types)

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({ method:'POST', url: '/libraries', data })
    .then(({body, response}) => dispatch(actions.success(body)));
}

// import * as types from '../types';
//
// export const librariesRequestAction = () => ({
//   type: types.LIBRARIES_REQUEST,
//   emit:true,
//   method:'GET',
//   url: '/libraries',
// });
//
// export const libraryAddRequestAction = name => ({
//   type: types.LIBRARY_ADD_REQUEST,
//   emit:true,
//   method:'POST',
//   url: '/libraries',
//   data: { name }
// });
//
// export const libraryEditRequestAction = library => ({
//   type: types.LIBRARY_EDIT_REQUEST,
//   emit:true,
//   method:'PUT',
//   url: '/libraries',
//   data: library
// });
//
// export const libraryDeleteRequestAction = id => ({
//   type: types.LIBRARY_DELETE_REQUEST,
//   emit:true,
//   method:'DELETE',
//   url: '/libraries',
//   data: { id }
// });
