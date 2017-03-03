import * as actions from '../../actions/book'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request book', () => {
    const expectedAction = createAction(types.BOOK_REQUEST, (id) => ({ id }), {emit:true});

    expect(actions.bookRequest()).toEqual(expectedAction());
    expect(actions.bookRequest()).toMatchSnapshot();
  });

  it('to create book', () => {
    const expectedAction = createAction(types.BOOK_EDIT_REQUEST, (book) => ({book}), {emit:true});

    expect(actions.bookEditRequest()).toEqual(expectedAction());
    expect(actions.bookEditRequest()).toMatchSnapshot();
  });

  it('to delete book', () => {
    const expectedAction = createAction(types.BOOK_DELETE_REQUEST, (id) => ({ id }), {emit:true});

    expect(actions.bookDeleteRequest()).toEqual(expectedAction());
    expect(actions.bookDeleteRequest()).toMatchSnapshot();
  });
});
