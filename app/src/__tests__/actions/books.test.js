import * as actions from '../../actions/books'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request books', () => {
    const expectedAction = createAction(types.BOOKS_REQUEST, (id) => ({ id }), {emit:true});

    expect(actions.booksRequestAction()).toEqual(expectedAction());
    expect(actions.booksRequestAction()).toMatchSnapshot();
  });
});
