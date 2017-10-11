import React from 'react';
import { render, mount } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import NavBar from '../index';

describe('NavBar', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <NavBar leftContent="返回" mode="light" rightContent={'i'}>NavBar</NavBar>,
    );
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

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
