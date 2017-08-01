import React from 'react';
import { mount } from 'enzyme';
// import { renderToJson } from 'enzyme-to-json';
import DatePicker from '../index.web';
import List from '../../list/index.web';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = mount(
      <List>
        <DatePicker>
          <List.Item arrow="horizontal">选择时间</List.Item>
        </DatePicker>
      </List>,
    );
    // expect(renderToJson(wrapper)).toMatchSnapshot();
    wrapper.find('.am-list-item').simulate('click');
    // console.log(wrapper.find('.am-list-item'))

    // todo: should 1
    expect(wrapper.find('.am-picker')).toHaveLength(0);
  });
});
