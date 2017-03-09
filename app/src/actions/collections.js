import * as types from '../types';

export const collectionsRequestAction = () => ({
  type: types.COLLECTIONS_REQUEST,
  emit:true
});

export const collectionByLibraryAction = id => ({
  type: types.COLLECTIONS_FILTER,
  payload: id
});

export const collectionAddRequestAction = collection => ({
  type: types.COLLECTION_ADD_REQUEST,
  emit:true,
  payload: collection
});

export const collectionEditRequestAction = collection => ({
  type: types.COLLECTION_EDIT_REQUEST,
  emit:true,
  payload: collection
});

export const collectionDeleteRequestAction = id => ({
  type: types.COLLECTION_DELETE_REQUEST,
  emit:true,
  payload: { id }
});
