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
    // ref https://github.com/facebook/react/issues/961 https://github.com/airbnb/enzyme/issues/216
    // wrapper.find('input').simulate('click', { target: { checked: false } });
    // expect(wrapper.find('input').is('input[value="off"]')).toBeTruthy();
  });
});
