import React from 'react';
import { connect } from 'react-redux';
import Aside from '../../../containers/Aside';
import { shallow, mount, render } from 'enzyme';

import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';

describe('Containers', () => {
  it('Aside', () => {
    const expectedState = {
      open: false,
    };

    const mapStateToProps = state => ({
      open,
    });

    const action = {
      type: 'type',
    };

    const mapDispatchToProps = dispatch => ({
      dispatchProp() {
        dispatch(action);
      },
    });

    const store = createMockStore(expectedState);

    const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(
      Aside,
    );
    const component = shallowWithStore(<ConnectedComponent />, store);

    component.props().dispatchProp();
    expect(store.isActionDispatched(action)).toBe(true);

    // TODO essayer de mieux comprendre le principe

    // expect(store.isActionDispatched(action)).toBe(true);

    // https://github.com/Knegusen/enzyme-redux
  });
});
