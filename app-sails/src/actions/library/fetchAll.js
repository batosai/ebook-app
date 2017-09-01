import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('LIBRARY:FETCH_ALL');
export const actions = createActions(types);

export const dispatch = () => dispatch => {
  dispatch(actions.request());

  request({
    method: 'GET',
    url: '/libraries',
    data: {},
  }).then(({ body, response }) => dispatch(actions.success(body)));
};
