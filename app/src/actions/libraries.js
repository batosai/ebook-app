import { createAction } from '../helpers';
import * as types from '../types';

const librariesRequest = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});
// const librariesSuccess = createAction(LIBRARIES_SUCCESS, (libraries) => ({ libraries }));
// const librariesFailure = createAction(LIBRARIES_FAILURE, (error) => ({ error }));
export const findLibraries = () => dispatch => {
  dispatch(librariesRequest());
};

const libraryAddRequest = createAction(types.LIBRARY_ADD_REQUEST, (name) => ({name}), {emit:true});
export const createLibrary = name => dispatch => {
  dispatch(libraryAddRequest(name));
};

const libraryEditRequest = createAction(types.LIBRARY_EDIT_REQUEST, (data) => ({...data}), {emit:true});
export const editLibrary = data => dispatch => {
  dispatch(libraryEditRequest(data));
};

const libraryDeleteRequest = createAction(types.LIBRARY_DELETE_REQUEST, (id) => ({id}), {emit:true});
export const deleteLibrary = id => dispatch => {
  dispatch(libraryDeleteRequest(id));
};
