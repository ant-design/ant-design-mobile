import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Pagination from '../index.web';

describe('Pagination', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Pagination total={5} current={3} />,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.am-pagination')).toHaveLength(1);
  });

  it('renders mode="number" correctly', () => {
    const wrapper = mount(
      <Pagination mode="number" total={5} current={3} />,
    );

    expect(wrapper.find('.am-flexbox-item')).toHaveLength(0);
  });
});
