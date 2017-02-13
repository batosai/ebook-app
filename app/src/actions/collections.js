import { createAction } from '../helpers';
import { catchCollections } from '../data/socket';
import { COLLECTIONS_REQUEST, COLLECTIONS_SUCCESS, COLLECTIONS_FAILURE, COLLECTIONS_FILTER } from '../types';

const collectionsRequest = createAction(COLLECTIONS_REQUEST, () => null);
const collectionsSuccess = createAction(COLLECTIONS_SUCCESS, (collections) => ({ collections }));
const collectionsFailure = createAction(COLLECTIONS_FAILURE, (error) => ({ error }));
export const getCollections = () => dispatch => {
  dispatch(collectionsRequest());
  catchCollections()
  .then(collections => dispatch(collectionsSuccess(collections)))
  .catch(error => dispatch(collectionsFailure(error)));
};

const collectionByLibrary = createAction(COLLECTIONS_FILTER, (id) => (id));
export const getCollectionByLibrary = id => dispatch => {
  dispatch(collectionByLibrary(id));
};
