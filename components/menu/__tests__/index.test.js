import React from 'react';
import { mount } from 'enzyme';
import Menu from '../index';

describe('Menu', () => {
  const data = [
    {
      label: 'Item1',
      value: '1',
    },
    {
      label: 'Item2',
      value: '2',
      children: [
        {
          label: 'Item21',
          value: '21',
        },
        {
          label: 'Item22',
          value: '22',
        },
      ],
    },
  ];

  it('controll by value', () => {
    const wrapper = mount(<Menu data={data} value={['2', '22']} />);
    expect(wrapper.find('.am-list-item').at(1).hasClass('am-menu-selected')).toBe(true);
    expect(wrapper.find('.am-list-item').at(3).hasClass('am-sub-menu-item-selected')).toBe(true);
  });

  it('fires change event when item is selected', () => {
    jest.useFakeTimers();
    const handleChange = jest.fn();
    const wrapper = mount(<Menu data={data} onChange={handleChange} />);
    wrapper.find('.am-list-item').at(1).simulate('click');
    wrapper.find('.am-list-item').at(3).find('.am-radio-input').simulate('change');
    jest.runAllTimers();
    expect(handleChange).toBeCalledWith(['2', '22']);
  });

  describe('level 1', () => {
    it('controll by value', () => {
      const wrapper = mount(<Menu data={data} level="1" value={['2']} />);
      expect(wrapper.find('.am-list-item').at(1).hasClass('am-sub-menu-item-selected')).toBe(true);
    });

    it('fires change event when item is selected', () => {
      jest.useFakeTimers();
      const handleChange = jest.fn();
      const wrapper = mount(<Menu data={data} level="1" onChange={handleChange} />);
      wrapper.find('.am-list-item').at(1).find('.am-radio-input').simulate('change');
      jest.runAllTimers();
      expect(handleChange).toBeCalledWith(['2']);
    });
  });
});
