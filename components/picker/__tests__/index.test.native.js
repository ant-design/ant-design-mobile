import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import { district } from 'antd-mobile-demo-data';
import Picker from '../index';
import List from '../../list/index';

describe('Picker', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <List>
        <Picker data={district}>
          <List.Item arrow="horizontal">选择</List.Item>
        </Picker>
      </List>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
