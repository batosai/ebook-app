import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('BOOK:ILLUSTRATION:UPDATE');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'PUT',
    url: `/books/${data.id}/illustration`,
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
