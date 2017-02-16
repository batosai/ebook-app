import { createAction } from '../helpers';
import { COLLECTIONS_REQUEST, COLLECTIONS_FILTER, COLLECTION_ADD_REQUEST, COLLECTION_EDIT_REQUEST, COLLECTION_DELETE_REQUEST } from '../types';

const collectionsRequest = createAction(COLLECTIONS_REQUEST, () => null, {emit:true});
// const collectionsSuccess = createAction(COLLECTIONS_SUCCESS, (collections) => ({ collections }));
// const collectionsFailure = createAction(COLLECTIONS_FAILURE, (error) => ({ error }));
export const findCollections = () => dispatch => {
  dispatch(collectionsRequest());
};

const collectionByLibrary = createAction(COLLECTIONS_FILTER, (id) => (id));
export const findCollectionByLibrary = id => dispatch => {
  dispatch(collectionByLibrary(id));
};

const collectionAddRequest = createAction(COLLECTION_ADD_REQUEST, (data) => ({...data}), {emit:true});
export const createCollection = data => dispatch => {
  dispatch(collectionAddRequest(data));
};

const collectionEditRequest = createAction(COLLECTION_EDIT_REQUEST, (data) => ({...data}), {emit:true});
export const editCollection = data => dispatch => {
  dispatch(collectionEditRequest(data));
};

const collectionDeleteRequest = createAction(COLLECTION_DELETE_REQUEST, (id) => ({id}), {emit:true});
export const deleteCollection = id => dispatch => {
  dispatch(collectionDeleteRequest(id));
};
