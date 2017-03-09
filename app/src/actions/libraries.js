import * as types from '../types';

export const librariesRequestAction = () => ({
  type: types.LIBRARIES_REQUEST,
  emit:true
});

export const libraryAddRequestAction = name => ({
  type: types.LIBRARY_ADD_REQUEST,
  emit:true,
  payload: { name }
});

export const libraryEditRequestAction = library => ({
  type: types.LIBRARY_EDIT_REQUEST,
  emit:true,
  payload: library
});

export const libraryDeleteRequestAction = id => ({
  type: types.LIBRARY_DELETE_REQUEST,
  emit:true,
  payload: { id }
});
