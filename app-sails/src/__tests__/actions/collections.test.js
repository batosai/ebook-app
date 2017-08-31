import * as actions from '../../actions/collections';
import * as types from '../../types';

describe('Action', () => {
  it('to request collections', () => {
    const expectedAction = {
      type: types.COLLECTIONS_REQUEST,
      emit: true,
    };

    expect(actions.collectionsRequestAction()).toEqual(expectedAction);
    expect(actions.collectionsRequestAction()).toMatchSnapshot();
  });

  it('to filter collections', () => {
    const expectedAction = {
      type: types.COLLECTIONS_FILTER,
      payload: 1,
    };

    expect(actions.collectionByLibraryAction(1)).toEqual(expectedAction);
    expect(actions.collectionByLibraryAction(1)).toMatchSnapshot();
  });

  it('to add collections', () => {
    const expectedAction = {
      type: types.COLLECTION_ADD_REQUEST,
      emit: true,
      payload: {
        title: 'My collection',
        library_id: 2,
      },
    };

    expect(actions.collectionAddRequestAction(expectedAction.payload)).toEqual(
      expectedAction,
    );
    expect(
      actions.collectionAddRequestAction(expectedAction.payload),
    ).toMatchSnapshot();
  });

  it('to edit collections', () => {
    const expectedAction = {
      type: types.COLLECTION_EDIT_REQUEST,
      emit: true,
      payload: {
        id: 1,
        title: 'My collection',
        library_id: 2,
      },
    };

    expect(actions.collectionEditRequestAction(expectedAction.payload)).toEqual(
      expectedAction,
    );
    expect(
      actions.collectionEditRequestAction(expectedAction.payload),
    ).toMatchSnapshot();
  });

  it('to delete collections', () => {
    const expectedAction = {
      type: types.COLLECTION_DELETE_REQUEST,
      emit: true,
      payload: { id: 1 },
    };

    expect(actions.collectionDeleteRequestAction(1)).toEqual(expectedAction);
    expect(actions.collectionDeleteRequestAction(1)).toMatchSnapshot();
  });
});
