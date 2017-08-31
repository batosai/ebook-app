import React from 'react';
import Aside from '../../../components/Aside';
import { shallow, mount, render } from 'enzyme';

function setup() {
  const props = {
    open: true,
    toggleAside: jest.fn(),
    collections: [],
    findLibraries: jest.fn(),
    findCollections: jest.fn(),
  };

  const enzymeWrapper = shallow(<Aside {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('Components', () => {
  it('Aside', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper).toMatchSnapshot();
  });
});
