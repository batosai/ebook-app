import { createAction } from '../helpers';
import { collections } from '../data/socket';

export const COLLECTIONS_REQUEST = 'collections:request';
export const COLLECTIONS_SUCCESS = 'collections:success';
export const COLLECTIONS_FAILURE = 'collections:failure';
export const COLLECTIONS_FILTER  = 'collections:filter';

const collectionsRequest = createAction(COLLECTIONS_REQUEST, () => null);
const collectionsSuccess = createAction(COLLECTIONS_SUCCESS, (collections) => ({ collections }));
const collectionsFailure = createAction(COLLECTIONS_FAILURE, (error) => ({ error }));
export const getCollections = () => dispatch => {
  dispatch(collectionsRequest());
  collections()
  .then(collections => dispatch(collectionsSuccess(collections)))
  .catch(error => dispatch(collectionsFailure(error)));
};

const collectionByLibrary = createAction(COLLECTIONS_FILTER, (id) => (id));
export const getCollectionByLibrary = id => dispatch => {
  dispatch(collectionByLibrary(id));
};
