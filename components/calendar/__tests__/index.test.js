import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Calendar from '../index';

describe('Calendar', () => {
  it('renders correctly', () => {
    const wrapper = render(<Calendar visible />);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
