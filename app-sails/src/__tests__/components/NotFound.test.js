import React from 'react';
import NotFound from '../../components/NotFound';
import { shallow, mount, render } from 'enzyme';

function setup() {
  const enzymeWrapper = shallow(<NotFound />);

  return {
    enzymeWrapper,
  };
}

describe('Components', () => {
  it('NotFound', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('div').text()).toBe('NotFound');
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
