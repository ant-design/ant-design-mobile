import React from 'react';
import { shallow } from 'enzyme';
import NoticeBar from '../index';

describe('NoticeBar', () => {
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
