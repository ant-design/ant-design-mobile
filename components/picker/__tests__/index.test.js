import React from 'react';
import { mount } from 'enzyme';

import { district } from 'antd-mobile-demo-data';
import Picker from '../index';
import List from '../../list/index';

describe.skip('Picker', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <List>
        <Picker data={district}>
          <List.Item arrow="horizontal">选择</List.Item>
        </Picker>
      </List>,
    );
    wrapper.find('.am-list-item').simulate('click');
    // console.log(wrapper.find('.am-list-item'))
    // todo: should 1
    expect(wrapper.find('.am-picker')).toHaveLength(0);
  });
});
