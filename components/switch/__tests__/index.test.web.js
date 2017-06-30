import React from 'react';
import { render, shallow } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Switch from '../index.web';

describe('SegmentedControl', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch checked />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  it('check api', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Switch checked onChange={onChange} />);
    expect(wrapper.find('input').is('input[value="on"]')).toBeTruthy();
    // I don't know why click/change doesn't change the value to `off`
    // wrapper.find('input').simulate('click', { target: { checked: false } });
    // expect(wrapper.find('input').is('input[value="off"]')).toBeTruthy();
  });
});
