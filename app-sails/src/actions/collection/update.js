import { createTypes, createActions, request } from '../../utils';

export const types = createTypes("COLLECTION:UPDATE")
export const actions = createActions(types)

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({ method:'POST', url: '/collections', data })
    .then(({body, response}) => dispatch(actions.success(body)));
}
//
// import * as types from '../types';
//
// export const collectionsRequestAction = () => ({
//   type: types.COLLECTIONS_REQUEST,
//   emit:true,
//   method:'GET',
//   url: '/collections',
// });
//
// export const collectionByLibraryAction = id => ({
//   type: types.COLLECTIONS_FILTER,
//   data: id
// });
//
// export const collectionAddRequestAction = collection => ({
//   type: types.COLLECTION_ADD_REQUEST,
//   emit:true,
//   method:'POST',
//   url: '/collections',
//   data: collection
// });
//
// export const collectionEditRequestAction = collection => ({
//   type: types.COLLECTION_EDIT_REQUEST,
//   emit:true,
//   method:'PUT',
//   url: '/collections',
//   data: collection
// });
//
// export const collectionDeleteRequestAction = id => ({
//   type: types.COLLECTION_DELETE_REQUEST,
//   emit:true,
//   method:'DELETE',
//   url: '/collections',
//   data: { id }
// });
