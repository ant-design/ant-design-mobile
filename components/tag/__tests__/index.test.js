import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Tag from '../index';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    const wrapper = render(<Tag>Basic</Tag>);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('small size does not have closeDom', () => {
    const wrapper = shallow(<Tag small closable>Basic</Tag>);
    expect(wrapper.find('.am-tag-close')).toHaveLength(0);
  });

  it('onChange then selected', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Tag onChange={onChange}>Basic</Tag>);
    expect(wrapper.state('selected')).toEqual(false);
    wrapper.find('.am-tag').simulate('click');
    expect(wrapper.state('selected')).toEqual(true);
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('onClose and removed', () => {
    const onClose = jest.fn();
    const afterClose = jest.fn();
    const wrapper = shallow(<Tag closable onClose={onClose} afterClose={afterClose}>Basic</Tag>);
    expect(wrapper.find('.am-tag-close')).toHaveLength(1);
    expect(wrapper.state('closed')).toEqual(false);
    wrapper.find('.am-tag-close').simulate('click');
    expect(onClose).toHaveBeenCalled();
    expect(wrapper.state('closed')).toEqual(true);
    expect(afterClose).toHaveBeenCalled();
    expect(wrapper.find('.am-tag')).toHaveLength(0);
  });
});
