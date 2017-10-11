import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Result from '../index';

describe('Result', () => {
  it('match snapshot', () => {
    const wrapper = render(
      <Result
        imgUrl="https://zos.alipayobjects.com/rmsportal/qlMpMyJTcSjMpKAgtcEt.png"
        title="验证成功"
        message="所提交内容已成功完成验证"
      />,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const wrapper = shallow(
      <Result
        imgUrl="https://zos.alipayobjects.com/rmsportal/qlMpMyJTcSjMpKAgtcEt.png"
        title="验证成功"
        message="所提交内容已成功完成验证"
      />,
    );
    expect(wrapper.find('.am-result')).toHaveLength(1);
  });
});
