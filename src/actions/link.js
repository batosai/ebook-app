import { createAction } from '../helpers';

export const LINK_TOGGLE = 'link:toggle';
export const LINK_OPEN   = 'link:open';
export const LINK_CLOSE  = 'link:close';
export const LINK_TO     = 'link:to';
export const LINK_CLEAR  = 'link:clear';

const linkToggle = createAction(LINK_TOGGLE, () => null);
export const asideToggle = text => dispatch => {
  dispatch(linkToggle(text));
};

const linkOpen = createAction(LINK_OPEN, () => null);
export const asideOpen = text => dispatch => {
  dispatch(linkOpen(text));
};

const linkClose = createAction(LINK_CLOSE, () => null);
export const asideClose = text => dispatch => {
  dispatch(linkClose(text));
};

const linkTo = createAction(LINK_TO, (url) => ({ url }));
export const setUrl = text => dispatch => {
  dispatch(linkTo(text));
};

const clearLink = createAction(LINK_CLEAR, (url) => ({ url }));
export const clearUrl = text => dispatch => {
  dispatch(clearLink(text));
};
