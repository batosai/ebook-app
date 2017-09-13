import { createTypes, createActions, request } from '../../utils';

export const types = createTypes('BOOK:FETCH');
export const actions = createActions(types);

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({ method: 'GET', url: '/books', data }).then(({ body, response }) =>
    dispatch(actions.success(body)),
  );
};
