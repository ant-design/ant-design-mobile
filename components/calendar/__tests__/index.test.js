import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Calendar from '../index';

describe('Calendar', () => {
  it('renders correctly', () => {
    const nowDate = new Date(2017, 7, 1);
    const wrapper = render(<Calendar defaultDate={nowDate} visible />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
