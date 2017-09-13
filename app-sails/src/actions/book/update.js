import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('BOOK:UPDATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'PUT',
    url: `/books/${data.id}`,
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
