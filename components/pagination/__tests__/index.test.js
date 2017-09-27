import React from 'react';
import { render, mount, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Pagination from '../index';

describe('Pagination', () => {
  it('match snapshot', () => {
    const wrapper = render(
      <Pagination total={5} current={3} />,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Pagination total={5} current={3} />,
    );
    expect(wrapper.find('.am-pagination')).toHaveLength(1);
  });

  it('renders mode="number" correctly', () => {
    const wrapper = mount(
      <Pagination mode="number" total={5} current={3} />,
    );

    expect(wrapper.find('.am-flexbox-item')).toHaveLength(0);
  });
});
