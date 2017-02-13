import { createAction } from '../helpers';
import { catchLibraries } from '../data/socket';
import { LIBRARIES_REQUEST, LIBRARIES_SUCCESS, LIBRARIES_FAILURE } from '../types';

const librariesRequest = createAction(LIBRARIES_REQUEST, () => null);
const librariesSuccess = createAction(LIBRARIES_SUCCESS, (libraries) => ({ libraries }));
const librariesFailure = createAction(LIBRARIES_FAILURE, (error) => ({ error }));
export const getLibraries = () => dispatch => {
  dispatch(librariesRequest());
  catchLibraries()
  .then(libraries => dispatch(librariesSuccess(libraries)))
  .catch(error => dispatch(librariesFailure(error)));
};
