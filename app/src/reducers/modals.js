import { MODAL_COLLECTION_TOGGLE, MODAL_LIBRARY_TOGGLE, MODAL_DELETE_TOGGLE, MODAL_DELETE_TYPE } from '../types';

import { createReducer } from '../helpers';

const initialState = {
  collection: { open:false },
  library: { open:false },
  delete: { open:false, type:null },
};

const reducers = {

  [MODAL_COLLECTION_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {collection: {open: !prevState.collection.open}}),

  [MODAL_LIBRARY_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {library: {open: !prevState.library.open}}),

  [MODAL_DELETE_TOGGLE]: (prevState, payload) =>
    Object.assign({}, prevState, {delete: {open: !prevState.delete.open, type: payload}}),

  [MODAL_DELETE_TYPE]: (prevState, payload) =>
    Object.assign({}, prevState, {delete: {type: prevState.delete.type}}),

}

export default createReducer(initialState, reducers);
