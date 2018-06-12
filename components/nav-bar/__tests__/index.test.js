import React from 'react';
import { mount } from 'enzyme';
import NavBar from '../index';

describe('NavBar', () => {
  it('trigger event correctly', () => {
    const onLeftClick = (e) => {
      // console.log('onLeftClick');
      expect(e.target.className).toBe('am-navbar-left');
    };
    const wrapper = mount(
      <NavBar onLeftClick={onLeftClick}>NavBar</NavBar>,
    );
    wrapper.find('.am-navbar-left').simulate('click');
  });
});
