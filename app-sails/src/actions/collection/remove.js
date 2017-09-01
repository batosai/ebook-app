import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('COLLECTION:REMOVE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'DELETE',
    url: '/collections',
    data,
  }).then(({ body, response }) => dispatch(actions.success(body.id)));
};
