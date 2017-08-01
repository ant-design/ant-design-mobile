import React from 'react';
import { render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Button from '../index';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button>foo</Button>);
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });
});
