import React from 'react';
import Library from '../../components/Library';
import { shallow, mount, render } from 'enzyme';

function setup() {
  const props = {
    // addTodo: jest.fn()
    tiles: [
      {
        id: 1,
        library_id: 1,
        img: '',
        title: 'run test',
        author: 'jeremy',
      },
      {
        id: 2,
        library_id: 2,
        img: '',
        title: 'run test 2',
        author: 'jeremy',
      },
    ],
    style: {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
      },
    },
  };

  const enzymeWrapper = shallow(<Library {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

// jest.dontMock('../../components/Library');

// TODO enzyme pour utiliser un context et éviter le bug de react-test-renderer
// => prepareStyles
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
//http://redux.js.org/docs/recipes/WritingTests.html
// https://github.com/callemall/material-ui/issues/4664
//https://github.com/callemall/material-ui/issues/5330

describe('Components', () => {
  it('Library', () => {
    const { enzymeWrapper } = setup();

    // const expectedAction = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});
    //
    // expect(actions.librariesRequest()).toEqual(expectedAction());
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it('Count Link', () => {
    const { enzymeWrapper } = setup();

    // const expectedAction = createAction(types.LIBRARIES_REQUEST, () => null, {emit:true});
    //
    // expect(actions.librariesRequest()).toEqual(expectedAction());
    const links = enzymeWrapper.find('Link');
    expect(links.length).toBe(2);
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
