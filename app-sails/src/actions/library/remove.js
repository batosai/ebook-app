import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('LIBRARY:REMOVE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'DELETE',
    url: '/libraries',
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
