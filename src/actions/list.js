import { createAction } from '../helpers';


export const LIST_TYPE = 'list:type';
export const LIST_SWITCH_TYPE = 'list:type:switch';

const listType = createAction(LIST_TYPE, () => null);
export const getType = text => dispatch => {
  dispatch(listType(text));
};

const listSwitchType = createAction(LIST_SWITCH_TYPE, () => null);
export const toogleType = text => dispatch => {
  dispatch(listSwitchType(text));
};
