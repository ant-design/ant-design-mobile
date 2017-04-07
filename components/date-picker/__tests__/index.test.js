import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import DatePicker from '../index';
import List from '../../list/index';

describe('DatePicker', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <List>
        <DatePicker>
          <List.Item arrow="horizontal">选择时间</List.Item>
        </DatePicker>
      </List>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
