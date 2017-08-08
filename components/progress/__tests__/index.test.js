import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Progress from '../index';

describe('Progress', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Progress percent={30} position="fixed" />,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.am-progress-fixed-outer')).toHaveLength(1);
  });

  it('renders unfilled correctly', () => {
    const wrapper = mount(
      <Progress percent={40} position="normal" unfilled={false} appearTransition />,
    );
    expect(wrapper.find('.am-progress-hide-outer')).toHaveLength(1);
  });
});
