import * as actions from '../../actions/libraries'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request libraries', () => {
    const expectedAction = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});

    expect(actions.librariesRequestAction()).toEqual(expectedAction());
    expect(actions.librariesRequestAction()).toMatchSnapshot();
  });

  it('to add libraries', () => {
    const expectedAction = createAction(types.LIBRARY_ADD_REQUEST, (name) => ({name}), {emit:true});

    expect(actions.libraryAddRequestAction()).toEqual(expectedAction());
    expect(actions.libraryAddRequestAction()).toMatchSnapshot();
  });

  it('to edit libraries', () => {
    const expectedAction = createAction(types.LIBRARY_EDIT_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.libraryEditRequestAction()).toEqual(expectedAction());
    expect(actions.libraryEditRequestAction()).toMatchSnapshot();
  });

  it('to delete libraries', () => {
    const expectedAction = createAction(types.LIBRARY_DELETE_REQUEST, (id) => ({id}), {emit:true});

    expect(actions.libraryDeleteRequestAction()).toEqual(expectedAction());
    expect(actions.libraryDeleteRequestAction()).toMatchSnapshot();
  });
});
