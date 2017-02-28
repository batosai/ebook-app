import { createAction } from '../helpers';
import * as types from '../types';

const collectionsRequest = createAction(types.COLLECTIONS_REQUEST, () => null, {emit:true});
// const collectionsSuccess = createAction(COLLECTIONS_SUCCESS, (collections) => ({ collections }));
// const collectionsFailure = createAction(COLLECTIONS_FAILURE, (error) => ({ error }));
export const findCollections = () => dispatch => {
  dispatch(collectionsRequest());
};

const collectionByLibrary = createAction(types.COLLECTIONS_FILTER, (id) => (id));
export const findCollectionByLibrary = id => dispatch => {
  dispatch(collectionByLibrary(id));
};

const collectionAddRequest = createAction(types.COLLECTION_ADD_REQUEST, (data) => ({...data}), {emit:true});
export const createCollection = data => dispatch => {
  dispatch(collectionAddRequest(data));
};

const collectionEditRequest = createAction(types.COLLECTION_EDIT_REQUEST, (data) => ({...data}), {emit:true});
export const editCollection = data => dispatch => {
  dispatch(collectionEditRequest(data));
};

const collectionDeleteRequest = createAction(types.COLLECTION_DELETE_REQUEST, (id) => ({id}), {emit:true});
export const deleteCollection = id => dispatch => {
  dispatch(collectionDeleteRequest(id));
};
