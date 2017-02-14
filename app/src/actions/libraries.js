import { createAction } from '../helpers';
import { LIBRARIES_REQUEST } from '../types';

const librariesRequest = createAction(LIBRARIES_REQUEST, () => null, {emit:true});
// const librariesSuccess = createAction(LIBRARIES_SUCCESS, (libraries) => ({ libraries }));
// const librariesFailure = createAction(LIBRARIES_FAILURE, (error) => ({ error }));
export const findLibraries = () => dispatch => {
  dispatch(librariesRequest());
};
