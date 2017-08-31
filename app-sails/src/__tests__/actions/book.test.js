import * as actions from '../../actions/book';
import * as types from '../../types';

describe('Action', () => {
  it('to request book', () => {
    const expectedAction = {
      type: types.BOOK_REQUEST,
      emit: true,
      payload: { id: 1 },
    };

    expect(actions.bookRequestAction(1)).toEqual(expectedAction);
    expect(actions.bookRequestAction(1)).toMatchSnapshot();
  });

  it('to edit book', () => {
    const expectedAction = {
      type: types.BOOK_EDIT_REQUEST,
      emit: true,
      payload: {
        book: {
          title: 'my title',
          read: false,
          author: 'jeremy',
          editor: 'glénat',
          number_pages: 22,
          number_volumes: 4,
          year: 2010,
          collection_id: 2,
          description: '',
        },
      },
    };

    expect(actions.bookEditRequestAction(expectedAction.payload.book)).toEqual(
      expectedAction,
    );
    expect(
      actions.bookEditRequestAction(expectedAction.payload.book),
    ).toMatchSnapshot();
  });

  it('to delete book', () => {
    const expectedAction = {
      type: types.BOOK_DELETE_REQUEST,
      emit: true,
      payload: { id: 1 },
    };

    expect(actions.bookDeleteRequestAction(1)).toEqual(expectedAction);
    expect(actions.bookDeleteRequestAction(1)).toMatchSnapshot();
  });
});
