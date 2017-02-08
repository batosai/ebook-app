import { createAction } from '../helpers';
import { catchLibraries } from '../data/socket';

export const LIBRARIES_REQUEST = 'libraries:request';
export const LIBRARIES_SUCCESS = 'libraries:success';
export const LIBRARIES_FAILURE = 'libraries:failure';

const librariesRequest = createAction(LIBRARIES_REQUEST, () => null);
const librariesSuccess = createAction(LIBRARIES_SUCCESS, (libraries) => ({ libraries }));
const librariesFailure = createAction(LIBRARIES_FAILURE, (error) => ({ error }));
export const getLibraries = () => dispatch => {
  dispatch(librariesRequest());
  catchLibraries()
  .then(libraries => dispatch(librariesSuccess(libraries)))
  .catch(error => dispatch(librariesFailure(error)));
};
