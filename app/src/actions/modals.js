import { createAction } from '../helpers';
import { MODAL_COLLECTION_TOGGLE, MODAL_LIBRARY_TOGGLE, MODAL_DELETE_TOGGLE, MODAL_DELETE_TYPE } from '../types';

const collectionAction = createAction(MODAL_COLLECTION_TOGGLE, () => null);
export const modalCollectionToggle = text => dispatch => {
  dispatch(collectionAction(text));
};

const libraryAction = createAction(MODAL_LIBRARY_TOGGLE, () => null);
export const modalLibraryToggle = text => dispatch => {
  dispatch(libraryAction(text));
};

const deleteAction = createAction(MODAL_DELETE_TOGGLE, () => null);
export const modalDeleteToggle = text => dispatch => {
  dispatch(deleteAction(text));
};

const deleteType = createAction(MODAL_DELETE_TYPE, () => null);
export const modalDeleteType = text => dispatch => {
  dispatch(deleteType(text));
};
