import React from 'react';
import { mount, shallow } from 'enzyme';
import Progress from '../index';

describe('Progress', () => {
  it('renders fixed correctly', () => {
    const wrapper = shallow(
      <Progress percent={30} position="fixed" />,
    );
    expect(wrapper.find('.am-progress-fixed-outer')).toHaveLength(1);
  });

  it('renders unfilled correctly', () => {
    const wrapper = mount(
      <Progress percent={40} position="normal" unfilled={false} appearTransition />,
    );
    expect(wrapper.find('.am-progress-hide-outer')).toHaveLength(1);
  });
});
