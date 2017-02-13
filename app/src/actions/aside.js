import { createAction } from '../helpers';
import { ASIDE_TOGGLE } from '../types';

const toggle = createAction(ASIDE_TOGGLE, () => null);
export const asideToggle = text => dispatch => {
  dispatch(toggle(text));
};
