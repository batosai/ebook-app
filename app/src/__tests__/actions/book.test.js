import * as actions from '../../actions/book'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request book', () => {
    const expectedAction = createAction(types.BOOK_REQUEST, (id) => ({ id }), {emit:true});

    expect(actions.bookRequestAction()).toEqual(expectedAction());
    expect(actions.bookRequestAction()).toMatchSnapshot();
  });

  it('to create book', () => {
    const expectedAction = createAction(types.BOOK_EDIT_REQUEST, (book) => ({book}), {emit:true});

    expect(actions.bookEditRequestAction()).toEqual(expectedAction());
    expect(actions.bookEditRequestAction()).toMatchSnapshot();
  });

  it('to delete book', () => {
    const expectedAction = createAction(types.BOOK_DELETE_REQUEST, (id) => ({ id }), {emit:true});

    expect(actions.bookDeleteRequestAction()).toEqual(expectedAction());
    expect(actions.bookDeleteRequestAction()).toMatchSnapshot();
  });
});
