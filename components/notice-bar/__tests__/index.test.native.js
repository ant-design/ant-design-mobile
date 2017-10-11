import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import NoticeBar from '../index';

describe('NoticeBar', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(<NoticeBar>foo</NoticeBar>);
    expect(wrapper.toJSON()).toMatchSnapshot();
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
      wrapper.find('TouchableWithoutFeedback').simulate('press');
    });

    it('fires onClick event', () => {
      expect(handleClick).toBeCalledWith();
    });

    it('change state', () => {
      expect(wrapper.state('show')).toBe(false);
    });
  });
});
