import { createTypes, createActions, request as req } from '../../utils';

export const types = createTypes('LIBRARY:FETCH_ALL');
export const actions = createActions(types);

export const request = dispatch => {
  dispatch(actions.request());

  req({
    method: 'GET',
    url: '/libraries',
    data: {},
  }).then(({ body, response }) => dispatch(actions.success(body)));
};

export const dispatch = () => request;
