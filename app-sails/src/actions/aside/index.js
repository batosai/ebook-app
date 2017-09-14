import { createTypes, createActions } from '../../utils';
import * as library from './library';

export const types = createTypes('ASIDE:TOGGLE');
export const actions = createActions(types);

export const dispatch = () => dispatch => {
  dispatch(actions.request());
};

export { library };
