import React from 'react';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

import Pagination from '../index';

describe('Pagination', () => {
  it('renders correctly', () => {
    const wrapper = renderer.create(
      <Pagination total={5} current={3} />,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
