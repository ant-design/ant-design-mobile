import React from 'react';
import renderer from 'react-test-renderer';
import Switch from '../index';

describe('Switch', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Switch checked />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
