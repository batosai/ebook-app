import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('COLLECTION:UPDATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'PUT',
    url: `/collections/${data.id}`,
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
