import { createAction } from '../helpers';
import * as types from '../types';

export const toggle = createAction(types.ASIDE_TOGGLE, () => null);
export const asideToggle = text => dispatch => {
  dispatch(toggle(text));
};
