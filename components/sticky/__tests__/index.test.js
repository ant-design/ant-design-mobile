import React from 'react';
import { shallow } from 'enzyme';
import Sticky from '../index';

describe('Sticky', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Sticky disable />,
    );
    expect(wrapper.find('.am-sticky-default')).toHaveLength(2);
  });
});
