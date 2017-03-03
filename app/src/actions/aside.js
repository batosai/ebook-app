import { createAction } from '../helpers';
import * as types from '../types';

export const toggleAsideAction = createAction(types.ASIDE_TOGGLE, () => null);
export const toggleAside = text => dispatch => {
  dispatch(toggleAsideAction(text));
};
