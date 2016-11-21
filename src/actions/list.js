import { createAction } from '../helpers';


export const LIST_TYPE          = 'list:type';
export const LIST_SWITCH_TYPE   = 'list:type:switch';
export const LIST_UPDATE        = 'list:update';
export const LIST_SWITCH_UPDATE = 'list:update:switch';

const listType = createAction(LIST_TYPE, () => null);
export const getType = text => dispatch => {
  dispatch(listType(text));
};

const listSwitchType = createAction(LIST_SWITCH_TYPE, () => null);
export const toogleType = text => dispatch => {
  dispatch(listSwitchType(text));
};

const listUpdate = createAction(LIST_UPDATE, () => null);
export const isUpdate = status => dispatch => {
  dispatch(listUpdate());
};

const listSwitchUpdate = createAction(LIST_SWITCH_UPDATE, () => null);
export const toogleUpdate = text => dispatch => {
  dispatch(listSwitchUpdate(text));
};
