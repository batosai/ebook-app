import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('BOOK:UPLOAD');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({
    method: 'POST',
    url: `/books/upload`,
    data,
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
