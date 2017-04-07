import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Progress from '../index';

describe('Progress', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Progress percent={30} position="fixed" />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
