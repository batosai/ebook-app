import { createAction } from '../helpers';

export const ASIDE_TOGGLE = 'aside:toggle';
export const ASIDE_OPEN   = 'aside:open';

const toggle = createAction(ASIDE_TOGGLE, () => null);
export const asideToggle = text => dispatch => {
  dispatch(toggle(text));
};
