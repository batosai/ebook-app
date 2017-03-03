import * as actions from '../../actions/collections'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request collections', () => {
    const expectedAction = createAction(types.COLLECTIONS_REQUEST, () => null, {emit:true});

    expect(actions.collectionsRequest()).toEqual(expectedAction());
    expect(actions.collectionsRequest()).toMatchSnapshot();
  });

  it('to filter collections', () => {
    const expectedAction = createAction(types.COLLECTIONS_FILTER, (id) => (id));

    expect(actions.collectionByLibrary()).toEqual(expectedAction());
    expect(actions.collectionByLibrary()).toMatchSnapshot();
  });

  it('to add collections', () => {
    const expectedAction = createAction(types.COLLECTION_ADD_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.collectionAddRequest()).toEqual(expectedAction());
    expect(actions.collectionAddRequest()).toMatchSnapshot();
  });

  it('to edit collections', () => {
    const expectedAction = createAction(types.COLLECTION_EDIT_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.collectionEditRequest()).toEqual(expectedAction());
    expect(actions.collectionEditRequest()).toMatchSnapshot();
  });

  it('to delete collections', () => {
    const expectedAction = createAction(types.COLLECTION_DELETE_REQUEST, (id) => ({id}), {emit:true});

    expect(actions.collectionDeleteRequest()).toEqual(expectedAction());
    expect(actions.collectionDeleteRequest()).toMatchSnapshot();
  });
});
