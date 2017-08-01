import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Result from '../index';

describe('Result', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Result
        imgUrl="https://zos.alipayobjects.com/rmsportal/qlMpMyJTcSjMpKAgtcEt.png"
        title="验证成功"
        message="所提交内容已成功完成验证"
      />,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.am-result')).toHaveLength(1);
  });
});
