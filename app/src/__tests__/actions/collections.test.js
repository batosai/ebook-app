import * as actions from '../../actions/collections'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request collections', () => {
    const expectedAction = createAction(types.COLLECTIONS_REQUEST, () => null, {emit:true});

    expect(actions.collectionsRequestAction()).toEqual(expectedAction());
    expect(actions.collectionsRequestAction()).toMatchSnapshot();
  });

  it('to filter collections', () => {
    const expectedAction = createAction(types.COLLECTIONS_FILTER, (id) => (id));

    expect(actions.collectionByLibraryAction()).toEqual(expectedAction());
    expect(actions.collectionByLibraryAction()).toMatchSnapshot();
  });

  it('to add collections', () => {
    const expectedAction = createAction(types.COLLECTION_ADD_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.collectionAddRequestAction()).toEqual(expectedAction());
    expect(actions.collectionAddRequestAction()).toMatchSnapshot();
  });

  it('to edit collections', () => {
    const expectedAction = createAction(types.COLLECTION_EDIT_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.collectionEditRequestAction()).toEqual(expectedAction());
    expect(actions.collectionEditRequestAction()).toMatchSnapshot();
  });

  it('to delete collections', () => {
    const expectedAction = createAction(types.COLLECTION_DELETE_REQUEST, (id) => ({id}), {emit:true});

    expect(actions.collectionDeleteRequestAction()).toEqual(expectedAction());
    expect(actions.collectionDeleteRequestAction()).toMatchSnapshot();
  });
});
