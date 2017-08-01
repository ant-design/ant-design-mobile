import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Switch from '../index';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch checked />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('check api', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Switch checked onChange={onChange} />);
    wrapper.find('input').simulate('change', { target: { checked: false } });
    expect(onChange).toHaveBeenCalledWith(false);
  });
});
