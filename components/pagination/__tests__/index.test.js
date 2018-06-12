import React from 'react';
import { mount, shallow } from 'enzyme';
import Pagination from '../index';

describe('Pagination', () => {
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
