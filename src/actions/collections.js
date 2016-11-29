import { createAction } from '../helpers';
import { getCollections } from '../api';

export const COLLECTIONS_REQUEST = 'collections:request';
export const COLLECTIONS_SUCCESS = 'collections:success';
export const COLLECTIONS_FAILURE = 'collections:failure';

const collectionsRequest = createAction(COLLECTIONS_REQUEST, () => null);
const collectionsSuccess = createAction(COLLECTIONS_SUCCESS, (collections) => ({ collections }));
const collectionsFailure = createAction(COLLECTIONS_FAILURE, (error) => ({ error }));
export const getCategories = slug => dispatch => {
  dispatch(collectionsRequest(slug));
  getCollections(slug)
  .then(items => dispatch(collectionsSuccess(items)))
  .catch(error => dispatch(collectionsFailure(error)));
};
