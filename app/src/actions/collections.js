import { createAction } from '../helpers';
import { COLLECTIONS_REQUEST, COLLECTIONS_FILTER } from '../types';

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
