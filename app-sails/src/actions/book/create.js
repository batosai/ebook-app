import { createTypes, createActions, request } from '../../utils';

export const types = createTypes("BOOK:CREATE")
export const actions = createActions(types)

export const dispatch = data => dispatch => {
  dispatch(actions.request());

  request({ method:'POST', url: '/books', data })
    .then(({body, response}) => dispatch(actions.success(body)));
}
