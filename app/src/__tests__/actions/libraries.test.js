import * as actions from '../../actions/libraries'
import * as types from '../../types'
import { createAction } from '../../helpers';

describe('Action', () => {
  it('to request libraries', () => {
    const expectedAction = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});

    expect(actions.librariesRequest()).toEqual(expectedAction());
    expect(actions.librariesRequest()).toMatchSnapshot();
  });

  it('to add libraries', () => {
    const expectedAction = createAction(types.LIBRARY_ADD_REQUEST, (name) => ({name}), {emit:true});

    expect(actions.libraryAddRequest()).toEqual(expectedAction());
    expect(actions.libraryAddRequest()).toMatchSnapshot();
  });

  it('to edit libraries', () => {
    const expectedAction = createAction(types.LIBRARY_EDIT_REQUEST, (data) => ({...data}), {emit:true});

    expect(actions.libraryEditRequest()).toEqual(expectedAction());
    expect(actions.libraryEditRequest()).toMatchSnapshot();
  });

  it('to delete libraries', () => {
    const expectedAction = createAction(types.LIBRARY_DELETE_REQUEST, (id) => ({id}), {emit:true});

    expect(actions.libraryDeleteRequest()).toEqual(expectedAction());
    expect(actions.libraryDeleteRequest()).toMatchSnapshot();
  });
});
