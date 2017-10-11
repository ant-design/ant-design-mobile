import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import NoticeBar from '../index';

describe('NoticeBar', () => {
  it('renders correctly', () => {
    const wrapper = render(<NoticeBar>foo</NoticeBar>);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  describe('onClick', () => {
    let handleClick;
    let wrapper;

    beforeEach(() => {
      handleClick = jest.fn();
      wrapper = shallow(
        <NoticeBar mode="closable" onClick={handleClick}>
          Notice: The arrival time of incomes and
        </NoticeBar>,
      );
      wrapper.find('.am-notice-bar-operation').simulate('click');
    });

    it('fires onClick event', () => {
      expect(handleClick).toBeCalledWith();
    });

    it('change state', () => {
      expect(wrapper.state('show')).toBe(false);
    });
  });
});
