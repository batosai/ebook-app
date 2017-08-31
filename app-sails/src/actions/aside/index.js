// import * as types from '../../types';
//
// export const toggleAsideAction = () => ({
//   type: types.ASIDE_TOGGLE
// });

import { createTypes, createActions } from '../../utils';

export const types = createTypes('ASIDE:TOGGLE');
export const actions = createActions(types);

export const dispatch = () => dispatch => {
  dispatch(actions.request());
};
