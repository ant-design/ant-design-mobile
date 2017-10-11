import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Result from '../index';

describe('Result', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Result
        imgUrl={{ uri: 'https://zos.alipayobjects.com/rmsportal/qlMpMyJTcSjMpKAgtcEt.png' }}
        title="验证成功"
        message="所提交内容已成功完成验证"
      />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
