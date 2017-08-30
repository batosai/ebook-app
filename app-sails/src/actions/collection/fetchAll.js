import { createTypes, createActions, request } from '../../utils';

export const types = createTypes("COLLECTION:FETCH_ALL")
export const actions = createActions(types)

export const dispatch = () => dispatch => {
  dispatch(actions.request());

  request({ method:'GET', url: '/collections', data:{} })
    .then(({body, response}) => dispatch(actions.success(body)));
}
