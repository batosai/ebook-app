import * as actions from '../../actions/libraries';
import * as types from '../../types';

describe('Action', () => {
  it('to request libraries', () => {
    const expectedAction = {
      type: types.LIBRARIES_REQUEST,
      emit:true
    };

    expect(actions.librariesRequestAction()).toEqual(expectedAction);
    expect(actions.librariesRequestAction()).toMatchSnapshot();
  });

  it('to add libraries', () => {
    const expectedAction = {
      type: types.LIBRARY_ADD_REQUEST,
      emit:true,
      payload: { name: 'my library' }
    };

    expect(actions.libraryAddRequestAction(expectedAction.payload.name)).toEqual(expectedAction);
    expect(actions.libraryAddRequestAction(expectedAction.payload.name)).toMatchSnapshot();
  });

  it('to edit libraries', () => {
    const expectedAction = {
      type: types.LIBRARY_EDIT_REQUEST,
      emit:true,
      payload: {
        id: 1,
        name: 'my library'
      }
    };

    expect(actions.libraryEditRequestAction(expectedAction.payload)).toEqual(expectedAction);
    expect(actions.libraryEditRequestAction(expectedAction.payload)).toMatchSnapshot();
  });

  it('to delete libraries', () => {
    const expectedAction = {
      type: types.LIBRARY_DELETE_REQUEST,
      emit:true,
      payload: { id: 1 }
    };

    expect(actions.libraryDeleteRequestAction(1)).toEqual(expectedAction);
    expect(actions.libraryDeleteRequestAction(1)).toMatchSnapshot();
  });
});
