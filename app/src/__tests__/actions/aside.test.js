import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import * as actions from '../../actions/aside';
import * as types from '../../types';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Action', () => {
  it('to toggle aside', () => {

    const store = mockStore({
      aside: {
        open: false
      }
    });

    const expectedAction = {
      type: types.ASIDE_TOGGLE
    };

    expect(actions.toggleAsideAction()).toEqual(expectedAction);
    expect(actions.toggleAsideAction()).toMatchSnapshot();


    // return store.dispatch(actions.asideToggle())
    //   .then(() => { // return of async actions
    //     expect(store.getActions()).toEqual(expectedActions)
    //   })
  });
});

// TODO TESTS A FAIRE
// actions -> ok
// reducers -> ok
// components
// containers ?
// dispatchers ?
// routes ?
// middleware ? (socket.io)

// http://redux.js.org/docs/basics/ExampleTodoList.html
// http://redux.js.org/docs/recipes/WritingTests.html
// https://facebook.github.io/jest/docs/getting-started.html
// https://facebook.github.io/jest/docs/tutorial-react.html#content
