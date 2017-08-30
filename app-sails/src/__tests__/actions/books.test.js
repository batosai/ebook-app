import * as actions from '../../actions/books';
import * as types from '../../types';

describe('Action', () => {
  it('to request books', () => {
    const expectedAction = {
      type: types.BOOKS_REQUEST,
      emit:true,
      payload: { id: 1 }
    };

    expect(actions.booksRequestAction(1)).toEqual(expectedAction);
    expect(actions.booksRequestAction(1)).toMatchSnapshot();
  });
});
