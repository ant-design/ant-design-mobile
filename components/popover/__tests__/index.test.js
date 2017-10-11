import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Popover from '../index';
import Item from '../Item';

describe('Popover', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Popover
        overlay={[
          (<Item key="4" value="scan">扫一扫</Item>),
          (<Item key="5" value="special">我的二维码</Item>),
          (<Item key="6" value="button ct">帮助</Item>),
        ]}
        mask
        visible
      >
        <div>trigger</div>
      </Popover>,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('.am-popover')).toHaveLength(0);
  });
});
