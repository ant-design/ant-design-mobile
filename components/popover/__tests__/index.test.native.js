import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Popover from '../index';

describe('Popover', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Popover overlay={[
        (<Popover.Item key="4" value="scan">扫一扫</Popover.Item>),
        (<Popover.Item key="5" value="special">我的二维码</Popover.Item>),
        (<Popover.Item key="6" value="button ct">帮助</Popover.Item>),
      ]}
      >
        trigger
      </Popover>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
