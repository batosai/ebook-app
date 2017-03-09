import React from 'react';
import Library from '../../components/Library';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../../components/Library');

// TODO enzyme pour utiliser un context et éviter le bug de react-test-renderer
// => prepareStyles
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
//http://redux.js.org/docs/recipes/WritingTests.html
// https://github.com/callemall/material-ui/issues/4664
//https://github.com/callemall/material-ui/issues/5330

describe('Components', () => {
  it('Library', () => {
    // const expectedAction = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});
    //
    // expect(actions.librariesRequest()).toEqual(expectedAction());
    // expect(actions.librariesRequest()).toMatchSnapshot();
  });


  // const style = {
  //   root: {},
  //   gridList: {}
  // };
  // const component = renderer.create(
  //   <Library style={style} tiles={[]} />
  // );
  // let tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
